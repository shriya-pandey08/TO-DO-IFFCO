import React from 'react';
import './CSS/Todoitems.css';
import tick from './assets/tick.png';
import notTick from './assets/not_tick.png';
import cross from './assets/cross.png';

const Todoitems = ({ no, display, text, setTodos }) => {

  const deletetodo=(no)=>{
    let data =JSON.parse(localStorage.getItem("todos"));
    data= data.filter((todo)=>todo.no!==no);
    setTodos(data);
  }

  const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++)
    {
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-through";
        }
        else{
          data[i].display="";
        }
        break;
      }
    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={notTick} alt='Not Tick'/>:<img src={tick} alt='Tick'/>}
        
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icons' onClick={()=>{deletetodo(no)}} src={cross} alt='Cross'/>
    </div>
  );
}

export default Todoitems;
