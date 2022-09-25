import React, { useState, memo, useCallback } from "react";

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const onClickParentCount = () => {
    setCount(count + 1);
  };

  const onClickChildCount = useCallback(() => {
    setChildCount(childCount + 1);
  },[childCount]);

  return (
    <>
      <div style={{ padding: "16px" }}>
        <h2>count up</h2>
        <button onClick={onClickParentCount}>count up!</button>
        <p>{count}</p>
        <Child
         onClick={onClickChildCount}
        />
        <p>{childCount}</p>
      </div>
    </>
  );
};

const Child = memo((props:any) => {
  console.log("child is called");
  return (
    <div>
      <h3>child</h3>
      <button onClick={props.onClick}>child count up!</button>
    </div>
  );
});


export default Parent;


