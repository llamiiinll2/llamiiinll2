import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?:string;
    error?:string;
    icone?:React.ReactNode;
  
}
export default IInputProps