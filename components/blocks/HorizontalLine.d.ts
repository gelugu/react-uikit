import { InputHTMLAttributes } from "react";
export declare const HorizontalLine: (props: HorizontalLineProps) => JSX.Element;
export interface HorizontalLineProps extends InputHTMLAttributes<HTMLHRElement> {
    size?: number;
    color?: string;
    type?: LineType;
}
export declare enum LineType {
    duoble = "double",
    dashed = "dashed",
    dotted = "dotted",
    groove = "groove",
    ridge = "ridge",
    solid = "solid"
}
