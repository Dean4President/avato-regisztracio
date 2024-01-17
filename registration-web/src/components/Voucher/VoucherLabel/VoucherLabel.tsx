import { FunctionComponent } from "preact";
import Label from "../../shared/Label/Label";
import { RegistrationType } from "../../../services/registration-type.signal";

interface VoucherLabelProps {
    type: RegistrationType;
}

const VoucherLabel: FunctionComponent<VoucherLabelProps> = ({ type }) => {
    
    const neptunLabelDOM = <Label hungarian='Neptun kód' english='Neptun code' />;

    const voucherLabelDOM = <Label hungarian='Meghívó' english='Voucher' />;

    switch (type) {
        case 'korso':
            return neptunLabelDOM;
            break;
        case 'gyuru':
            return neptunLabelDOM;
            break;
        case 'vendeg':
            return voucherLabelDOM;
            break;
        case 'hok':
            return voucherLabelDOM;
            break;
        default:
            return neptunLabelDOM;
            break;
    }
}

export default VoucherLabel;