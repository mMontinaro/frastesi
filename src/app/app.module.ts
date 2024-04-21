import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { CasiComponent } from './casi/casi.component';
import { MacchineComponent } from './macchine/macchine.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,
    CasiComponent,
    MacchineComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatButtonModule,
    FontAwesomeModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
