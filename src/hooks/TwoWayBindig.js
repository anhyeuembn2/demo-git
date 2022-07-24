import React, { useState } from "react";
const Course=[
    {
        id:1,
        name:"HTML,CSS"
    },
    {
        id:2,
        name:"Javascript"
    },
    {
        id:3,
        name:"React"
    }
]
const TwoWayBindig = () => {
  const [check, setCheck] = useState([]);
  console.log(check);
  const handleCheck=(id)=>{
     setCheck((prev)=> {
        const isCheck=check.includes(id);
        if(isCheck){
            return check.filter((item)=> item!==id)
        }else{
            return [...prev,id]
        }
     })
  }
  return (
    <div style={{ padding: "20px" }}>
    {Course.map((item,index)=>(
        <div key={item.id}>
            <input type='checkbox'
            checked={check.includes(item.id)}
            onChange={()=> handleCheck(item.id)} />
            {item.name}
        </div>

    ))}
      <button>Change</button>
    </div>
  );
};

export default TwoWayBindig;
