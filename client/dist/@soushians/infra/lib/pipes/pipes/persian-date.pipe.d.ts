import { PipeTransform } from '@angular/core';
export declare class PersianDatePipe implements PipeTransform {
    transform(value: Date | string, exponent: string): string;
}
