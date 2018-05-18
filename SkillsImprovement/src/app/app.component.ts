import { Component, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from './menu/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SidenavService]
})
export class AppComponent implements AfterViewInit {
  private readonly mobileQueryListener: () => void;

  @ViewChild('sidenav') sidenav: MatSidenav;

  mobileQuery: MediaQueryList;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef,
    readonly sidenavService: SidenavService,
    media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngAfterViewInit(): void {
    let init = false;
    this.sidenavService.width
      .subscribe(width => {
        if (width < 1350 && !init) {
          setTimeout(() => {
            this.sidenavService.setSidenav(this.sidenav);
          });
          init = true;
        } else {
          init = false;
        }
      });
  }
}
