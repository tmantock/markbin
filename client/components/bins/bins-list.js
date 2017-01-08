import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import { Link } from 'react-router';

class BinsList extends Component {

  renderList(){
    return this.props.bins.map((bin)=>{
      const url = `/bins/${bin._id}`;
      return(
        <li className="list-group-item" key={bin._id}>
          <Link to={url}>Bin {bin._id}</Link>
          <span className="pull-right">
            <button className="btn btn-danger" onClick={ () => this.onBinRemove(bin)}>
              Remove
            </button>
          </span>
        </li>
      );
    })
  }

  onBinRemove(bin) {
    Meteor.call('bins.remove', bin);
  }

  render(){
    if(this.props.bins.length > 0) {
      return (
        <ul className="list-group">
          {this.renderList()}
        </ul>
      );
    } else {
      return (
        <div>Welcome to Markbin</div>
      );
    }
  }
}

export default createContainer(()=>{
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bins: Bins.find({}).fetch() };
}, BinsList)
