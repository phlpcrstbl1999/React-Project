
// with children
// const Profile = (props) => 
// <h1>
// Name: {props.firstName} {props.lastName} 
// {props.children}
// </h1>;

const Profile = (props) => <h1>Name: {props.firstName + ' ' + props.lastName} </h1>

export default Profile;