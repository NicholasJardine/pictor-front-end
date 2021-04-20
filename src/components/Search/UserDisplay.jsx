import React from 'react';
import {Container, Text, FormButton,FormContent, FormH1, FormLabel, FormInput, FormWrap, Form, Icon} from './SearchElements'
const UserDisplay = (props) => {
 const style = {
 backgroundImage: `url(${props.user.imageUrl})`
 };
 return (
 <div className="user card-container">
 <div className="card" >
     <Form>
     <FormH1>{props.user.name}</FormH1>
      <Text>{props.user.price}</Text>

     </Form>

 </div>
 </div>
 );
};
export default UserDisplay;