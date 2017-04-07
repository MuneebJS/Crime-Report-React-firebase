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



// /*class DonateForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.submitHandler = this.submitHandler.bind(this);
//         this.getValues = this.getValues.bind(this)
//         this.state = {
//             donorInfo: {},
//             // a : [],
//             donorsInfo: []
//         }
//     }
//     getValues(e) {
//         e.preventDefault();
//         // console.log("i'm fired")
//         var don = [];
//         // this.setState({ value: 1 + key});
//         // var blood = e.target.childNodes[0].nodeValue;
//         var acceptorBloodGroup = this.refs.selectedValue.state.value;
//         // console.log(acceptorBloodGroup);
//         var a = [];
//         switch (acceptorBloodGroup) {
//             case "A+":
//                 a.push(['A+', 'O+', 'A-', 'O-']);
//                 // console.log(a);
//                 break;

//             case "B+": {
//                 a.push(['B+', 'O+', 'B-', 'O-']);
//                 break;
//             }
//             case "AB+": {
//                 a.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
//                 break;
//             }
//             case "O+": {
//                 a.push(['O+', 'O-']);
//                 break;
//             }
//             case "A-": {
//                 a.push(['A-', 'O-']);
//                 break;
//             }
//             case "B-": {
//                 a.push(['B-', 'O-']);
//                 break;
//             }
//             case "AB-": {
//                 a.push(['AB-', 'O-', 'A-', 'B-']);
//                 break;
//             }
//             case "O-": {
//                 a.push(['O-']);
//                 console.log(a)
//                 break;
//             }
//         }

//         a.map((v, i) => {
//             return v.map((value, index) => {
//                 firebase.database().ref('/donors/' + value + '/').on('value', (data) => {
//                     let obj = data.val();
//                     for (var prop in obj) {
//                         don.push(obj[prop].donorInfo);
//                         console.log(don);
//                         this.setState({
//                             donors: don
//                         })
//                     }
//                 })
//             })
//         })
//     }
//     submitHandler(e) {
//         e.preventDefault();
//         let donorInfo = {
//             donorName: this.refs.donor_name.state.value,
//             donorAge: this.refs.donor_age.state.value,
//             donorWeight: this.refs.donor_weight.state.value,
//             donorCountry: this.refs.donor_country.state.value,
//             donorCity: this.refs.donor_city.state.value,
//             donorContact: this.refs.donor_contact.state.value,
//             donorGender: this.refs.gender.state.selectedValue,
//             donorBloodGroup: this.refs.blood_group.state.value
//         }
//         firebase.database().ref('donors/' + donorInfo.donorBloodGroup + '/').push({ donorInfo });
//         // var commentsRef = firebase.database().ref('donors/');
//         // commentsRef.on('child_added', function (data) {
//         // addCommentElement(postElement, data.key, data.val().text, data.val().author);
//         // console.log(data.val().uid);
//         // });s
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.submitHandler}>
//                     <Input htmlFor="name" ref="donor_name" type="text">Name</Input>
//                     <Input htmlFor="age" ref="donor_age" type="number" >Age</Input>
//                     <Input htmlFor="Weight" ref="donor_weight" type="number" >Weight</Input>
//                     <Input htmlFor="City" ref="donor_city" type="text" >City</Input>
//                     <Input htmlFor="Country" ref="donor_country" type="text" >Country</Input>
//                     <Input htmlFor="contact" ref="donor_contact" type="number">Contact</Input>
//                     <div>Gender</div>
//                     <RadioBtn name="gender" value1='Male' value2="Female" label1="male" label2="Female" title="Gender" ref="gender" />
//                     <input type="submit" value="Submit form" />
//                 </form>
//                 <form onSubmit={this.getValues}>
//                     <SelectField ref="blood_group" />
//                     <input type="submit" value="Submit form" />
//                 </form>

//                 {/*<ProcurerSelect ref="selectedValue" submitHandler={this.getValues}/>*/}
//                 <SelectField ref="selectedValue" />
//             </div>
//         )
//         // }
//     }
// }*/