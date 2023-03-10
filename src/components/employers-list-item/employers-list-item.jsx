import { Component } from "react";
import "./employers-list-item.css"


class EmployersListItem extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         increase: false,
    //         like: false
    //     }
    // }
    // onIncrease = () => {
    //     this.setState(state => ({
    //         increase: !state.increase
    //     }))
    // }
    // onLike = () => {
    //     this.setState(state => ({
    //         like: !state.like
    //     }))
    // }

    render() {
        const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = this.props;
        return (
            <li className={"list-group-item d-flex justify-content-between" + (increase ? " increase" : "") + (rise ? " like" : "")}>
                <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm" onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete} >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )

    }

}

export default EmployersListItem;