import React, { Component } from 'react'

export class employee extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.employee.name}</h2>
            </div>
        )
    }
}

export default employee
