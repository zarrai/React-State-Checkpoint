import React, { Component } from 'react'
import Clock from './comp/Clock'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

export class App extends Component {
  state = {
    Person: {
      fullName: "zarrai saif",
      bio: "python django developer",
      imgSrc: "https://scontent.ftun5-1.fna.fbcdn.net/v/t1.0-9/72362445_1856212741189493_4561664041864396800_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=TH9joq7NZgMAX-OSMAe&_nc_ht=scontent.ftun5-1.fna&oh=a878746bcbd250fddad7af064882640d&oe=604EFC60",
      profession: "freelancer"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
          <div class="d-flex justify-content-center">
              <div class="card">
              <img src={this.state.Person.imgSrc} alt="Avatar" />
              <div class="container">
                <h3><b>{this.state.Person.fullName}</b></h3>
                <h4>{this.state.Person.profession}</h4>
                <p>{this.state.Person.bio}</p>
              </div>
            </div>
            </div>
          </>
        )}

        <div class="cont">
        <div class="center">
          <button type="button" class="btn btn-danger" onClick={this.handleShowPerson}>{this.state.show ? 'Hide' : 'Show'}</button>
        </div>
        </div>
        <div class="cont">
        <div class="center">
        <Clock />
        </div>
        </div>
      </>
    );
  }
}

export default App
