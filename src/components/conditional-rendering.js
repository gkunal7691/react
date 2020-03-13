import React, { Component } from 'react';



export class conditionalRendering extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogged: false
        }
    }

    render() {

      //  return this.state.isLogged && <div>hi</div> 

        // return this.state.isLogged ? <div>hi</div> : <div>hello</div>

        // let message;

        // if (this.state.isLogged) {
        //     message = <div>hi</div>
        // } else {
        //     message = <div>hello</div>
        // }
        // return message;

        if (this.state.isLogged) {
            return <div>hi</div>
        } else {
            return <div>hello</div>
        }
        return (
            <div>
                <div>hi</div>
                <div>hello</div>
            </div>
        )
    }
}

export default conditionalRendering;
