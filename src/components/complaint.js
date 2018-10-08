import React from 'react';
import Input from './input'
import SelectField from './selectField'
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
            city: this.refs.donor_city.state.value,
            complaintDes: this.refs.complaint_des.value
        }
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
                    <label> Give Brief Description: <br />
                        <textarea ref="complaint_des"></textarea>
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default ComplaintForm;