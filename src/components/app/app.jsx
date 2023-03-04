import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import "../search-panel/search-panel.css"
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

const App = () => {
    const data = [
        { name: "John C.", salary: 1800, increase: true, id: 1 },
        { name: "Mike M.", salary: 3000, increase: false, id: 2 },
        { name: "Alex S.", salary: 5000, increase: true, id: 3 },
    ]


    return (
        <div className="App">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList data={data} />
            <EmployersAddForm />
        </div>
    )
}

export default App;