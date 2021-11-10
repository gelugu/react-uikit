import { InputHTMLAttributes, ReactNode } from "react";
export declare const Input: (props: InputProps) => JSX.Element;
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: ReactNode;
    labelPosition?: "up" | "left";
}
