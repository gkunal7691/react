import React, { Component } from 'react'
import Employee from './employee';

// const names = ['rajesh', 'piyush', 'gauatam'];
// const nameList = names.map(name => <h2>{name}</h2>);

const employees = [
    {
        id:1,
        name: 'piyush'
    },
    {
        id:2,
        name:'rajesh'
    }
]

// const employeeList = employees.map(employee =><h2>{employee.name}</h2>)
const employeeList = employees.map(employee => <Employee key = {employee.id} employee = {employee}></Employee>)

export class ListRendering extends Component {

    render() {
        return (
            <div>
                {/* <h1>{names[0]}</h1>
                <h1>{names[1]}</h1>
                <h1>{names[2]}</h1> */}
                {/* {
                    names.map(name => <h2>{name}</h2>)
                } */}
                 {/* {nameList}; */}
                {employeeList}
            </div>
        )
    }
}

export default ListRendering;
