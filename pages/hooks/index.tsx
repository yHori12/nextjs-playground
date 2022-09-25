import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

interface User {
  name: string;
  age: number;
}

export const Component: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const userId = 1

  const getUserProfile = useCallback(() =>
    userId === 1 ? {name: 'hoge', age: 20} : {name: 'Bob', age: 25},[userId]);

  useEffect(() => {
    const user = getUserProfile()
    setUser(user)
  }, [getUserProfile]);

  console.log("render");
  return (
    <>
      <div style={{ padding: "16px" }}>
        <h2>{`user:${user?.name}`}</h2>
        <h2>{`age:${user?.age}`}</h2>
      </div>
    </>
  );
};

export default Component;
