import { FunctionalComponent, JSX } from "preact";
import { HungarianLabel } from "..";

interface HungarianTextareaProps {
    title: string;
    subtitle?: string;
    disabled?: boolean;
    onInput?: ({currentTarget}: JSX.TargetedEvent<HTMLTextAreaElement, Event>) => void;
}

const HungarianTextarea: FunctionalComponent<HungarianTextareaProps> = ({title, subtitle, disabled, onInput}) => {
    disabled = disabled ?? false;
    onInput = onInput ?? (() => {});
    
    return (
        <div class='form-control'>
            {
                subtitle
                ?
                <HungarianLabel title={title} subtitle={subtitle} />
                :
                <HungarianLabel title={title}/>
            }
            <textarea class='form-control' onInput={onInput}></textarea>
        </div>
    );
}

export default HungarianTextarea;