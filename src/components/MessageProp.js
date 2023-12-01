import { Component } from "react";
class MessageProp extends Component {
    render() {
        return <h1>Message: {this.props.messageContent} Code: {this.props.messageCode}</h1>
    }
}

export default MessageProp;