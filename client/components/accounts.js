import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    //Render the Blaze accouts form then find rendered div and place Blaze account form in the div
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    //Go find the forms created and destroy them
    Blaze.remove(this.view);
  }

  render(){
    return (
      <div ref="container"></div>
    )
  }
}

export default Accounts;
