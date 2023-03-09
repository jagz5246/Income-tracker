import React,{useRef } from "react";

function IncomeForm({income, setIncome}) {
    const desc = useRef(null);
    const price = useRef(null);
    const date = useRef(null);
    const addIncome=(e)=>{
        e.preventDefault();
        let d = date.current.value.split('-');
        let newD = new Date(d[0], d[1], d[2]);
        if(price.current.value>0 && desc.current.value.length>0 && date!==null){
            setIncome([...income,{
                "desc": desc.current.value,
                "price": price.current.value,
                "date": newD.getTime()
            }]);
        }
        desc.current.value="";
        price.current.value=null;
        date.current.value=null;
    }
  return (
    <form className='income-form' onSubmit={addIncome}>
        <div className='form-inner'>
            <input type='text' id='desc' name='desc' placeholder='Income desc.' ref={desc}/>
            <input type='number' name='price' id='price' placeholder='$ income earned' ref={price}/>
            <input type='date' name='date' id='date' placeholder='date' ref={date}/>
            <input type='submit' value='Add Income'/> 
        </div>
    </form>
  )
}

export default IncomeForm