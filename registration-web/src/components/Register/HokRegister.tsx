import { FunctionalComponent } from "preact";
import { registrationType, setRegistrationType } from "../../services/registration-type.signal";
import { Button, CommonAcknowledge, CommonInput, HeroImage, HungarianLabel, HungarianTextarea, Title, VoucherInput } from "../shared";
import { useEffect } from "preact/hooks";
import { changeAlcohol, changeComment, changeEmail, changeName, registerFormData } from "../../services/register-form-data.signal";

const HokRegister: FunctionalComponent = () => {
    
    // Test purposes
    useEffect(() => {
        setRegistrationType('hok');
        changeAlcohol(true);
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
                <div class='form-control'>
                    <HungarianLabel title='Fogyasztasz alkoholt a rendezvényen?' />
                    <br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name='alcohol' id="yes" value="yes" checked={registerFormData.value.alcohol} onClick={() => changeAlcohol(true)}/>
                        <label class="form-check-label" for="yes">Igen</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name='alcohol' id="no" value="no" checked={!registerFormData.value.alcohol} onClick={() => changeAlcohol(true)}/>
                        <label class="form-check-label" for="no">Nem</label>
                    </div>
                </div>
                <HungarianTextarea
                    title='Megjegyzés (Opcionális)'
                    subtitle='Pl.: ha sörön kívül mást [alkoholt] innál, itt jelezd (Nyugi nem kövezünk meg ha mégis almalevet innál❤)'
                    onInput={changeComment}
                />
                <CommonAcknowledge />
                <Button label='register' onClick={onRegisterClick}/>
            </form>
        </>
    );
}

export default HokRegister;