import React from 'react';
import { Link } from 'react-router'
import Btn from './btn'

export default class Buttons extends React.Component {
    render() {
        return (
            <div>
                {/*<Link to="/sign_in">
                    <input type="button" value="Log in" />
                </Link>
                <Link to="/sign_up">
                    <input type="button" value="Sign Up" />
                </Link>*/}
                <Link to="/sign_in">
                    <Btn type={'button'}>Log in</Btn>
                </Link>
                <Link to="/sign_up">
                   <Btn type={'button'}>Sign Up</Btn>
                </Link>
            </div>
        )
    }
}
