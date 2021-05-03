import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createUser } from '../actions';
import {Container,FormContent, FormWrap, Form, Icon, FormH1New,FormH1, Text} from '../components/Search/SearchElements'

class UsersNew extends Component {
 onSubmit = (values) => {
 this.props.createUser(values, (user) => {
 this.props.history.push('/search'); // Navigate after submit
 return user;
 });
 }


 renderField(field) {
 return (
 <div className="form-group">
 <label>{field.label}</label>
 <input
 className="form-control"
 type={field.type}
 {...field.input}
 />
 </div>
 );
 }

 render() {
 return (

    <Container>
        <FormWrap>
            <FormContent>

            <div>
<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
 <Field
 label="Email"
 name="email"
 type="text"
 component={this.renderField}
 />
 <Field
 className="form-control"
 label="Password"
 name="password"
 type="text"
 component={this.renderField}
 rows="8"
 />

<Field
 className="form-control"
 label="Password confirmation"
 name="password_confirmation"
 type="text"
 component={this.renderField}
 rows="8"
 />
 <button className="btn btn-primary" type="submit"
disabled={this.props.pristine || this.props.submitting}>
 Create Account
 </button>
</form>
 </div>
            </FormContent>

        </FormWrap>
    </Container>
 );
 }
}
export default reduxForm({ form: 'newUserForm' })(
    connect(null, { createUser })(UsersNew)
   );



