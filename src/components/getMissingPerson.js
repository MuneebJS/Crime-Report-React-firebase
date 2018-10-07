
import React from 'react';
import * as firebase from 'firebase';
import Btn from './btn'
import Heading from './heading'

class GetMissingPerson extends React.Component {
    constructor() {
        super();
        this.state = {
            missingPersonInfo: []
        }
    }
    componentWillMount() {
        var rootRef = firebase.database().ref().child('App').child('MissingPerson');
        rootRef.on('child_added', snap => {
            var data = snap.val().submitInfo;
            var arr = [];
            arr = this.state.missingPersonInfo;
            arr.push(data);
            this.setState({
                missingPersonInfo: arr
            })
        })
    }

    render() {

        return (
            <div>
                <Heading>Missing Persons List</Heading>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Unique Sign</th>
                            <th>Height</th>
                            <th>Last Seen</th>
                            <th>Contact</th>
                            <th>Brief Description</th>
                        </tr>
                    </thead>
                    {this.state.missingPersonInfo.map((v, i) => {
                        return <tbody key={i}>
                            <tr>
                                <td>{v.name}</td>
                                <td>{v.age}</td>
                                <td>{v.identity}</td>
                                <td>{v.height}</td>
                                <td>{v.lastSeen}</td>
                                <td>{v.cell}</td>
                                <td>{v.complaintDes}</td>
                            </tr>
                        </tbody>
                    })}

                </table>

            </div>
        )
    }
}

export default GetMissingPerson;
