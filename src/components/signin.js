import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
        this.signIn = this.signIn.bind(this)
    }
    signIn(ev) {
        ev.preventDefault();
        let email = this.refs.sign_in_email.value;
        let pass = this.refs.sign_in_pass.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.then(() => {
            browserHistory.push('/home')

        })
        promise.catch(e => {
            console.log(e.message)
        })
    }
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.signIn}>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" ref="sign_in_email" defaultValue="a@a.com" /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" ref="sign_in_pass" defaultValue="123456" /> <br />
                    <input type="submit" value="Sign in" />
                </form>
                <Link to="/sign_up">
                    Create new Account
                </Link>
                <signOut />
            </div>
        )
    }
}

export default SignIn;