
// with children
// const Profile = (props) => 
// <h1>
// Name: {props.firstName} {props.lastName} 
// {props.children}
// </h1>;

//Cannot assign to readonly property 'firstName' or 'lastName';
// const Profile = (props) => <h1>Name: {props.firstName + ' ' + props.lastName} </h1>
function Profile(props) {
    const {firstName, lastName} = props;
    return(
    <h1>Name: {firstName} {lastName}</h1>
    )
}
export default Profile;