import React,{useState} from "react";
const orders=[100,200,300];
const Couter=()=>{
   
    const [count,setCount]=useState(()=>{
        const total=orders.reduce((prev,current)=>{
            return prev+current;
        },0)
        
        return total;
    });
    const handleClick=()=>{
        
        setCount((prev)=> prev+1);
        
        
    }

    return(
      
        <div style={{padding:'20px'}}>
            <h2>{count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default Couter;
/*
  ?? state thay đổi component sẽ bin re-reder lại
  !! giá trị initalState chỉ dùng cho lần đầu tiên
  initalState với callback khi initalSatte la 1 tính toán phức tập
  hàm setState la hàm bất đồng bộ
  cập nhật state có thể dùng callaback đẻ câp nhật dựa trên state cũ



*/