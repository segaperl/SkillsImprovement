import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ToolbarSearchComponent } from './menu/toolbar-search/toolbar-search.component';
import { ClickOutsideDirective } from './menu/toolbar-search/click-outside.directive';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';
import { MobileClickOutsideDirective } from './menu/toolbar-search/mobile-click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarSearchComponent,
    ClickOutsideDirective,
    ToolbarComponent,
    MobileClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,


    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
