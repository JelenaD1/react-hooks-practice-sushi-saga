import React,{ useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[sushiList, setSushiList] = useState([])
  const [indeces, setIndeces] = useState({ start: 0, end: 4})
  const[plates, setPlates] = useState([])
  const[money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
     .then(resp => resp.json())
     .then(data => setSushiList(data))

  }, [])

  const updateIndeces = () => {
    const newStart = indeces.start + 4
    const newEnd = indeces.end +4
    setIndeces({start: newStart, end: newEnd})
    console.log(newStart, newEnd)
  }
  const sushiToDisplay = sushiList.slice(indeces.start, indeces.end)

  const handleSushiPlate = (piece) => {
    
      setPlates([...plates, piece])
      setMoney(money - piece.price)
    
  }

  



  return (
    <div className="app">
      <SushiContainer money={money} onSushiClick={handleSushiPlate} sushiList={sushiToDisplay} fullSushiList={sushiList} updateIndeces={updateIndeces} />
      <Table  money={money} plates={plates}/>
    </div>
  );
}

export default App;
