import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SimpleAlert } from './simple-alert';

@Injectable({
  providedIn: 'root'
})
export class SimpleAlertService {

  message$: Subject<SimpleAlert> = new Subject();

  showMessageBasedOnCode (statusCode: number, fadeAfter: number = 4500) {
    let messageData = {
      message: this.getErrorMessage(statusCode),
      type: 'error',
      fadeAfter: fadeAfter
    };

    this.message$.next(messageData);
  }

  showMessage (message: string, type: string = 'info', fadeAfter: number = 4500) {
    let messageData = {
      message: message,
      type: type,
      fadeAfter: fadeAfter
    };

    this.message$.next(messageData);
  }

  private getErrorMessage (statusCode: number) {
    switch (statusCode) {
      case 400:
        return 'This was a bad request. ';
      case 401:
        return 'Unauthorized, Make sure you entered the correct username and password';
      case 403:
        return 'Unauthorized, Make sure you entered the correct username and password'; 
      case 404:
        return 'The page that was requested could not be found';
      case 408:
        return 'Request took too long. Please try again';
      case 429:
        return 'You have attempted to login to many times. Please try again later';
      case 500:
        return 'There was an error with the server. Please try again later';
      case 504 :
        return 'Request took too long. Please try again';
      case 511:
        return 'Unauthorized, Make sure you entered the correct username and password'; 
      default:
        return 'There was an unexpected error. Please try again later';
    }
  }
}
