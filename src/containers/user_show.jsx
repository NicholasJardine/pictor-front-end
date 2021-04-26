import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions';
import UserDisplay from '../components/Search/UserDisplay'

class UsersShow extends Component {
    componentWillMount() {
        if (!this.props.user) {
            this.props.selectUser(this.props.match.params.id);
            }
    } 

    // componentDidMount() {
    //     if (!this.props.user) {
    //     this.props.selectUser(this.props.match.params.id);
    //     }
    //     } 

    render() {
        if (!this.props.user) {
            return <p>Loading...</p>;
            } 
        return (
            <div className="user-list col-sm-7">
 <h3>{this.props.user.email}</h3>
 <p>{this.props.user.id}</p>
 

             </div>
            ); 
        }
}

function mapStateToProps(state, ownProps) {
    const idFromUrl = parseInt(ownProps.match.params.id, 10);
    const user = state.users.find(p => p.id === idFromUrl);
    return { user };
   }

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { selectUser }, dispatch);
}
export default connect(
mapStateToProps, mapDispatchToProps)(UsersShow);


// class usersShow extends Component {
//  render() {
//  if (!this.props.user) {
//  return <p>Loading...</p>;
//  }
//  return (
//  <div>
//  <div className="user-item">
//  <h3>{this.props.user.email}</h3>
//  <p>{this.props.user.id}</p>
//  </div>
//  <Link to="/">
//  Back
//  </Link>
//  </div>
//  );
//  }
// }