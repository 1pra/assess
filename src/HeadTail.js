import React, { useState } from 'react';
import './App.css'

function HeadTail() {
  const [selectedValue, setSelectedValue] = useState("");
  const [history, setHistory] = useState([]);
  const [lastSelected, setLastSelected] = useState(null)
  const [error, setError]= useState("");

  const handleSubmit = () => {
    if(selectedValue!=='H'&&selectedValue!=='T'){
        setError("Please select value from dropdown");
    }
    if(history.length===0 ||(history[history.length-1].value !== selectedValue)){
        console.log(selectedValue)
        setHistory([...history,{value:selectedValue,data:[]}])  
    }
    if(history.length>0 && history[history.length-1].value === selectedValue){
        if(selectedValue === lastSelected){
            const new_history = history
            new_history[new_history.length-1].data.push(selectedValue)
            setHistory(new_history)
        }else{
            let new_history = history
            new_history[new_history.length-1].data.push(selectedValue)
            setHistory([...new_history,{value:selectedValue,data:[]}])
            setLastSelected(selectedValue)
        }
    }else {
        setHistory([...history,{value:selectedValue,data:[]}])
        setLastSelected(selectedValue)
        
    }
    setSelectedValue("");
    if(selectedValue==='H' || selectedValue==='T'){
        setError("");
    }
  }
const renderHistory = () => {
    return(
    <div className="history-container">
    {history.map((item,i) => (
        <div className={`${item.value}-column`}>
        { item.data.map((d,index)=>(
            <div key={index}>{d} &nbsp;</div>
        ))}
        </div>
    ))}
    </div>
    )
}

  return (
    <div>
        <center>
      <select value={selectedValue} onChange={event => setSelectedValue(event.target.value)}>
        <option value=""  disabled>Select Value</option>
        <option value="H">H</option>
        <option value="T">T</option>
      </select><br/>{error}<br/>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        { renderHistory()}
      </div>
      </center>
    </div>
  );
}

export default HeadTail;