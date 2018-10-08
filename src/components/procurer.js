import SelectField from './selectField'
import React from 'react';
class ProcurerSelect extends React.Component {
    constructor () {
        super();
        this.submitHandler = this.submitHandler.bind(this)
    }
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