import logo from './logo.svg';
import './App.css';
import Count from './Count.js';
import profileImg from "./propic.jpg"
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Person:{
        imgSrc: profileImg,
        fullName: "Yacine Ramdani",
        profession : "Web Developer",
        bio: "FullStack JS",       
      },
      show : false,
      time : 0
     }
  }
  showState = () => {
    this.setState ({
      show:!this.state.show
    })
  }
  increment = () => {
    this.setState ( {
      time : this.state.time + 1
    })
  }
  componentDidMount(){
    this.interval = setInterval(() => this.increment(), 1000);
  }
  render() {  
    return ( 
      <div className="container">
        <h1>The component has mounted</h1>
        <h1>{this.state.time}</h1>
        <button onClick={this.showState}>{this.state.show ? "Hide Profile" : "Show Profile"}</button>
        {/* <div className="user">
          <div>
            {this.state.show ? <img src={profileImg} alt="" /> : null }
          </div>
          <div className="info">
            {this.state.show ? <h1>{this.state.Person.fullName}</h1> : null }
            {this.state.show ? <h3>{this.state.Person.profession}</h3> : null }
            {this.state.show ? <p>{this.state.Person.bio}</p> : null }
          </div>
        </div> */}

{(this.state.show) &&
            <div >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center', textAlign: 'center' }}>
                <div>
                  <img src={this.state.Person.imgSrc} alt="Profile Image" /></div>
              </div>
              <div style={{ margin: '20px 50px' }} >
                <h1>{this.state.Person.fullName}</h1>
                <h4>{this.state.Person.profession}</h4>
                <span> {this.state.Person.bio} </span>
              </div>
            </div>
          }
      </div>
     );
  }
}
 
export default App;


