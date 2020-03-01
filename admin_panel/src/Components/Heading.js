import React, { Component } from "react";



class Headings extends Component {

    render() {
        let { h } = this.props;
        switch (h) {
            case 1:
                return (
                    <h1>{this.props.children}</h1>
                );
                break;

            case 2:
                return (
                    <h2>{this.props.children}</h2>
                );
                break;

            case 3:
                return (
                    <h3>{this.props.children}</h3>
                );
                break;

            case 4:
                return (
                    <h4>{this.props.children}</h4>
                );
                break;

            case 5:
                return (
                    <h5>{this.props.children}</h5>
                );
                break;

            case 6:
                return (
                    <h6>{this.props.children}</h6>
                );
                break;
                default :

                      return (
                    <span>{this.props.children}</span>
                );
                break;

        }


    }
}


export default Headings;
