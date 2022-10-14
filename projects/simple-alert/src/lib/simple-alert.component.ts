import { SimpleAlertService } from './simple-alert.service';
import { Component, Input } from '@angular/core';
import { SimpleAlert } from './simple-alert';

@Component({
  selector: 'lib-simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.scss']
})
export class SimpleAlertComponent {

  message: string | null = null;
  type: string = 'info';
  fadeAfter: number = 4500;
  @Input() position: string = 'bottom-left';

  constructor (
    private _simpleAlertService: SimpleAlertService
  ) {
    this._simpleAlertService.message$.subscribe((messageDetails: SimpleAlert) => {
      if (messageDetails.message !== null) {
        this.type = messageDetails.type;
        this.fadeAfter = messageDetails.fadeAfter;
        this.showMessage(messageDetails.message);
      }
    });
  }

  showMessage (message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = null;
    }, this.fadeAfter);
  }

}
