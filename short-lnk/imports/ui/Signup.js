import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Accounts.createUser({email, password}, (err) => {
            console.log('Signup callback', err);
        });
    }

    render() {
        return (
            <div>
                <h1>Join short lnk</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="Email" />
                    <input type="password" ref="password" name="password" placeholder="Password" />
                    <button>Create account</button>
                </form>

                <Link to="/">Login</Link>
            </div>
        );
    }
}