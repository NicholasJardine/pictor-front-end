import React from 'react';
import {Container, Text, FormButton,FormContent, FormH1,FormH1New, FormLabel, FormInput, FormWrap, Form, Icon} from './SearchElements'
const UserDisplay = (props) => {
 const style = {
 backgroundImage: `url(https://raw.githubusercontent.com/
    lewagon/flats-boilerplate/master/images/flat1.jpg`
 };
 return (
 <div className="user card-container">
 <div className="card-trip" style={style} >
     
     <FormH1New>{props.user.email}</FormH1New>
      <Text>{props.user.id}</Text>

     

 </div>
 </div>
 );
};
export default UserDisplay;