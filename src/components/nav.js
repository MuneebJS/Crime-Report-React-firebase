import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul className='navbar navbar-default'>
                    <Link to="/sign_up"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>sign Up</li></Link>
                    <Link to="/sign_in"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Sign In</li></Link>
                    <Link to="/crime"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}> Crime Reports</li></Link>
                    <Link to="/complaint"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Complaints</li></Link>
                      <Link to="/missing"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Missing Persons</li></Link>
                      <Link to="/crime_form"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}> Crime Report form</li></Link>
                    <Link to="/complaint_form"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Complaint form</li></Link>
                      <Link to="/missing_form"><li style={{ display: 'inline', padding: '10px', margin: '10px' }}>Missing Person form</li></Link>

                    
                </ul>
                {this.props.children}
            </div >
        )
    }
}
export default Nav