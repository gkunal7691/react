import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Regular Comp render')
    return (
      <div>
          {/* <h1>Regular Component</h1> */}
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp