import { Injectable } from '@angular/core';

@Injectable()
export class SharedServiceService {

    listeners = [];
    _text = '';

    onNameChange(fn) {
        this.listeners.push(fn);
        this.listeners.forEach((fn) => {
            fn(this._text);
        })
    }


    setText(value) {
        this._text = value;
        this.listeners.forEach((fn) => {
            fn(value)
        })
    }

}
