import { FunctionalComponent, JSX } from "preact";
import { Label } from "..";

interface CommonTextareaProps {
    hungarianLabel: string;
    englishLabel: string;
    value: string;
    disabled?: boolean;
    onInput?: ({currentTarget}: JSX.TargetedEvent<HTMLTextAreaElement, Event>) => void;
}

const CommonTextarea: FunctionalComponent<CommonTextareaProps> = ({hungarianLabel, englishLabel, value, disabled, onInput}) => {
    disabled = disabled ?? false;
    onInput = onInput ?? (() => {});
    
    return (
        <div class='form-control'>
            <Label hungarian={hungarianLabel} english={englishLabel} />
            <textarea class='form-control' onInput={onInput}>{value}</textarea>
        </div>
    );
}

export default CommonTextarea;