import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor={this.props.htmlFor}>{this.props.children}</label>
                <div className="col-sm-10">
                    <input onChange={this.handleChange} value={this.state.value} type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
                </div>
            </div>
        )
    }
}

export default InputField