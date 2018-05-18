import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarSearchComponent implements OnInit {
  isFocused = false;
  settingsAreActive = false;
  isMobileActive = false;

  constructor(private readonly sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onFocus() {
    this.isFocused = true;
    this.settingsAreActive = false;
  }

  onBlur() {
    this.isFocused = false;
    this.settingsAreActive = false;
  }

  showSettings() {
    this.settingsAreActive = true;
  }

  outsideClick(event: boolean) {
    this.settingsAreActive = event;
  }

  mobileOutsideClick(event: boolean) {
    this.isMobileActive = event;
    console.log(event);
  }

  showMobileSearch() {
    this.isMobileActive = true;
  }
}
