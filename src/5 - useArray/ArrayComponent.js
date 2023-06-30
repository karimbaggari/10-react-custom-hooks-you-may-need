import useArray from "./useArray";

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);
  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change second Element with 9</button>
      <button onClick={() => remove(1)}>Delete second Element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep numbers less than 4
      </button>
      <button onClick={() => set([1, 2])}>set 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
