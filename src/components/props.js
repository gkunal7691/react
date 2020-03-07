import React, { Component } from 'react'


// const Props = props => {
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   )
// }

class Props1 extends Component {
    render() {
        console.log(this.props)
        return <h1>   Hello {this.props.name}  </h1>
    }
}


export default Props1