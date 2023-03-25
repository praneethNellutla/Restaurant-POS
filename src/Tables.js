import React from 'react'
import './Tables.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import TableTiles from './TableTiles';


function Tables() {
  return (
    <div className='TableContents'>
      <div className="Tableheader">
        <div className="TableLeft">
            <div className="leftTableBack">
                <IconButton >
                    <ArrowBackIcon className='BackIcon'/>
                </IconButton>
            </div>
            <div className='leftTableName'>
                <h3>Tables</h3>
                <p>16 Tables</p>
            </div>
        </div>
        <div className="TableRight">
            <button className='TableRightOrders' type="submit">Orders</button>
            <button className='TableRightCustomers' type="submit">Customers</button>
        </div>
      </div>
      <div >
        <TableTiles />
      </div>
    </div>
  )
}

export default Tables
