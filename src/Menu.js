import React, { useState } from 'react'
import TableComponent from './TableComponent'
import './Menu.css'

function Menu() {
    const RandomColors = ["#203588", "#5b45b2", "#202545", "#fb87c5", "#009b7f", "#ec6342", "#801d40"]
    const [Status, setStatus] = useState("Vacient")
    const Menu = ["Starter (Veg)", "Starter (Non-Veg)", "Main-Course", "Pizza", "Dessert", "Bewerages", "Soups", "Drinks"]


  return (
    <div>
        <div className="Menu">
            {Menu.map((items, id) => {
            const bgColor = RandomColors[Math.floor(Math.random() * RandomColors.length)]
            return <TableComponent key={id} name={items} status={Status} background={bgColor}/>
            })}
        </div>
    </div>
  )
}

export default Menu
