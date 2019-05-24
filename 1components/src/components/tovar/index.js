import React, { Component } from 'react';
class Tovar extends Component {
    constructor(props) {
        super(props);
        this.state = {}   Якщо не використовуєте state, то видаляйте
    }
    render() {
        const { title, tovarProp } = this.props
        return (
            <>
                <h1> {title}</h1>
                <ul>
                    {
                        tovarProp.map((x, i) => <li key={i}>{x}</li>)
                    }
                </ul>

            </>
        );
    }
}

export default Tovar;
