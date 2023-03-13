import { Component } from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) => {
        this.setState({
            term: e.target.value
        })
        this.props.onUpdateSearch(e.target.value);
    }

    render() {
        const { term } = this.state;
        return (
            <input type="text" className="form-control search-input" placeholder="Найти сотрудника " onChange={this.onUpdateSearch} value={term} />
        )
    }

}

export default SearchPanel;