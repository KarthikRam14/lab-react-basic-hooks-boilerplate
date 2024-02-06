import { useState } from "react";
import "../App.css"

function UseState(){

    // <----- single state 

//   const [currAge,setAge] = useState(19);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <button onClick={handleAge}>Get Older</button>
//     </div>
//   -----> );



    // <-------- multiple state 

//     const [currAge,setAge] = useState(19);
//   const [currSib, setSib] = useState(1);
  
//   const handleAge = ()=>{
//     setAge(currAge+1);
//   }

//   const handleSib = ()=>{
//     setSib(currSib+1);
//   }


//   return (
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={handleAge}>Get Older</button>
//       <button onClick={handleSib}>Get more Sib</button>
//     </div>
//  ------> );


    // <------ multiple state and setting initial value as objects 

//     const [state, setState] = useState({age:19, siblings:3});

//   const handleState = (val)=>{
  
//     setState({
//       ...state,[val]:state[val]+1
//     })
//   }

//   const {age,siblings} = state;

//   return(
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My siblings {siblings}</h4>
//       <button onClick={()=>{handleState("age")}}>age</button>
//       <button onClick={()=>{handleState("siblings")}}>sib</button>
//     </div>
//  -------> )


    // <------- initializing state from fnction 

//     const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//  ------> )
}

export default UseState;
