import React from 'react';
const User = (props) => {
 const style = {
 backgroundImage: `url(${props.user.imageUrl})`
 };
 return (
 <div className="user card-container">
 <div className="card" style={style}>
     <h2>Title here</h2>
      <p>Short description here!</p>
 </div>
 </div>
 );
};
export default User;