import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
export class SidenavService {
  private readonly sidenavStorage = 'sidenav';
  private readonly widthSubject = new BehaviorSubject<number>(window.innerWidth);
  private readonly sidenavSubject = new BehaviorSubject<MatSidenav>(null);

  private onClose: Subscription;
  private onOpen: Subscription;
  private onNext: Subscription;

  private sidenav: MatSidenav;

  get width() {
    return this.widthSubject.asObservable();
  }

  setWidth(width: number) {
    this.widthSubject.next(width);
  }

  get isLessLarge() {
    return this.widthSubject.getValue() < 1350;
  }

  get isBiggerMiddle() {
    return this.widthSubject.getValue() >= 950;
  }

  setSidenav(sidenav: MatSidenav) {
    if (typeof this.onOpen !== 'undefined') {
      this.onOpen.unsubscribe();
    }
    if (typeof this.onClose !== 'undefined') {
      this.onClose.unsubscribe();
    }
    if (typeof this.onNext !== 'undefined') {
      this.onNext.unsubscribe();
    }

    this.sidenav = sidenav;
    this.sidenavSubject.next(this.sidenav);
    this.onNext = this.sidenavSubject.subscribe(s => {
      if (typeof s !== 'undefined' && s !== null) {
        this.onClose = s
          .closedStart
          .subscribe(() => {
            localStorage.setItem(this.sidenavStorage, '0');
          });
        this.onOpen = s
          .openedStart
          .subscribe(() => {
            localStorage.setItem(this.sidenavStorage, '1');
          });
        const sidenavState = localStorage.getItem(this.sidenavStorage);
        if (sidenavState !== null && sidenavState === '1') {
          s.open();
        }
      }
    });
  }

  toggle() {
    if (this.isValid) {
      this.sidenav.toggle();
    }
  }

  close() {
    if (this.isValid) {
      this.sidenav.close();
    }
  }

  open() {
    if (this.isValid) {
      this.sidenav.open();
    }
  }

  private get isValid() {
    return typeof this.sidenav !== 'undefined' &&
      this.sidenav !== null;
  }
}
