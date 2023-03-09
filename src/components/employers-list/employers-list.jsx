import EmployersListItem from "../employers-list-item/employers-list-item"
import "./employers-list.css"

const EmployersList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        // return <EmployersListItem name={item.name} salary={item.salary} increase={item.increase} key={item.id}/>
        return <EmployersListItem
            {...itemProps}
            key={id}
            onDelete={() => onDelete(id)}
            onToggleIncrease={()=>onToggleIncrease(id)}
            onToggleRise={()=>{onToggleRise(id)}}
            increase={item.increase}
            rise={item.rise}
        />
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;