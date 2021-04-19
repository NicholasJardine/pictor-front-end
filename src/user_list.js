import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUsers } from '../actions';
// [...]
function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setUsers: setUsers },
 dispatch
 );
}
export default connect(null, mapDispatchToProps)(FlatList);