import { InputHTMLAttributes } from "react";
export declare const Input: (props: InputProps) => JSX.Element;
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    primary?: boolean;
}
