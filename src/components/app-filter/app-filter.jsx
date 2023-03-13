import { Component } from "react";
import "./app-filter.css"


class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "all"
        }
    }
    onSetFilter = (e) => {
        this.setState({
            filter: e.target.getAttribute("data-filter")
        })
        this.props.onUpdateFilter(e.target.getAttribute("data-filter"));
    }
    render() {
        const {filter}= this.state;
        return (
            <div className="btn-group">
                <button data-filter="all" className={filter==="all"?"btn btn-light":"btn btn-outline-light"} type="button" onClick={this.onSetFilter}>Все сотрудники</button>
                <button data-filter="rise" className={filter==="rise"?"btn btn-light":"btn btn-outline-light"} type="button" onClick={this.onSetFilter}>На повышение</button>
                <button data-filter="salary" className={filter==="salary"?"btn btn-light":"btn btn-outline-light"} type="button" onClick={this.onSetFilter}>ЗП больше 1000$</button>
            </div>
        )
    }

}

export default AppFilter;