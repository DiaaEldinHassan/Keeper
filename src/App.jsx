import { useState } from 'react';
import Nav from "./navbar";
import Input from './input';
import Card from './card';
function App() {
  const [list, setCount] = useState([]);

  function value(title,note) {
    var newVar= {title:title,note:note};
    setCount([...list,newVar]);
  }
  function del(x) {
    setCount(list.filter((_,index)=> index!==x));
  }
  return <div className='all'>
   <Nav></Nav>
    <Input func={value}></Input>
    <div className='wraper'>
   {list.map((item,index)=>{return <Card key={index} index={index} func={del} title={item.title} note={item.note}></Card>;})}</div>
  </div>
}

export default App
