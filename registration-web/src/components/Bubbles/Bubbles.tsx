import { FunctionComponent } from 'preact';
import Bubble from './Bubble/Bubble';
import './Bubbles.scss';

const Bubbles: FunctionComponent = () => {

    const windowWidth: number = window.innerWidth / 100;
    const windowHeight: number = window.innerHeight / 100;

    const numberOfBubbles: number = Math.round(windowWidth * windowHeight / 2);

    return (
        <>
            {
                [...Array(numberOfBubbles)].map((e, i) => <Bubble index={i+1} />)
            }
        </>
    );
}

export default Bubbles;