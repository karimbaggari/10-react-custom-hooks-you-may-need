import { useEffect } from "react";
import useTimeout from "../2 - useTimeout/useTimeout";

export default function useDebounce(callback, delay, dependecies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependecies, reset]);
  useEffect(clear, []);
}
