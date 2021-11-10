import { ButtonHTMLAttributes, ReactNode } from "react";
export declare const Button: (props: ButtonProps) => JSX.Element;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    primary?: boolean;
    shadow?: boolean;
}
