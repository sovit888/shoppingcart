import React,{useState} from 'react'
import IconButton from "@material-ui/core/IconButton"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {ItemsList} from "./ItemsList"
import "./app.css";

const App = () => {
  const [count,setCount]=useState({})
const increaseCart=id=>event=>{
  let items=count[id]?count[id]:0;
  items++;
  setCount({...count,[id]:items})
}
const decreaseCart=id=>event=>{
  let items=count[id];
  items--;
  setCount({...count,[id]:items})
}
  return (
  <>
<div className="app">
  <div className="card">
    {ItemsList.map((value,index)=>{
      return <div className="card-carts" key={index}>
      <h1>{value.label}</h1>
      <h3>Price Rs <span className="details">{value.price} </span></h3>
      <h3>Sold:<span className="details">{value.sold}</span></h3>
      <h3>Remaining:<span className="details">{value.stock-value.sold-(count[value.id]||0)}</span></h3>
      <div className="card-carts-handler">
<IconButton onClick={increaseCart(value.id)} disabled={count[value.id]&&count[value.id]>=(value.stock-value.sold)}>
  <AddIcon/>
</IconButton>
<p>{count[value.id]||0}</p>
<IconButton onClick={decreaseCart(value.id)} disabled={!count[value.id]||!(count[value.id]>0)}>
  <RemoveIcon/>
</IconButton>
      </div>
    </div>
    })}
   
  </div>
</div>

  </>
  )
}

export default App
