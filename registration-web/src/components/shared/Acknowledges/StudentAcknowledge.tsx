import { FunctionalComponent } from "preact";
import CommonAcknowledge from "./CommonAcknowledge";
import { changeCancellationAcknowledge, changePaymentAcknowledge, registerFormData } from "../../../services/register-form-data.signal";

const StudentAcknowledge: FunctionalComponent = () => {

    return (
        <>
            <div class='checkbox-margin form-control form-group form-check'>
                <input class='form-check-input' type='checkbox' checked={registerFormData.value.acknowledgements.payment} onClick={changePaymentAcknowledge}/>
                <label class='form-check-label'>
                    A regisztrációmmal jelentkezem a NIK HÖK által szervezett NIK Korsó- és Gyűrűavató Szakest (2023.10.27.) elnevezésű rendezvényre és vállalom a 7000 Ft belépődíj megfizetését a Neptun rendszeren keresztül.<br/>
                    <i>I agree that by registering for the NIK Pint and Ring Dedication Evening (2023.10.27.) organized by NIK HÖK, I undertake to pay the entrance fee of 7000 HUF through the Neptun system.</i>
                </label>
                </div>
            <div class='checkbox-margin form-control form-group form-check'>
                <input class='form-check-input' type='checkbox' checked={registerFormData.value.acknowledgements.cancellation} onClick={changeCancellationAcknowledge}/>
                <label class='form-check-label'>
                    A regisztrációmmal elfogadom, hogy azt 2023.10.06. 12:00 óráig mondhatom le következmények nélkül. A jelzett határidőkön túli lemondás esetén a belépődíj kiírásra kerül, amit meg kell fizetnem.<br/>
                    <i>By registering, I agree that I may cancel my registration until 2023.10.06 12:00 without consequences. In the event of cancellation after the indicated deadlines, the entry fee will be charged and I will be required to pay it.</i>
                </label>
            </div>
            <CommonAcknowledge />
        </>
    );
}

export default StudentAcknowledge;