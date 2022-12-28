import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const value = 20;

  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({
      type : "increment",
    })
  }

  const subBtn = () => {
    dispatch({
      type : "decrement",
    })
  }


  const addBtn25 = () => {
    dispatch({
      type : "incrementByValue",
      payload : 25
    })
  }

  

  return (
    <div>
      <button onClick={()=> {addBtn()}}>Increment</button>
      <button onClick={()=> {subBtn()}}>Decrement</button>
      <button onClick={()=> {addBtn25()}}>IncrementBy25</button>
    </div>
  );
};

export default Home;
