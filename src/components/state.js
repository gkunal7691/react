import React, { Component } from 'react'

class State extends Component {

  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {
      message: props.message
    }
  }

  changeMessage() {
    console.log(this.state)
    this.setState({
      message: 'Thank you for subscribing!'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default State