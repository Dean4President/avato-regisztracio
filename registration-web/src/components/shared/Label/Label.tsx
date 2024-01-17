import { FunctionComponent } from "preact";

interface LabelProps {
    hungarian: string;
    english: string;
}

const Label: FunctionComponent<LabelProps> = ({ hungarian, english }) => {
    
    return (
        <label>
            <span class='label-hu'>{hungarian}</span> / <span class='label-en'>{english}:</span>
        </label>
    );
}

export default Label;