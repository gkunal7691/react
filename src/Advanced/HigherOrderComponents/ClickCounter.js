import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

  render() {
    // const { count, incrementCount } = this.props
    const { count, incrementCount,name} = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

// export default withCounter(ClickCounter, 5)
export default withCounter(ClickCounter)