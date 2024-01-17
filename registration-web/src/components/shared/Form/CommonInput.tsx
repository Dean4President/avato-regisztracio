import { FunctionalComponent, JSX } from "preact";
import { Label } from "..";

interface CommonInputProps {
    inputType: 'text' | 'email' | 'number';
    hungarianLabel: string;
    englishLabel: string;
    value: string;
    disabled?: boolean;
    onInput?: ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
}

const CommonInput: FunctionalComponent<CommonInputProps> = ({inputType, hungarianLabel, englishLabel, disabled, value, onInput}) => {
    disabled = disabled ?? false;
    onInput = onInput ?? (() => {});
    
    return (    
        <div class='form-control'>
            <Label hungarian={hungarianLabel} english={englishLabel} />
            <input class='form-control' type={inputType} value={value} onInput={onInput} disabled={disabled}/>
        </div>
    );
}

export default CommonInput;