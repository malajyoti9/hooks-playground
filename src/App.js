import React,{useState,useEffect,useContext, createContext} from 'react';

// function useCounter (startingValue){ 
//   const [count,setCount]=useState(startingValue);
//   // const [color,setColor]=useState('salmon')
//   const handleIncrease=()=>setCount(count+1);
//   const handleDecrease=()=>setCount(count-1)
  
//   return {
//     count,handleDecrease,handleIncrease
//   }
  // useEffect(() => {
  //  console.log(`I am inside useEffect function.I will only run on mounting.The count is ${count}`)
  //  return ()=>{
  //    console.log(`I am removing anything that was setup above!,The last count was ${count}.But now I will only run when component is unmounted`)
  //  }
  //  })
  
  // function handleColorChange(){
  //   console.log('====')
  //   const nextColor=color==='salmon'?'gold':'salmon';
  //   setColor(nextColor)
  // }

// }

// function Display(props){
//   const {count,handleDecrease,handleIncrease}=useCounter(props.start);
//   return (
//     <div>
//   <button onClick={handleIncrease}>Increase</button>
//   {/* <button onClick={handleColorChange}>Change Color</button> */}

//   <button onClick={handleDecrease}>Decrease</button>

//   <h1>{count}</h1>
//   </div>
//   );
// }

// function FancyDisplay(props){
//   const {count,handleDecrease,handleIncrease}=useCounter(props.start);
//   return (
//     <div>
//   <button onClick={handleIncrease}>Increase</button>
//   {/* <button onClick={handleColorChange}>Change Color</button> */}

//   <button onClick={handleDecrease}>Decrease</button>

//   <h2>{count}</h2>
//   </div>
//   );
// }

// function App(){
//  return (<div>
// <Display start={10}/>
// <Display  start={20}/>
// <FancyDisplay start={30} />
//  </div>
//  )
// }
   

// function App() {
// const [visible,setVisible]=useState(false)

// return(
//   <div>
//     <button onClick={()=>setVisible(!visible)}>
//       Show/Hide the Counter component
//     </button>
//     {visible &&<Counter/>}
//   </div>
// )

// }


// function App(){
//   const userText=useKeyPress('once upon a time');

//   return(
//     <div>
//       <h1>Feel free to type! Your text will show up below!</h1>
//    <blockquote>{userText}</blockquote>
//     </div>  )
// }

//   function useKeyPress(startingValue){
//     const [userText,setUserText]=useState(startingValue);

//     function handleUserKeyPress(event){
//       const {key,keyCode}=event
//       if(keyCode===32 ||(keyCode>=65 && keyCode<=90)){
//         setUserText(`${userText}${key}`)
//       }
//     }
//     useEffect(()=>{
//       window.addEventListener('keydown',handleUserKeyPress)
//       return()=>{
//         window.removeEventListener('keydown',handleUserKeyPress)
//       }
//     })
//     return userText
//   }
 


// const NameContext=createContext();
// function App(){
//   const [name,setName]=useState('Billy Shakespeare');
//   return (
//     <NameContext.Provider value={name}><Child/>
//     </NameContext.Provider>
//   )
// }


// function Child(){
//   return (
//     <section className="child">
//       <Grandchild/>
//     </section>
//   )
// }

// function Grandchild(){
//   return (
//     <div className="grandchild">
//       <Button/>
//     </div>
//   )
// }

// function Button(){
//   const name=useContext(NameContext)
//   return (
//     <button>{name}</button>
//   )
// }
function  UserInput(){
  const [value,setValue]=useState('');
  function onChange(event){
    setValue(event.target.value);
  }
  return {
    value,onChange
  }
}

function App(){
  console.log(UserInput())
  const {value:name,onChange:handleNameChange}=UserInput();
  const {value:surname,onChange:handleSurNameChange}=UserInput();
  const {value:age,onChange:handleAgeChange}=UserInput();

  return(
    <form >
      <input type="text" 
      placeholder="Name"
      {...UserInput()}
      // value= {name}
      // onChange={handleNameChange}
      />

<input type="text" 
      placeholder="Last Name"
      {...UserInput()}
      // value= {surname}
      // onChange={handleSurNameChange}
      />

<input type="number" 
      placeholder="Age"
      {...UserInput()}
      // value= {age}
      // onChange={handleAgeChange}
      />
    </form>
  )
}
export default App;
