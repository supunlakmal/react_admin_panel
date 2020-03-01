import React, { Component } from "react";



class Alert extends Component {

    render() {

             let { className } = this.props;
        return (
           <div class={`app-007__alert alert ${className}`} role="alert">
           {this.props.children}
</div>
        );
    }
}


export default Alert;
