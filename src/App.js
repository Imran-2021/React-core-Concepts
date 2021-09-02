import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const Products =[
    {name:"photoshop",price:"444"},
    {name:"illastritur",price:'45'},
    {name:"mobile",price:'33'},
    {name:"imran",price:"1 mellion"}
  ]

  return (
    <>
    <Users></Users>
    <Count></Count>
      {
        Products.map(x=> <Produc  product={x}/>)
      }
    </>
    
  );
}

function Users(){
 const [user, setUsers]=useState([]);
 useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(req=>req.json())
   .then(data=>setUsers(data))
 },[])

  return(
    <div>
      <h1>dynamic users -{user.length} </h1>
      {
        user.map(x=><h2 style={{textAlign:"center",padding:"10px",backgroundColor:"yellow"}}>{x.phone}</h2>)
      }
    </div>
  )
}


function Count(){
  const [state,setState]=useState(0)

return(
  <div style={{textAlign:"center"}}>
    <h1>Count: {state}</h1>
    <button onClick={()=>setState(state + 1)}> click to increase</button>
    <button onClick={()=>state>0 && setState(state - 1)}> click to decrease</button>
  </div>
)
}
function Produc(props){
  const {name,price}=props.product
  const sty={
    color:'yellow',
    padding:'10px',
    backgroundColor:"green",
    margin:"10px",
    borderRadius:"5px"
  }

  return(
    
    <div style={sty}>
    <h2>product name : {name} </h2>
    <h2>Price : {price} </h2>
    <button>buy now !</button>
    </div>
  )
} 


export default App;
