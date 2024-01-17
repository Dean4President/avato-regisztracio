import { FunctionComponent } from "preact";
import './Title.scss';

interface TitleProps {
    type: string;
}

const Title: FunctionComponent<TitleProps> = ({ type }) => {
    
    let registerType;
    
    switch (type) {
        case 'korso':
            registerType = 'Korsóavató';
            break;
        case 'gyuru':
            registerType = 'Gyűrűavató';
            break;
        case 'vendeg':
            registerType = 'Vendég';
            break;
        case 'hok':
            registerType = 'HÖK';
            break;
    }

    return (
        <h1 class='register-title'>
            {registerType} regisztráció
        </h1>
    );
}

export default Title;