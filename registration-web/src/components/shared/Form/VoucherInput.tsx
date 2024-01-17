import { FunctionalComponent, JSX } from "preact";
import VoucherLabel from "../../Voucher/VoucherLabel/VoucherLabel";
import { registrationType } from "../../../services/registration-type.signal";

interface VoucherInputProps {
    value: string;
    disabled?: boolean;
    onInput?: ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
}

const VoucherInput: FunctionalComponent<VoucherInputProps> = ({value, onInput, disabled}) => {
    disabled = disabled ?? false;
    onInput = onInput ?? (() => {});
    
    return (    
        <div class='form-control'>
            <VoucherLabel type={registrationType.value} />
            <input class='form-control' type='text' value={value} disabled={disabled} onInput={onInput}/>
        </div>
    );
}

export default VoucherInput;