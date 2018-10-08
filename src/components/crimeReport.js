import React from 'react';
import Input from './input'
import SelectField from './selectField'
import RadioBtn from './radio_btn';
import ProcurerSelect from './procurer'
import * as firebase from 'firebase';
import Heading from './heading'
import Btn from './btn'

class CrimeReportForm extends React.Component {
    constructor() {
        super();
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler(ev) {
        ev.preventDefault();
        let submitInfo = {
            crimeNature: this.refs.crime_nature.state.value,
            name: this.refs.donor_name.state.value,
            cell: this.refs.donor_cell.state.value,
            zip: this.refs.donor_zip.state.value,
            // state: this.refs.donor_state.state.value,
            city: this.refs.donor_city.state.value,
            des: this.refs.crime_des.value,
            // donorBloodGroup: this.refs.blood_group.state.value
        }
        firebase.database().ref('App/CrimeReportInfo/').push({ submitInfo }).then(
            console.log('operation successfull')
        );
    }
    render() {
        return (
            <div>
                <Heading >Crime Report</Heading>
                <form onSubmit={this.submitHandler}>
                    <SelectField label="Crime Nature" ref="crime_nature" opt1="Medical Crime" opt2="Drugs" opt3="Rape Case" opt4="Terrorism" opt5="Public Crime"
                        opt6="Fraud" />
                    <Input htmlFor="name" ref="donor_name" type="text">Name</Input>
                    <Input htmlFor="cell" ref="donor_cell" type="number" >Cell Phone</Input>
                    <Input htmlFor="zip" ref="donor_zip" type="number" >Zip</Input>
                    <Input htmlFor="City" ref="donor_city" type="text" >City</Input>  
                    <label> Give Brief Description about crime: <br />
                        <textarea ref="crime_des"></textarea>
                    </label>            
                    <br />
                    <Btn type='submit' class="btn btn-primary" >Submit</Btn>
                </form>
            </div>
        )
    }
}

export default CrimeReportForm;

