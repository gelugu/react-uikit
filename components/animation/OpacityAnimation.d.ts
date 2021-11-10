import { ReactNode } from "react";
export declare const OpacityAnimation: (props: OpacityAnimationProps) => JSX.Element;
export interface OpacityAnimationProps {
    children: ReactNode;
    start?: number;
    end?: number;
}
