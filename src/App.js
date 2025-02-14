import { useState } from 'react';
import './App.css';
import Square from './components/square';
function App() {

  const [arrayData,setArrayData] = useState(Array(9).fill(null));
  const[xTurn,isXTurn] = useState(true);
  const array =[ [0,1,2],[0,3,6],[6,7,8],[2,5,8],[1,4,7],[3,4,5],[0,4,8],[6,4,2]  ]
  console.log("arrayData "+arrayData[0]);


  const winnerLogic = () => {
    for (let item of array) {
      const [a, b, c] = item;
      if (arrayData[a] !== null && arrayData[a] === arrayData[b] && arrayData[b] === arrayData[c]) {
        return true;
      }
    }
    return false;
  }
  

  const handlerClick = (index)=>{
    console.log("xTurn "+xTurn)
    if(arrayData[index]!=null){
      return
    }
      const copyState = [...arrayData];
      copyState[index] = xTurn ? "X" : "O"
      isXTurn(!xTurn);
      setArrayData(copyState);
  }

  let winner = winnerLogic()
  const resetTicTacToe = ()=>{
    setArrayData(Array(9).fill(null));
  }

  return (<>
      {!winner?<>
      <h1>Next Turn:  {!xTurn?"O":"X"}</h1>
      <div className="container">
          <Square onClick={()=>(handlerClick(0))} user={arrayData[0]}/>
          <Square onClick={()=>(handlerClick(1))} user={arrayData[1]}/>
          <Square onClick={()=>(handlerClick(2))} user={arrayData[2]}/>
          <Square onClick={()=>(handlerClick(3))} user={arrayData[3]}/>
          <Square onClick={()=>(handlerClick(4))} user={arrayData[4]}/>
          <Square onClick={()=>(handlerClick(5))} user={arrayData[5]}/>
          <Square onClick={()=>(handlerClick(6))} user={arrayData[6]}/>
          <Square onClick={()=>(handlerClick(7))} user={arrayData[7]}/>
          <Square onClick={()=>(handlerClick(8))} user={arrayData[8]}/>   
    </div></>:<><h1>Winner is  {xTurn?"O":"X"}</h1><button onClick={()=>(resetTicTacToe())}>Next Game</button></>}
      
  </>
  );
}

export default App;
