import { useCallback, useState, useEffect } from "react";

export const useCounter = () => {
  useEffect(() => {
    console.log("call api");
  }, []);

  const [count, setCount] = useState(0);
  const [useName, setName] = useState("Boss");

  const increment = useCallback(() => setCount((x) => x + 1), []);

  const decrement = useCallback(() => setCount((x) => x - 1), []);

  return { count, increment, decrement, useName, setName };
};
