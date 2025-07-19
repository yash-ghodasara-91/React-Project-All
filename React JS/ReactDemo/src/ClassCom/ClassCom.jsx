import React, { Component } from 'react'


let name = "Yash";

let obj = {
    Name : "Yash",
    SurName : "ghodasara",
    Subject : "React Js"
}

let Arr = ["Apple", "Mango"]

export default class ClassCom extends Component {
  render() {
    return (
      <div>
        <h1>{name}</h1>
        <br />
        <h1>{obj.Name}</h1>
        <h2>{obj.SurName}</h2>
        <h3>{obj.Subject}</h3>

        <br />
        <h1>{Arr[1]}</h1>
      </div>
    )
  }
}
