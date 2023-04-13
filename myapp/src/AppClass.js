import React, { Component } from 'react'

 class  AppClass extends Component{
  constructor(props){
    super(props)
    this.state={
      namee:"Lionel Messi",
      show:false,
      count:0,
      text:"",
      name:"",
      lastName:"",
      email:"",
    }
  }
  show=()=> {
this.setState({show:!this.state.show })

  }
  plus=()=>{
this.setState({ count:this.state.count+1})
  }
  minus=()=>
  {
    this.setState({count:this.state.count-1})
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  render () {
    return (
      <div>
        <h1> G.O.A.T</h1>
         <img src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb99a28244d0a1d44/63fdceef7e59b91bc9112845/messi.jpg' style={{color:"pink",height:"200px"}} ></img> 
      {this.state.show? <h2> {this.state.namee} </h2> : null}
      <h3>football player</h3>
      36 years old
      <button onClick={this.show} >show me</button>
        <p> {this.state.count}</p>
        <button onClick={this.plus} >+</button>
        <button onClick={this.minus} >-</button> <br></br>
        <input type="text" placeholder="write something" name="text" onChange={this.handleChange}/> <br></br>
        <input type="text" placeholder="name" name="name" onChange={this.handleChange}/><br></br>
        <input type="text" placeholder="lastName" name="lastName" onChange={this.handleChange}/><br></br>
        <input type="text" placeholder="email" name="email" onChange={this.handleChange}/><br></br>
        <h5>{this.state.text}</h5>
        <h5>{this.state.name}</h5>
        <h5>{this.state.lastName}</h5>
        <h5>{this.state.email}</h5>
         </div>
    ) 
  }
  }

export default AppClass



