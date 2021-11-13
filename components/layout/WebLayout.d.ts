import { ReactNode } from "react";
export declare const WebLayout: (props: WebLayoutProps) => JSX.Element;
export interface WebLayoutProps {
    children?: ReactNode;
    direction?: "column" | "row";
    positionX?: "start" | "center" | "end";
    positionY?: "start" | "center" | "end";
}
