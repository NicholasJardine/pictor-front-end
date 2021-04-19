import React from 'react';
const User = (props) => {
 const style = {
 backgroundImage: `url(${props.user.imageUrl})`
 };
 return (
 <div className="user card-container">
 <div className="card" style={style}>
 [...]
 </div>
 </div>
 );
};
export default User;