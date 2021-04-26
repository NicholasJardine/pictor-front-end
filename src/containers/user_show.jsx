import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions';
import UserDisplay from '../components/Search/UserDisplay'
import {Container,FormContent, FormWrap, Form, Icon, FormH1New, Text} from '../components/Search/SearchElements'
class UsersShow extends Component {


    componentDidMount() {
        if (!this.props.user) {
        this.props.selectUser(this.props.match.params.id);
        }
    } 


    render() {
        if (!this.props.user) {
            return <p>Loading...</p>;
            } 
        return (

            <Container>
            <FormWrap>
        
                <Icon to="/"> Golden </Icon>
                <FormContent>
                    <Form>
                    <FormH1New>{this.props.user.email}</FormH1New>
                    <Text>{this.props.user.id}</Text>
                     </Form>
                </FormContent>
            </FormWrap>
        
        </Container>
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