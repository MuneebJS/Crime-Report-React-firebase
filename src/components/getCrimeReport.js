import React from 'react';
import * as firebase from 'firebase';
import Btn from './btn'
import Heading from './heading'

class GetCrimeReport extends React.Component {
    constructor() {
        super();
        this.state = {
            crimeReports: []
        }
    }
      componentWillMount() {
          console.log('hello wolrd')
                  var rootRef = firebase.database().ref().child('App').child('CrimeReportInfo');
                rootRef.on('child_added', snap => {
                    var data = snap.val();
                    console.log(data.submitInfo);
                    var arr = [];
                    arr = this.state.crimeReports;
                    arr.push(snap.val().submitInfo);
                    this.setState({
                        crimeReports: arr
                    })
                    // console.log(this.state.donorsInfo);
                })
                //   console.log(this.state.crimeReports);
    }


render() {

              return(
                           <div>
                               <Heading>Crime List</Heading>
                        <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Crime Nature</th>
                                        <th>Reporter Name</th>
                                        {/*<th>Blood Group</th>*/}
                                        {/*<th>State</th>*/}
                                        <th>City</th>
                                         <th>Zip Code</th>
                                        {/*<th>City</th>*/}
                                    </tr>
                                    </thead>
                                    {this.state.crimeReports.map((v, i) => {
                                        return <tbody key={i}>
                                    <tr>
                                        <td>{v.crimeNature}</td>
                                        <td>{v.name}</td>
                                        {/*<td>{v.state}</td>*/}
                                          <td>{v.city}</td>
                                        <td>{v.zip}</td>
                                        {/*<td>{v.donorContact}</td>
                                        <td>{v.donorCity}</td>*/}
                                    </tr>                
                                    </tbody>
                                    })}
                                
                                </table>

                                                </div>
              )
}
}

export default GetCrimeReport;