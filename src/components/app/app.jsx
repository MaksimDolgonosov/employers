import "./app.css"
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import "../search-panel/search-panel.css"
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

const App = () => {
    return (
        <div className="App">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList/>
            <EmployersAddForm/>
        </div>
    )
}

export default App;