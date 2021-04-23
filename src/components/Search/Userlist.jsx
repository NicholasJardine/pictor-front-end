import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUsers } from '../../actions';
import { render } from '@testing-library/react';
import React, {Component} from 'react';
import UserDisplay from './UserDisplay';
// [...]
class UserList extends Component {
    componentWillMount() {
        this.props.setUsers();
    } 


    render(){
        return (
            <Link to={`/users/${user.id}`} key={user.id}>

                <div>

                {this.props.users.map((user) => <UserDisplay user={user} key={user.name}/> )}
                </div>

            </Link>


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