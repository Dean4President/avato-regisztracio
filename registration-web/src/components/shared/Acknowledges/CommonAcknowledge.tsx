import { FunctionalComponent } from "preact";
import { changePrivacyPolicyAcknowledge, registerFormData } from "../../../services/register-form-data.signal";

const CommonAcknowledge: FunctionalComponent = () => {

    return (
        <div class='checkbox-margin form-control form-group form-check'>
            <input class='form-check-input' type='checkbox'  checked={registerFormData.value.acknowledgements.privacyPolicy} onClick={changePrivacyPolicyAcknowledge}/>
            <label class='form-check-label'>
                Kijelentem, hogy az Óbudai Egyetem által rendelkezésemre bocsátott, az általa szervezett NIK Korsó- és Gyűrűavató Szakest rendezvényre vonatkozó <a href='https://korsoavato.nikhok.hu/obudai_egyetem_adatvedelmi_tajekoztato_korsoavato.pdf'>Adatkezelési tájékoztatót</a> megismertem.<br/>
                <i>I have read and agree to the <a href='https://korsoavato.nikhok.hu/obudai_egyetem_adatvedelmi_tajekoztato_korsoavato.pdf'>Privacy Policy</a> provided by Óbuda University regarding the NIK Pint and Ring Dedication Evening.</i>
            </label>
        </div>
    );
}

export default CommonAcknowledge;