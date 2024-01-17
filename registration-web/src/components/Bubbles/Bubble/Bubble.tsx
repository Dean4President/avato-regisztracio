import { FunctionComponent } from "preact";

interface BubbleProps {
    index: number
}

const Bubble: FunctionComponent<BubbleProps> = ({ index }) => {
    
    const className: string = 'bubble bubble-' + index + ' bubble-gradient-' + (index % 4);

    return (
        <div className={className}>
        </div>
    );
}

export default Bubble;