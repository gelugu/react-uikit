import { ReactNode } from "react";
import { ViewProps } from "./View";
export declare const FloatView: (props: FloatViewProps) => JSX.Element;
export interface FloatViewProps extends ViewProps {
    children: ReactNode;
}
