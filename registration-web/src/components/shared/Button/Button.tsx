import { FunctionComponent } from "preact";
import './Button.scss'

interface ButtonProps {
    type?: 'primary';
    label: string;
    onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({type, label, onClick}) => {
    type = type ?? 'primary';
    onClick = onClick ?? (() => {});

    return (
        <div className={'gradient-button gradient-button-' + type}
            onClick={onClick}>
            <span>
                { label }
            </span>
        </div>
    );
}

export default Button;