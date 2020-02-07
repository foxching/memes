import React from "react";
import { Helmet } from "react-helmet";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { createDesign, updateDesign } from "../../store/actions/designAction";
import { storage } from "../../config/firebase";
import Display from "../designdashboard/Display";
import Setting from "../designdashboard/Setting";
import Loader from "../loader/Loader";

class MainDashboard extends React.Component {
  state = {
    tshirtColor: "black",
    upperText: "this is upperText",
    lowerText: "this is lowerText",
    image: "",
    url: "",
    textSize: 44,
    textColor: "white"
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.design !== nextProps.design) {
      this.setState({
        tshirtColor: nextProps.design.tshirtColor || "black",
        upperText: nextProps.design.upperText || "this is upperText",
        lowerText: nextProps.design.lowerText || "this is lowerText",
        image: nextProps.design.image || "",
        url: nextProps.design.url || "",
        textSize: nextProps.design.textSize || 44,
        textColor: nextProps.design.textColor || "white"
      });
    }
  }

  tshirtColorChange = e => {
    this.setState({ tshirtColor: e.target.id });
  };

  handleChangeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageUpload = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          console.log(snapshot);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url });
            });
        }
      );
    }
  };

  handleTextSize = e => {
    this.setState({ textSize: e.target.value });
  };

  formatTextSize = () => {
    const size = this.state.textSize;
    return parseInt(size);
  };

  handleTextColor = e => {
    this.setState({ textColor: e.target.value });
  };

  handleSaveDesign = e => {
    e.preventDefault();
    const design = { ...this.props.design, ...this.state };
    if (this.props.design.id && this.props.match.params.id !== undefined) {
      this.props.updateDesign(this.props.design.id, design);
      this.props.history.push("/my-design");
    } else {
      this.props.createDesign(this.state);
      this.props.history.push("/my-design");
    }
  };
  render() {
    const { design, requesting } = this.props;
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) return <Loader inverted={true} />;
    return (
      <div>
        <Helmet>
          <title>
            {this.props.match.params.id ? "Edit Design" : "Home - Create New"}
          </title>
          <meta name="description" content="Main Dashboard" />
        </Helmet>
        <div className="container py-4">
          <div className="card card-body">
            <div className="row">
              <div className="col col-lg-8">
                <Display
                  display={this.state}
                  formatSize={this.formatTextSize()}
                />
              </div>
              <div className="col col-lg-4">
                <Setting
                  id={design.id}
                  paramId={this.props.match.params.id}
                  display={this.state}
                  handleChangeText={this.handleChangeText}
                  tshirtColorChange={this.tshirtColorChange}
                  handleImageUpload={this.handleImageUpload}
                  handleTextSize={this.handleTextSize}
                  handleTextColor={this.handleTextColor}
                  handleSaveDesign={this.handleSaveDesign}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapState = state => {
  let design = {};

  if (state.firestore.ordered.designs && state.firestore.ordered.designs[0]) {
    design = state.firestore.ordered.designs[0];
  }
  return {
    design,
    requesting: state.firestore.status.requesting
  };
};

const mapDispatch = {
  createDesign,
  updateDesign
};

export default compose(
  firestoreConnect(props => {
    if (props.match.params.id === undefined) {
      return [];
    }
    return [
      {
        collection: "designs",
        doc: props.match.params.id,
        storeAs: "designs"
      }
    ];
  }),
  connect(
    mapState,
    mapDispatch
  )
)(MainDashboard);
