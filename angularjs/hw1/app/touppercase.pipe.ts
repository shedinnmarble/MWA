import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'xdwToUpperCase' })
export class XDWToUpperCase implements PipeTransform {
    transform(text: string) {
        return text.toUpperCase()+"XDW";
    }
}