import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createUser } from '../actions';
import { NavBtnLink } from '../components/Navbar/NavbarElements';
import {Container,FormContent, FormWrap, Form, Icon, FormH1New,FormH1, Text, FormButton, FormLabel} from '../components/Search/SearchElements'

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
     <FormLabel>
     <label>{field.label}</label>

     </FormLabel>
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

                <Form>
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
            component={this.renderField}            rows="8"
            />
            <FormButton primary={true}>
            <button className="form-btn" type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Create Post
            </button>
            </FormButton>

            </form>
            </div>

                </Form>
            </FormContent>

        </FormWrap>
 

    </Container>
 );
 }
}
export default reduxForm({ form: 'newUserForm' })(
    connect(null, { createUser })(UsersNew)
   );

