import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Tetteh Solomon",
        bio: "A software developer with 5 years of experience in full-stack development.",
        imgSrc: "https://media.licdn.com/dms/image/D4D03AQFpXFEI3R_abQ/profile-displayphoto-shrink_400_400/0/1701609241017?e=1722470400&v=beta&t=Jf6_5qwJj9CQQ1ZUYs6N4n83Tqfyb9GtXzYjcCOKKAs",
        profession: "Software Developer"
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Person Profile</h1>
          <button onClick={this.toggleShow}>
            {shows ? "Hide Profile" : "Show Profile"}
          </button>
          {shows && (
            <div>
              <img src={person.imgSrc} alt={person.fullName} />
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <h3>{person.profession}</h3>
            </div>
          )}
          <p>Time since component mounted: {mountedTime} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
