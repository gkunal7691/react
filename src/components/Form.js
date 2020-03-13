import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            textarea: '',
            topic: 'react'
        }
    }

    handleUsernamechanage = (event) => {
        this.setState({
            username: event.target.value
        })

    }

    handlecommentchanage = (event) => {
        this.setState({
            comment: event.target.value
        })

    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
	//	event.preventDefault()
	}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Input:</label>
                    <input value={this.state.username} onChange={this.handleUsernamechanage}></input>
                </div>
                <div>
                    <label>Comment:</label>
                    <textarea value={this.state.comment} onChange={this.handlecommentchanage}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default Form
