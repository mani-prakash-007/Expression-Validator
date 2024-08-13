import React from "react";

export const Input = ({
  label,
  id,
  name,
  type,
  className,
  onChange,
  value,
}) => {
  return (
    <>
      <label htmlFor={id} className="text-white font-bold ">{label}</label>
      <br />
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        className={`border border-black w-64 px-3 py-2 rounded-lg font-semibold ${className}`}
      />
    </>
  );
};
