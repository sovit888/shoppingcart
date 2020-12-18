import React from 'react'
import {connect} from "react-redux"
import {increaseCart,putCart,decreaseCart} from "../store/action"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {ItemsList} from "../ItemsList"
import "../app.css";

const Home = ({store,increase,put,decrease}) => {
const increaseItem=id=>event=>{
    let item=store[id]
if(!item){
    put(id)
}
increase(id)
}

const decreaseItem=id=>event=>{
    decrease(id);
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
      <h3>Remaining:<span className="details">{value.stock-value.sold-(store[value.id]||0)}</span></h3>
      <div className="card-carts-handler">
<IconButton onClick={increaseItem(value.id)} disabled={store[value.id]&&store[value.id]>=(value.stock-value.sold)}>
  <AddIcon/>
</IconButton>
<p>{store[value.id]||0}</p>
<IconButton onClick={decreaseItem(value.id)} disabled={!store[value.id]||!(store[value.id]>0)}>
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

const mapStateToProps=(state)=>{
    return {store:state.store}
}

const mapDispatchToProps=(dispatch)=>{
    return {increase:(id)=>dispatch(increaseCart(id)),
    put:(id)=>dispatch(putCart(id)),
    decrease:(id)=>dispatch(decreaseCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
