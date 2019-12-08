import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { createDesign, updateDesign } from "../../store/actions/designAction";
import { storage } from "../../config/firebase";
import Display from "../design/Display";
import Setting from "../design/Setting";

class Dashboard extends React.Component {
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
    if (this.props.design) {
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
      this.props.updateDesign(design);
      this.props.history.push("/my-design");
    } else {
      this.props.createDesign(this.state);
      this.props.history.push("/my-design");
    }
  };
  render() {
    const { design } = this.props;
    return (
      <div>
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
    design
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
)(Dashboard);
