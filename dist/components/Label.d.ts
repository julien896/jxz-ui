/// <reference types="react" />
import './myLabel.css';
export interface Props {
    label: string;
    size: 'normal' | 'h1' | 'h2' | 'h3';
}
export declare const Label: ({ label, size }: Props) => JSX.Element;
