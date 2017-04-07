import React from 'react';
import Input from './input'
import SelectField from './selectField'
import RadioBtn from './radio_btn';
import ProcurerSelect from './procurer'
import * as firebase from 'firebase';
import Heading from './heading'
import Btn from './btn'

class MissingPersonForm extends React.Component {
    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler(ev) {
        ev.preventDefault();
        let submitInfo = {
            // complaintNature: this.refs.complaint_nature.state.value,
            name: this.refs.donor_name.state.value,
            cell: this.refs.donor_cell.state.value,
            age: this.refs.donor_age.state.value,
            height: this.refs.height.state.value,
            lastSeen: this.refs.last_seen.state.value,
            complaintDes: this.refs.complaint_des.value,
            identity: this.refs.identity.state.value
        }
        firebase.database().ref('App/MissingPerson' + '/').push({ submitInfo }).then(
            console.log('missing successfullt')
        );
    }

    render() {
        return (
            <div>
                <Heading > Report Form for Missing Person</Heading>
                <form onSubmit={this.submitHandler}>
                    <label>Give image of missing person: <br />
                        <input type="file" name="pic" accept="image/*" />
                    </label>
                    <div>Gender: <br />
                        <RadioBtn name="gender" value1='Male' value2="Female" label1="male" label2="Female" title="Gender" ref="gender" />
                    </div>
                    <Input htmlFor="name" ref="donor_name" type="text">Name</Input>
                    <Input htmlFor="zip" ref="donor_age" type="number" >Age</Input>
                    <Input htmlFor="zip" ref="height" type="number" >Height</Input>
                    {/*{//should change the type}*/}
                    <Input htmlFor="City" ref="last_seen" type="date" >Last Seen</Input>
                    <Input htmlFor="state" ref="identity" type="text" >Unique Sign</Input>
                    <Input htmlFor="cell" ref="donor_cell" type="number" >Guardian Cell Phone</Input>
                    <label> Give Brief Description: <br />
                        <textarea ref="complaint_des"></textarea>
                    </label> <br />
                    {/*<input type="submit" className="btn btn-danger" />*/}
                    <Btn type="submit" class="btn btn-default">Submit</Btn>
                </form>
            </div>
        )
    }
}

export default MissingPersonForm;