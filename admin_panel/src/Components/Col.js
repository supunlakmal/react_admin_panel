import React, { Component } from "react";



class Col extends Component {

    state = {
        classNameLocal: 'col',
    }

    componentDidMount() {
        let { classNameLocal } = this.state;
        let { className } = this.props;

        classNameLocal = className ? className : classNameLocal;

        this.setState({ classNameLocal: classNameLocal });

    }

    componentWillUnmount() {

    }


    render() {

        let { classNameLocal } = this.state;

        return (
            <div className={`app-007__col ${classNameLocal}`}>

                {this.props.children}

            </div>
        );
    }
}


export default Col;
