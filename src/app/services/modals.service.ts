import {Injectable, EventEmitter} from '@angular/core';


@Injectable()
export class ModalsService {

  modalOpened: EventEmitter<any> = new EventEmitter();

}
