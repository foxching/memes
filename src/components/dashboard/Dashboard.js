import React from "react"
import Display from "../design/Display"
import Setting from "../design/Setting"

class Dashboard extends React.Component {
  state = {
    tshirtColor: "black",
    upperText: "this is upperText",
    lowerText: "this is lowerText",
    image: ""
  }

  tshirtColorChange = e => {
    this.setState({ tshirtColor: e.target.id })
  }

  handleChangeText = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
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
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
