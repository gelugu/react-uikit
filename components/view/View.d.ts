import { InputHTMLAttributes, ReactNode } from "react";
import { LineType } from "../blocks";
import { HeaderSize } from "../header";
export declare const View: (props: ViewProps) => JSX.Element;
export interface ViewProps extends InputHTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    direction?: "columns" | "rows";
    border?: boolean;
    borderColor?: string;
    header?: string;
    headerSize?: HeaderSize;
    headerColor?: string;
    headerLineType?: LineType;
}
