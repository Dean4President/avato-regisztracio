import './Credits.scss';

const Credits = () => {
    const currentYear = (new Date()).getFullYear();
    
    return (
        <div class='credits'>
            <a target='_blank'>
                © {currentYear} NIK HÖK - Created by Dean
            </a>
        </div>
    );
}

export default Credits;