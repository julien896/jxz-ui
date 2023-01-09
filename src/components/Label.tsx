import './myLabel.css'

interface Props {
    label: string;
    size: 'normal' | 'h1' | 'h2' | 'h3';
}

const Label = ( {
    label = 'Label',
    size = 'normal' 
}: Props ) => {
    return ( 
        <div className={` ${size} `}>{label}</div>
     );
}
 
export default Label;