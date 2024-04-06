import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Profile extends Component{
  constructor(){
    super();
    this.state = {
      data: {},
      loading: true
    }
  }
  async componentDidMount(){
    const profile = await fetch('https://api.github.com/users/SeyidMk');
    const profileJSON = await profile.json();

    if(profileJSON){
      this.setState ({
        data: profileJSON,
        loading: false
      });
    }
  }
    
  render() {
    const {data, loading} = this.state;
    if(loading){
      return(<div>Loading...</div>)
    }
    return(
      <div className='profilo'>
        <div  className="top-card">
          <img  id="img1" src="src\media\GitHub-Mark-Light-120px-plus.png" alt="couldn't load" />
          <h1>MY Github Profilo</h1>
        </div>
        <div className='informations'>
          <img src="src\media\th.jpeg" alt="logo" />
          <br />
          <br />
          <div className="constainer-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5><strong>avatar_url:</strong></h5>
              </div>
              <div className="col-sm-6">
                <h6><a href="https://github.com/SeyidMk">{data.avatar_url}</a></h6>
              </div>
            </div>
          </div>
          <div className="constainer-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5><strong>html_url:</strong></h5>
              </div>
              <div className="col-sm-6">
                <h6>{data.html_url}</h6>
              </div>
            </div>
          </div>
          <div className="constainer-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5><strong>html_url:</strong></h5>
              </div>
              <div className="col-sm-6">
                <h6>{data.repos_url}</h6>
              </div>
            </div>
          </div>
          <div className="constainer-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5><strong>name:</strong></h5>
              </div>
              <div className="col-sm-6">
                <h6>{data.name}</h6>
              </div>
            </div>
          </div>
          <div className="constainer-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5><strong>company:</strong></h5>
              </div>
              <div className="col-sm-6">
                <h6>{data.company}</h6>
              </div>
            </div>
          </div>
          <div className="constainer-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5><strong>location:</strong></h5>
              </div>
              <div className="col-sm-6">
                <h6>{data.location}</h6>
              </div>
            </div>
          </div>
          <div className="constainer-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5><strong>email:</strong></h5>
              </div>
              <div className="col-sm-6">
                <h6>{data.email}</h6>
              </div>
            </div>
          </div>
          <div className="constainer-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h5><strong>bio:</strong></h5>
              </div>
              <div className="col-sm-6">
                <h6>{data.bio}</h6>
              </div>
            </div>
          </div>        
        </div>
      </div>
    );
  };
}
export default function App(){
  return(
    <div>
      <Profile />
    </div>
  )
}
