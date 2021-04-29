import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import {Container,FormContent, FormWrap, Form, Icon, FormH1New,FormH1, Text} from '../components/Search/SearchElements'
class UsersShow extends Component {

    componentDidMount() {
        if (!this.props.user) {
        this.props.selectUser(this.props.match.params.id);
        }
    } 

    render() {
        
        return this.props.user ? (

            <Container>
            <FormWrap>
        
                <FormContent>
                    <Form>
                    <FormH1New>{this.props.user.email}</FormH1New>
                    <Text>{this.props.user.id}</Text>
                     </Form>
                </FormContent>
            </FormWrap>
        
            </Container>
            ) : (<Container>
            <FormWrap>
        
                <FormContent>
                    <Form>
                    <FormH1>Loading...</FormH1>
                     </Form>
                </FormContent>
            </FormWrap>
        
            </Container>); 
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
