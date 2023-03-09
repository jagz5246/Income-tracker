import {React, useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';

function App() {
  //To get local storage
  const getLocalItems=()=>{
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(list);
  }
  else{
    return [];
  }
}
  const [income,setIncome] = useState(getLocalItems());
  const [totalIncome, setTotalIncome] = useState(0);
  
//To set local storage
useEffect(() => {
  localStorage.setItem("lists", JSON.stringify(income));
  localStorage.setItem("lists", JSON.stringify(income));
 }, [income])
  useEffect(()=>{
    let temp = 0;
    for(let i=0;i<income.length;i++)
      temp+=parseInt(income[i].price);
    setTotalIncome(temp);
    }
  ,[income])

  return (
    <div className="App">
      <Header totalIncome={totalIncome}/>
      <IncomeForm income={income} setIncome={setIncome}/>
      <IncomeList income={income} setIncome={setIncome}/>
    </div>
  );
}

export default App;
