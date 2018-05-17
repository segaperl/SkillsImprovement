import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarSearchComponent implements OnInit {
  isFocused = false;
  settingsAreActive = false;

  constructor() { }

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
}
