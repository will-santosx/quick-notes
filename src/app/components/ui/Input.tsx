import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export default function Input({
  type,
  name,
  value,
  onChange,
  placeholder,
  autoFocus,
  required,
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="dark:bg-gray-700 bg-gray-300 rounded-md placeholder:text-black px-[10px] border-transparent border-2 focus:border-black focus:border-opacity-30 outline-none dark:placeholder:text-white w-full h-[40px]"
    ></input>
  );
}

export function TextArea({
  name,
  value,
  onChange,
  placeholder,
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      minLength={5}
      placeholder={placeholder}
      className="dark:bg-gray-700 bg-gray-300 rounded-md placeholder:text-black px-[10px] border-transparent border-2 focus:border-black focus:border-opacity-30 outline-none dark:placeholder:text-white w-full h-[220px]"
    ></textarea>
  );
}
