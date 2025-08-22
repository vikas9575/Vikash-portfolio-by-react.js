import { twMerge } from 'tailwind-merge';
import {clsx} from 'clsx';

export const cn = (...Inputs) => {
    return twMerge(clsx(Inputs));
}