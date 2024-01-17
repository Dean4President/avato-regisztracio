import { FunctionalComponent } from "preact";
import { registrationType, setRegistrationType } from "../../services/registration-type.signal";
import { Button, CommonInput, CommonTextarea, HeroImage, StudentAcknowledge, Title, VoucherInput } from "../shared";
import { useEffect } from "preact/hooks";
import { changeComment, changeEmail, changeName, changePhoneNumber, changeVoucher, registerFormData } from "../../services/register-form-data.signal";
import { register } from "module";

const GyuruRegister: FunctionalComponent = () => {
    
    // Test purposes
    useEffect(() => {
        setRegistrationType('gyuru');
    }, []);

    const onRegisterClick = () => {
        console.log('Regisztrácio elküldve');
    }

    return (
        <>
            <HeroImage type={registrationType.value} />
            <form class='register'>
                <Title type={registrationType.value} />
                <VoucherInput value={registerFormData.value.voucher} disabled />
                <CommonInput
                    inputType='text'
                    hungarianLabel='Név'
                    englishLabel='Name'
                    value={registerFormData.value.name}
                    onInput ={changeName}
                />
                <CommonInput
                    inputType='email'
                    hungarianLabel='Email cím'
                    englishLabel='Email address'
                    value={registerFormData.value.email}
                    onInput ={changeEmail}
                />
                <CommonInput
                    inputType='text'
                    hungarianLabel='Telefonszám'
                    englishLabel='Phone number'
                    value={registerFormData.value.phoneNumber}
                    onInput ={changePhoneNumber}
                />
                <CommonTextarea
                    hungarianLabel='Megjegyzés (Opcionális)'
                    englishLabel='Comment (Optional)'
                    value={registerFormData.value.comment}
                    onInput ={changeComment}
                    />
                <StudentAcknowledge />
                <Button label='register' onClick={onRegisterClick}/>
            </form>
        </>
    );
}

export default GyuruRegister;