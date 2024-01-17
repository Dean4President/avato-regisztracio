import { FunctionComponent } from "preact";

interface HungarianLabelProps {
    title: string;
    subtitle?: string;
}

const HungarianLabel: FunctionComponent<HungarianLabelProps> = ({ title, subtitle }) => {

    const subtitleDOM = subtitle ? <>
        <br />
        <span class='label-en'>{subtitle}</span>
    </> : null;

    return (
        <label>
            <span class='label-hu'>{title}</span>
            {subtitleDOM}
        </label>
    );
}

export default HungarianLabel;