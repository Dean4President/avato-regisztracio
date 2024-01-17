import { JSX } from 'preact';
import { Signal, signal } from "@preact/signals";

export enum SetSignalActionType {
    CHANGE_VOUCHER = 'CHANGE_VOUCHER',
    CHANGE_NAME = 'CHANGE_NAME',
    CHANGE_EMAIL = 'CHANGE_EMAIL',
    CHANGE_PHONE_NUMBER = 'CHANGE_PHONE_NUMBER',
    CHANGE_ALCOHOL = 'CHANGE_ALCOHOL',
    CHANGE_COMMENT = 'CHANGE_COMMENT',
    CHANGE_PAYMENT = 'CHANGE_PAYMENT',
    CHANGE_CANCELLATION = 'CHANGE_CANCELLATION',
    CHANGE_PRIVACY_POLICY = 'CHANGE_PRIVACY_POLICY',
    CHANGE_RECAPTCHA = 'CHANGE_RECAPTCHA',
}

export type SetSignalAction = {
    type: SetSignalActionType.CHANGE_VOUCHER,
    item: string,
} | {
    type: SetSignalActionType.CHANGE_NAME,
    item: string,
} | {
    type: SetSignalActionType.CHANGE_EMAIL,
    item: string,
} | {
    type: SetSignalActionType.CHANGE_PHONE_NUMBER,
    item: string,
} | {
    type: SetSignalActionType.CHANGE_ALCOHOL,
    item: boolean,
} | {
    type: SetSignalActionType.CHANGE_COMMENT,
    item: string,
} | {
    type: SetSignalActionType.CHANGE_PAYMENT,
    item: boolean,
} | {
    type: SetSignalActionType.CHANGE_CANCELLATION,
    item: boolean,
} | {
    type: SetSignalActionType.CHANGE_PRIVACY_POLICY,
    item: boolean,
} | {
    type: SetSignalActionType.CHANGE_RECAPTCHA,
    item: boolean,
}

export type Acknowledgements = {
    payment: boolean;
    cancellation: boolean;
    privacyPolicy: boolean;
}
export type RegisterFormData = {
    voucher: string;
    name: string;
    email: string;
    phoneNumber: string;
    alcohol: boolean;
    comment: string;
    acknowledgements: Acknowledgements;
    recaptcha: boolean;
}
const initialRegisterFormData: RegisterFormData = {
    voucher: '',
    name: '',
    email: '',
    phoneNumber: '',
    alcohol: false,
    comment: '',
    acknowledgements: {
        payment: false,
        cancellation: false,
        privacyPolicy: false,
    },
    recaptcha: false,

}
export const registerFormData: Signal<RegisterFormData> = signal(initialRegisterFormData);

const setRegisterFormData = (action: SetSignalAction) => {
    switch (action.type) {
        case SetSignalActionType.CHANGE_VOUCHER:
            registerFormData.value = {
                ...registerFormData.value,
                voucher: action.item,
            }
            break;
        case SetSignalActionType.CHANGE_NAME:
            registerFormData.value = {
                ...registerFormData.value,
                name: action.item,
            }
            break;
        case SetSignalActionType.CHANGE_EMAIL:
            registerFormData.value = {
                ...registerFormData.value,
                email: action.item,
            }
            break;
        case SetSignalActionType.CHANGE_PHONE_NUMBER:
            registerFormData.value = {
                ...registerFormData.value,
                phoneNumber: action.item,
            }
            break;
        case SetSignalActionType.CHANGE_ALCOHOL:
            registerFormData.value = {
                ...registerFormData.value,
                alcohol: action.item,
            }
            break;
        case SetSignalActionType.CHANGE_COMMENT:
            registerFormData.value = {
                ...registerFormData.value,
                comment: action.item,
            }
            break;
        case SetSignalActionType.CHANGE_PAYMENT:
            registerFormData.value = {
                ...registerFormData.value,
                acknowledgements: {
                    ...registerFormData.value.acknowledgements,
                    payment: action.item,
                }
            }
            break;
        case SetSignalActionType.CHANGE_CANCELLATION:
            registerFormData.value = {
                ...registerFormData.value,
                acknowledgements: {
                    ...registerFormData.value.acknowledgements,
                    cancellation: action.item,
                }
            }
            break;
        case SetSignalActionType.CHANGE_PRIVACY_POLICY:
            registerFormData.value = {
                ...registerFormData.value,
                acknowledgements: {
                    ...registerFormData.value.acknowledgements,
                    privacyPolicy: action.item,
                }
            }
            break;
        case SetSignalActionType.CHANGE_RECAPTCHA:
            registerFormData.value = {
                ...registerFormData.value,
                recaptcha: action.item,
            }
            break;
        default:
            break;
    }
    console.log(registerFormData.value);
}
export const changeVoucher = ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_VOUCHER, item: currentTarget.value });
}
export const changeName = ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_NAME, item: currentTarget.value });
}
export const changeEmail = ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_EMAIL, item: currentTarget.value });
}
export const changePhoneNumber = ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_PHONE_NUMBER, item: currentTarget.value });
}
export const changeAlcohol = (alcohol: boolean) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_ALCOHOL, item: alcohol });
}
export const changeComment = ({currentTarget}: JSX.TargetedEvent<HTMLTextAreaElement, Event>) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_COMMENT, item: currentTarget.value });
}
export const changePaymentAcknowledge = ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_PAYMENT, item: currentTarget.checked });
}
export const changeCancellationAcknowledge = ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_CANCELLATION, item: currentTarget.checked });
}
export const changePrivacyPolicyAcknowledge = ({currentTarget}: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_PRIVACY_POLICY, item: currentTarget.checked });
}
export const changeRecaptcha = (recaptcha: boolean) => {
    setRegisterFormData({ type: SetSignalActionType.CHANGE_RECAPTCHA, item: recaptcha });
}
