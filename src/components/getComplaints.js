import React from 'react';
import * as firebase from 'firebase';
import Btn from './btn'
import Heading from './heading'

class GetComplaints extends React.Component {
    constructor() {
        super();
        this.state = {
            missingPersonInfo: []
        }
    }
    componentWillMount() {
        var rootRef = firebase.database().ref().child('App').child('ComplaintInfo');
        rootRef.on('child_added', snap => {
            var data = snap.val().submitInfo;
            var arr = [];
            arr = this.state.missingPersonInfo;
            arr.push(data);
            this.setState({
                crimeReports: arr
            })
        })
    }

    render() {

        return (
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Complaint Nature</th>
                            <th>Complainer Name</th>
                            <th>City</th>
                            <th>Zip Code</th>
                            <th>Brief Description</th>
                        </tr>
                    </thead>
                    {this.state.missingPersonInfo.map((v, i) => {

                        return <tbody key={i}>
                            <tr>
                                <td>hello</td>
                                <td>{v.complaintNature}</td>
                                <td>{v.name}</td>
                                <td>{v.city}</td>
                                <td>{v.zip}</td>
                                <td>{v.complaintDes}</td>
                            </tr>
                        </tbody>
                    })}

                </table>

            </div>
        )
    }
}

export default GetComplaints;
