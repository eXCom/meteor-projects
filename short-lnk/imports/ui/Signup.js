import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component{
    render() {
        return (
            <div>
                <p>Signup component here</p>
                signup form here

                <Link to="/">Login</Link>
            </div>
        );
    }
}