import SelectField from './selectField'
import React from 'react';
class ProcurerSelect extends React.Component {
    constructor () {
        super();
        this.submitHandler = this.submitHandler.bind(this)
    }
    // submitHandler(e) {
        // e.preventDefault();
        // console.log(this.refs.selectedValue.state.value);
    // }
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <SelectField />
                <input type="submit" value="Submit" />
         </form>
        )
    }
}

export default ProcurerSelect