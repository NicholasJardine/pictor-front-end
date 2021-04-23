import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUsers } from '../actions';
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import User from './components/user';
// [...]
class UserList extends Component {
    componentWillMount() {
        this.props.setUsers();
    } 


    render(){
        return (
        <div>

            {this.props.users.map((user) => <User user={user} key={user.name}/> )}
        </div>

        );
    }
}



    function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    { setUsers: setUsers },
    dispatch
    );
    }
 

function mapStateToProps(state) {
    return {
    users: state.users
    };
   }
   


   export default connect(mapStateToProps, mapDispatchToProps)
(UserList);

