import { useState, useRef, ChangeEvent } from "react";

const UseRefExample = () => {
  const [name, setName] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input ref={inputRef} value={name} onChange={handleChange} />
      <div>My name is {name}</div>
      <button onClick={() => inputRef.current?.focus()}>focus input</button>
    </>
  );
};

export default UseRefExample;
