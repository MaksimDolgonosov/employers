import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }

    }
    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    formSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length>3 && this.state.salary) {
            this.props.onEdit(this.state.name, this.state.salary)
            this.setState({
                name: "",
                salary: ""
            })
        }

    }

    render() {
        const { name, salary } = this.state;
        // const { onEdit } = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    // onSubmit={this.formSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onChangeValue}
                    />

                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onChangeValue} />

                    <button type="submit"
                        onClick={this.formSubmit} 
                        className="btn btn-outline-light" >Добавить</button>
                </form>
            </div>
        )
    }

}

export default EmployersAddForm;