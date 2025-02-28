import { ChangeEvent } from "react";

interface InputType {
  id: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  id,
  name,
  type,
  required,
  autoComplete,
  onChange,
}: InputType) => {
  return (
    <input
      id={id}
      autoComplete={autoComplete}
      name={name}
      type={type}
      required={required}
      onChange={onChange}
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    />
  );
};
