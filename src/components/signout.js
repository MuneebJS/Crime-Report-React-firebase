import { browserHistory } from 'react-router';
import React from 'react';
import * as firebase from 'firebase';

class SignOut extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signOut.bind(this)
    }
    signOut(ev) {
        ev.preventDefault();  
        const auth = firebase.auth();
        const promise = auth.signOut()
        promise.then((user) => {
            browserHistory.push('/')

        })
        promise.catch(e => {
            console.log(e.message)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.signOut}>
                    <input type="submit" value="Sign out" />
                </form>
            </div>
        )
    }
}

export default SignOut