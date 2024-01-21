import { FunctionalComponent } from "preact";
import { RegistrationType } from "../../../services/registration-type.signal";
import './HeroImage.scss';

interface HeroImageProps {
    type: RegistrationType;
}

const korsoRegHeroImageURL = 'https://nikhok.hu/wp-content/uploads/2023/12/MAT_1028.jpg';
const gyuruRegHeroImageURL = 'https://nikhok.hu/wp-content/uploads/2023/12/Kep.jpg';
const vendegRegHeroImageURL = 'https://nikhok.hu/wp-content/uploads/2023/12/Korso-135.jpg';
const hokRegHeroImageURL = 'https://nikhok.hu/wp-content/uploads/2023/12/Kep.jpg';

const HeroImage: FunctionalComponent<HeroImageProps> = ({ type }) => {

    let heroImageURL: string;

    switch (type) {
        case 'korso':
            heroImageURL = korsoRegHeroImageURL;
            break;
        case 'gyuru':
            heroImageURL = gyuruRegHeroImageURL;
            break;
        case 'vendeg':
            heroImageURL = vendegRegHeroImageURL;
            break;
        case 'hok':
            heroImageURL = hokRegHeroImageURL;
            break;
    }

    return (<img class='hero-image' src={heroImageURL} />);
}

export default HeroImage;