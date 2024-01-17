import { FunctionalComponent } from "preact";
import { HungarianLabel} from "..";

interface HungarianInputProps {
    inputType: 'text' | 'email' | 'number';
    title: string;
    subtitle: string;
    disabled?: boolean;
}

const HungarianInput: FunctionalComponent<HungarianInputProps> = ({inputType, title, subtitle, disabled}) => {
    disabled = disabled ?? false;
    
    return (    
        <div class='form-control'>
            {
                subtitle
                ?
                <HungarianLabel title={title} subtitle={subtitle} />
                :
                <HungarianLabel title={title}/>
            }
            <input class='form-control' type={inputType} disabled={disabled}/>
        </div>
    );
}

export default HungarianInput;