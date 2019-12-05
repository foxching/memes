import React, {Component} from 'react'
import { firestoreConnect } from "react-redux-firebase";
import { connect } from 'react-redux'
import { compose } from "redux";

class DesignDetail extends Component {
  
  render(){
    const { design } = this.props
    console.log(design)
    return (
      <div>Hello Fucker's</div>
    )
  }

} 

const mapState = state => {
  let design ={}

  if(state.firestore.ordered.designs && state.firestore.ordered.designs[0]){
    design= state.firestore.ordered.designs[0]
  }
  return {
    design
  }
}

export default compose(firestoreConnect(props => {
  console.log(props.match.params.id)
  return [
    {
        collection:'designs',
        doc:props.match.params.id,
        storeAs: "designs",
    }
  ]
}),connect(mapState))(DesignDetail) 

