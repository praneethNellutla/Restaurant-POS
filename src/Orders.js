import React from 'react'
import './Orders.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Orders() {
  return (
    <div className='orders'>
      <div className="orderContents">
        <div className="orderHeader">
          <div className="leftOrderHeader">
            <SearchIcon />
          </div>
          <div className="rightOrderHeader">
            <div className="rightText">
              <h3>Example</h3>
              <p>Clocked in 12:23 PM</p>
            </div>
            <div className="rightAvatar">
              <Avatar />
            </div>
          </div>
        </div>
        <div className="orderContents">
          <div className="orderContentsHeader">
              <div className="leftOrderContents">
                <h3>Table</h3>
                <p>Customer Name</p>
              </div>
              <div className="rightOrderContents">
                <KeyboardArrowDownIcon />
                <DeleteIcon />
                <EditIcon />
              </div>
          </div>
            <div className="orderContentsBody">
              <ShoppingCartIcon />
              <p>No Items</p>
            </div>
        </div>
        <div className="orderPayment">
          <div className="orderPaymentHeader">
            <button type="submit">Discount</button>
            <button type="submit">Cash</button>
            <button type="submit">UPI</button>
          </div>
          <div className="orderPaymentBody">
            <div className="gst">
              <p>GST 5%</p>
              <p>₹0.00</p>
            </div>
            <div className="SubTotal">
              <p>SubTotal</p>
              <p>₹0.00</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>₹0.00</p>
            </div>
          </div>
          <div className="orderPaymentFooter">
            <button type="submit">KOT</button>
            <button type="submit">Place Order</button>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
