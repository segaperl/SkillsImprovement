import { Component, OnInit, HostListener } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(readonly sidenavService: SidenavService) {
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sidenavService.setWidth(event.target.innerWidth);
  }
}
