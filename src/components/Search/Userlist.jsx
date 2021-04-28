import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUsers } from '../../actions';
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import UserDisplay from './UserDisplay';
import {Link} from 'react-router-dom';
import { FormH1New, Text, UserWrap } from './SearchElements';

// [...]
class UserList extends Component {
    componentDidMount() {
        this.props.setUsers();
    } 

    render() {
        return (
            <div className="user-list col-sm-7">
            {this.props.users.map((user) => {
            return <Link  to={`/users/${user.id}`} key={user.id}>
            <UserDisplay key={user.name} user={user} />
            </Link>
            })}
            </div>
            ); 
        }

}

// {this.props.users.map((user) => {
//     return <Link  to={`/users/${user.id}`} key={user.id}>
//     <UserDisplay key={user.name} user={user} />;
//     </Link>
//     })}

 

function mapStateToProps(state) {
    return {
    users: state.users
    };
   }
   
   function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    { setUsers },
    dispatch
    );
    }

   export default connect(mapStateToProps, mapDispatchToProps)
(UserList);
