import { Component } from "react";

import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import "../search-panel/search-panel.css"
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: "John C.", salary: 1800, increase: false, rise: true, id: 1 },
                { name: "Mike M.", salary: 3000, increase: false, rise: true, id: 2 },
                { name: "Alex S.", salary: 5000, increase: false, rise: true, id: 3 },
            ],
            term: "",
            filter: ""
        }
        this.maxId = 4;
    }

    editItem = (name, salary) => {
        this.setState(({ data }) => {
            return {
                data: [...data, { name: name, salary: salary, increase: false, id: this.maxId }]
            }
        })

        this.maxId++;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, increase: !item.increase }
                    }
                    return item
                })
            }
        })
    }
    onToggleRise = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, rise: !item.rise }
                    }
                    return item
                })
            }
        })
    }

    searchEmp = (items, term) => {
        if (!term) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterEmp = (data, filt) => {
        if (!filt || filt === "all") {
            return data;
        }
        if (filt === "rise") {
            return data.filter(item => {
                return item.rise === true;
            })
        } else {
            return data.filter(item => {
                return item.salary > 1000;
            })
        }

    }
    onUpdateFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }


    render() {
        const { data, term, filter } = this.state;
        let visibleData = this.filterEmp(this.searchEmp(data, term), filter);
    
        return (
            <div className="App">
                <AppInfo
                    amount={this.state.data.length}
                    increase={this.state.data.filter(item => item.increase).length} />
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter 
                    onUpdateFilter={this.onUpdateFilter}/>
                </div>
                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise} />
                <EmployersAddForm
                    onEdit={this.editItem} />
            </div>
        )
    }


}

export default App;