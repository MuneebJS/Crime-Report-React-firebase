import React from 'react';

class SelectField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <div className="form-group row">
                {/*<div className="col sm-5"> */}
                <label htmlFor="sel1">{this.props.label}</label>
                <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                    <option>{this.props.opt1}</option>
                    <option>{this.props.opt2}</option>
                    <option>{this.props.opt3}</option>
                    <option>{this.props.opt4}</option>
                    <option>{this.props.opt5}</option>
                    {/*<option>{this.props.opt6}</option>*/}
                    {/*<option>{this.props.opt7}</option>*/}
                    {/*<option>{this.props.opt8}</option>*/}
                </select>
                {/*</div>*/}
            </div >
        )
    }
}

export default SelectField