import { ReactNode } from "react";
import { ViewDirection } from "../view/View";
export declare const ButtonsContainer: (props: ButtonsContainerProps) => JSX.Element;
export interface ButtonsContainerProps {
    children: ReactNode;
    direction?: ViewDirection;
}
