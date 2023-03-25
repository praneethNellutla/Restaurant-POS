import React from 'react'
import './TableComponent.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function TableComponent({ name, number, status, background }) {
  return (
    <div className='TableComponent' style={{ backgroundColor : background}}>
        <h2>{name} {number}</h2>
        <div className="TableComponentStatus">
            <span>Status</span>
            <ArrowRightAltIcon />
            <p>{status}</p>
        </div>
    </div>
  )
}

export default TableComponent