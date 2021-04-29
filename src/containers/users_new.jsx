import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createUser } from '../actions';

class UsersNew extends Component {
 render() {
 return (
 <div>
<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
 <Field
 label="Email"
 name="email"
 type="text"
 component={this.renderField}
 />
 <label htmlFor="content">Content</label>
 <Field
 className="form-control"
 label="Password"
 name="password"
 component="textarea"
 rows="8"
 />
 <button className="btn btn-primary" type="submit"
disabled={this.props.pristine || this.props.submitting}>
 Create Post
 </button>
</form>
 </div>
 );
 }
}
export default reduxForm({ form: 'newUserForm' })(
    connect(null, { createUser })(UsersNew)
   );
