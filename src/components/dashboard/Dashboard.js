import React from "react";
import Display from "../design/Display";
import Setting from "../design/Setting";
import storage from "../../config/firebase";
class Dashboard extends React.Component {
  state = {
    tshirtColor: "black",
    upperText: "this is upperText",
    lowerText: "this is lowerText",
    image: "",
    url: ""
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
  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">
            <Display display={this.state} />
          </div>
          <div className="col-lg-4">
            <Setting
              display={this.state}
              handleChangeText={this.handleChangeText}
              tshirtColorChange={this.tshirtColorChange}
              handleImageUpload={this.handleImageUpload}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
