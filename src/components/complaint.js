import React from 'react';
import Input from './input'
import SelectField from './selectField'
import RadioBtn from './radio_btn';
import ProcurerSelect from './procurer'
import * as firebase from 'firebase';

class ComplaintForm extends React.Component {
    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler(ev) {
        ev.preventDefault();
        let submitInfo = {
            complaintNature: this.refs.complaint_nature.state.value,
            name: this.refs.donor_name.state.value,
            cell: this.refs.donor_cell.state.value,
            zip: this.refs.donor_zip.state.value,
            // state: this.refs.donor_state.state.value,
            city: this.refs.donor_city.state.value,
            complaintDes: this.refs.complaint_des.value
        }
        // console.log(firebase.auth.currentUser)
        firebase.database().ref('App/ComplaintInfo/').push({ submitInfo }).then(
            console.log('complaint successfull')
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <SelectField label="Complaint Nature" ref="complaint_nature" opt1="arrested you unlawfully." opt2="abused your rights" opt3="used excessive force" opt4="been rude to you"
                        opt6="Fraud" opt7="Non-Registration of FIRs" opt8="Demand of illegal gratification" />
                    <Input htmlFor="name" ref="donor_name" type="text">Name</Input>
                    <Input htmlFor="cell" ref="donor_cell" type="number" >Cell Phone</Input>
                    <Input htmlFor="zip" ref="donor_zip" type="number" >Zip</Input>
                    <Input htmlFor="City" ref="donor_city" type="text" >City</Input>
                    {/*<Input htmlFor="state" ref="donor_state" type="text" >State</Input>*/}
                    {/*<Input htmlFor="description" ref="complaint_description" type="text" >Give Brief Description</Input>*/}
                    <label> Give Brief Description: <br />
                        <textarea ref="complaint_des"></textarea>
                    </label>
                    {/*<div>Gender</div>*/}
                    {/*<RadioBtn name="gender" value1='Male' value2="Female" label1="male" label2="Female" title="Gender" ref="gender" />*/}
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ComplaintForm;