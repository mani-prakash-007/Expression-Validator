import React, { useEffect, useState } from "react";
import { Input } from "../input/Input";
import { evaluate } from "mathjs";

export const Comparator = () => {
  //State
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [operator, setOperator] = useState("==");
  const [result, setResult] = useState("None");

  //Function for Expression Comparision
  const handleComparision = () => {
    if (input1Value == "" || input2Value == "") {
      setResult("Invalid");
    } else {
      const result = evaluate(`${input1Value}${operator}${input2Value}`);
      if (result) {
        setResult("True");
      } else {
        setResult("False");
      }
    }
  };

  //Side Effects
  useEffect(() => {
    handleComparision();
  }, [input1Value, input2Value, operator]);
  return (
    <>
      <Input
        label={"Number 1"}
        id={"number1"}
        name={"number1"}
        type={"number"}
        className={"mb-5"}
        onChange={(e) => {
          setInput1Value(e.target.value);
        }}
      />
      <br />
      <label htmlFor="operator" className="text-white font-bold">
        Comparison Operator
      </label>
      <br />
      <select
        name="operator"
        id="operator"
        className="border border-black w-64 mb-5 px-3 py-2 rounded-lg font-semibold"
        onChange={(e) => {
          setOperator(e.target.value);
        }}
      >
        <option value="==">{`== (Equals to)`}</option>
        <option value=">=">{`>= (Greater than or Equal to)`}</option>
        <option value="<=">{`<= (Less than or Equal to)`}</option>
        <option value=">">{`> (Greater than)`}</option>
        <option value="<">{`< (Less than)`}</option>
      </select>

      <br />
      <Input
        label={"Number 2"}
        id={"number2"}
        name={"number2"}
        type={"number"}
        className={"mb-5"}
        onChange={(e) => {
          setInput2Value(e.target.value);
        }}
      />
      <div>
        <h1 className="font-bold text-white text-xl">Result</h1>
        <p
          className={`pl-5 font-extrabold text-lg tracking-wider ${
            result == "True" ? "text-green-600" : "text-red-600"
          }`}
        >
          {result}
        </p>
      </div>
    </>
  );
};
