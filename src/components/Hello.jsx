import React, { Component } from 'react';
// import { callApi } from '../fetch/callData';

class Hello extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    fetch('http://localhost:3000/user/' + 12)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        result = result.data.userInfos;
        this.setState = { post: result };
        console.log(result);
      });
  }
  render() {
    return (
      <>
        <h2 className="h2">
          Bonjour <span>{this.state.post.firstName}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </>
    );
  }
}

export default Hello;
