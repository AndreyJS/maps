import { Injectable } from '@angular/core';

@Injectable()
export class MessageServiceService {

  constructor() { }

  toAdd(a, b) {
    alert(a + b);
  }
  toSub(a, b) {
    alert(a - b);
  }
}
