import EmployersListItem from "../employers-list-item/employers-list-item"
import "./employers-list.css"

const EmployersList = ({ data }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        // return <EmployersListItem name={item.name} salary={item.salary} increase={item.increase} id={item.id}/>
        return <EmployersListItem {...itemProps} key={id} />
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;