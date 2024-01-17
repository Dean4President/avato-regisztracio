import { FunctionalComponent, JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Button, HeroImage, Title, VoucherInput } from "../shared";
import ReCAPTCHA from "react-google-recaptcha";
import { registrationType, setRegistrationType } from "../../services/registration-type.signal";
import { changeRecaptcha, changeVoucher, registerFormData } from "../../services/register-form-data.signal";

const Voucher: FunctionalComponent = () => {
    const navigate = useNavigate();
    const { type } = useParams();

    useEffect(() => {
        if (!type || !(type === 'korso' || type === 'gyuru' || type === 'vendeg' || type === 'hok')) {
            navigate('/');
        }
        else {
            setRegistrationType(type);
        }
    }, []);

    const onRecaptchaChange = () => {
        changeRecaptcha(true);
    }

    const onRecaptchaExpired = () => {
        changeRecaptcha(false);
    }

    const onRegisterClick = () => {
        navigate('/register/' + registrationType.value);
    }

    return (
        <>
            <HeroImage type={registrationType.value} />
            <form class='register'>
                <Title type={registrationType.value} />
                <VoucherInput value={registerFormData.value.voucher} onInput={changeVoucher} />
                <div class='form-control recaptcha-container' >
                    <ReCAPTCHA 
                        sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                        badge='inline'
                        onChange={onRecaptchaChange}
                        onExpired={onRecaptchaExpired}
                    />
                </div>
                <Button label='continue' onClick={onRegisterClick}/>
            </form>
        </>
    );
}

export default Voucher;