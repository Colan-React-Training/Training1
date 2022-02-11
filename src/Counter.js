import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Text from "./Text";

const Counter = (props) => {
  const [name, setName] = useState("Tester");

  const hanleChangeName = () => {
    setName('welcome');
  }
  const handleSetName = (e) => {
    setName(e.target.value);
  }
  return (
    <div>
      <h2>{name}</h2>
      <Input name={name} handleChange={handleSetName} {...props} />
      <Text title={name} />
      <Button handleChange = {hanleChangeName} name={name} />
    </div>
  );
};

export default Counter;
