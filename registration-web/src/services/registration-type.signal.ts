import { Signal, signal } from "@preact/signals";

export type RegistrationType = 'korso' | 'gyuru' | 'vendeg' | 'hok';

export const registrationType: Signal<RegistrationType> = signal('korso');

export const setRegistrationType = (newRegistrationType: RegistrationType) => {
    registrationType.value = newRegistrationType;
}