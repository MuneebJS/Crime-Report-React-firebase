import React from 'react'
import * as firebase from 'firebase'
import { browserHistory } from 'react-router'


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.signUp = this.signUp.bind(this)
    }

    signUp(ev) {
        ev.preventDefault();
        let email = this.refs.sign_up_email.value;
        let pass = this.refs.sign_up_pass.value;
        console.log(email, pass)
        
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.then((user) => {
            console.log(user);
            console.log(email, pass)
            browserHistory.push('/sign_in')

        })
        promise.catch(e => {
            console.log(e.message)
        })
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.signUp}>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" ref="sign_up_email" /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" ref="sign_up_pass" /> <br />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default SignUp