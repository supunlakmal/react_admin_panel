import React, { Component } from "react";



class Headings extends Component {

    render() {
        let { h } = this.props;
        switch (h) {
            case 1:
                return (
                    <h1 className={'app-007__heading'}>{this.props.children}<span>&nbsp;</span></h1>
                );
                break;

            case 2:
                return (
                    <h2  className={'app-007__heading'}>{this.props.children} <span>&nbsp;</span></h2>
                );
                break;

            case 3:
                return (
                    <h3  className={'app-007__heading'}>{this.props.children} <span>&nbsp;</span></h3>
                );
                break;

            case 4:
                return (
                    <h4  className={'app-007__heading'}>{this.props.children} <span>&nbsp;</span></h4>
                );
                break;

            case 5:
                return (
                    <h5  className={'app-007__heading'}>{this.props.children} <span>&nbsp;</span></h5>
                );
                break;

            case 6:
                return (
                    <h6  className={'app-007__heading'}>{this.props.children} <span>&nbsp;</span></h6>
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
