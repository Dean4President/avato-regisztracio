import { FunctionalComponent } from "preact";
import { registrationType, setRegistrationType } from "../../services/registration-type.signal";
import { Button, CommonAcknowledge, CommonInput, HeroImage, HungarianLabel, HungarianTextarea, Title, VoucherInput } from "../shared";
import { useEffect } from "preact/hooks";
import { changeAlcohol, changeEmail, changeName, registerFormData } from "../../services/register-form-data.signal";

const VendegRegister: FunctionalComponent = () => {
    
    // Test purposes
    useEffect(() => {
        setRegistrationType('vendeg');
    }, []);

    const onRegisterClick = () => {
        console.log('Regisztrácio elküldve');
    }

    function changeAlcoholBase(arg0: boolean): import("preact").JSX.InputEventHandler<HTMLInputElement> | undefined {
        throw new Error("Function not implemented.");
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
                    <HungarianLabel title='Fogyaszt alkoholt a rendezvényen?' />
                    <br />
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name='alcohol' id="yes" value="yes" checked={registerFormData.value.alcohol} onClick={() => changeAlcohol(true)}/>
                        <label class="form-check-label" for="yes">Igen</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name='alcohol' id="no" value="no"  checked={!registerFormData.value.alcohol} onClick={() => changeAlcohol(false)}/>
                        <label class="form-check-label" for="no">Nem</label>
                    </div>
                </div>
                <HungarianTextarea title='Megjegyzés (Opcionális)' subtitle='Pl.: ha sörön kívül mást fogyasztana, kérjük itt jelezze' />
                <CommonAcknowledge />
                <Button label='register' onClick={onRegisterClick}/>
            </form>
        </>
    );
}

export default VendegRegister;