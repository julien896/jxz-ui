import './myLabel.css'

export interface Props {
    label: string;
    size: 'normal' | 'h1' | 'h2' | 'h3';
}

export const Label = ( {
    label = 'Label',
    size = 'normal' 
}: Props ) => {
    return ( 
        <div className={` ${size} `}>{label}</div>
     );
}
 
