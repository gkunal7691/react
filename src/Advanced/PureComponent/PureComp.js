import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Comp render')
    return (
      <div>
          {/* <h1> Pure Component</h1> */}
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp