import React,{useState} from 'react';

const Gifts=[
    'Computer Screen',
    'MacBook Pro',
    "Iphone Pro Max"
]
const TwoWayBinding = () => {
    const [gift,setGift]=useState();
    const handleGift=()=>{
        const index=Math.floor(Math.random()*Gifts.length);
        console.log(index);
        setGift(Gifts[index]);
    }
    return (
        <div style={{padding:"20px"}}>
            <h1>{gift || "Chưa có sản phẩm"}</h1>
            <button onClick={handleGift}>Lấy Thưởng</button>
        </div>
    );
};

export default TwoWayBinding;