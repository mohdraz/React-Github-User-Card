import React from 'react';
import logo from './logo.svg';
import "./index.scss";
import axios from "axios";

import Card from "./components/Card";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      githubCard: [],
      repos: [],
      followers: [],
      following: []
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/mohdraz`)
    .then(res => res.json())
    .then(res => {
      console.log("data received from github: ", res);
      this.setState({
        githubCard: res
      });

      // axios request for repos data
      axios
      .get(res.repos_url)
      .then(repoData => {
          console.log("Repo Data", repoData);
          this.setState({
            repos: repoData.data
          })
      });

      // axios requet for followrs 
      axios
      .get(res.followers_url)
      .then(followerData => {
        console.log("My Followers: ", followerData);
          this.setState({
            followers: followerData.data
          })
      });

    })
    .catch(err => console.log(err));
  }

  render () {
    return (
      <div className="card">
        <Card 
        data={this.state.githubCard} 
        reposData={this.state.repos}
        followerData={this.state.followers}
         />
      </div>
    );
  }
}

export default App;
