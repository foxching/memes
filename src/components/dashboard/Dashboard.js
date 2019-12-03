import React from "react";
import { connect } from "react-redux";
import { createDesign } from "../../store/actions/designAction";
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
    if (e.target.id === "save") {
      this.props.createDesign(this.state);
    }
  };
  render() {
    return (
      <div>
        <div className="container py-4">
          <div className="row">
            <div className="col col-lg-8">
              <Display
                display={this.state}
                formatSize={this.formatTextSize()}
              />
            </div>
            <div className="col col-lg-4">
              <Setting
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
    );
  }
}

const mapDispatch = {
  createDesign
};

export default connect(
  null,
  mapDispatch
)(Dashboard);
