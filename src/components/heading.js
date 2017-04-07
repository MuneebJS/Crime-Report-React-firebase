import React from 'react';

export default class Heading extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{
                    textAlign: 'center',
                    backgroundColor: '#ff0000',
                    fontSize: '50px',
                    textShadow: "2px 2px 0px 0px",
                    fontWeight: 'bolder',
                    color: 'white'
                }}>{this.props.children}</h1>
            </div>
        )
    }
}