import { ReactNode } from "react";
export declare const ButtonsContainer: (props: ButtonsContainerProps) => JSX.Element;
export interface ButtonsContainerProps {
    children: ReactNode;
    direction?: "column" | "row";
}
