import React, { Component } from "react";

import "./App.css";
import Comment from "./Comment";
import Avatar from "./Avatar";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Comment date={comment.date} text={comment.text} user={comment.user} />
      </div>
    );
  }
}

const comment = {
  date: new Date(),
  text: "I am enjoying React",
  user: {
    name: "hello Kitty",
    avatarUrl: "https://placekitten.com/100/100"
  }
};

export default App;
