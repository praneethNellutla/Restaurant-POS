import React, { useState } from 'react'
import TableComponent from './TableComponent'
import './TableTiles.css'

function TableTiles() {
    const RandomColors = ["#203588", "#5b45b2", "#202545", "#fb87c5", "#009b7f", "#ec6342", "#801d40"]
    const [Status, setStatus] = useState("Vacient")
    const Tables = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


  return (
    <div>
        <div className="Tables">
        {Tables.map(num => {
          const bgColor = RandomColors[Math.floor(Math.random() * RandomColors.length)]
          return <TableComponent key={num} name={"Table"} number={num} status={Status} background={bgColor}/>
        })}
      </div>
    </div>
  )
}

export default TableTiles
