import { InputHTMLAttributes, ReactNode } from "react";
export declare const Button: (props: ButtonProps) => JSX.Element;
export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    primary?: boolean;
    shadow?: boolean;
}
