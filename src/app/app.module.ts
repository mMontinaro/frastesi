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
import { HttpClientModule } from '@angular/common/http';
import { MacchineTableComponent } from './macchine/macchine-table/macchine-table.component';
import { CasiTableComponent } from './casi/casi-table/casi-table.component';
import { MacchineCasiTableComponent } from './macchine-casi-table/macchine-casi-table.component';
import { FormsModule } from '@angular/forms';
import { CostiComponent } from './costi/costi.component';
import { CostiTableComponent } from './costi/costi-table/costi-table.component';
import { UsageMetricComponent } from './usage-metric/usage-metric.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BucketS3Component } from './bucket-s3/bucket-s3.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,
    CasiComponent,
    MacchineComponent,
    MacchineTableComponent,
    CasiTableComponent,
    MacchineCasiTableComponent,
    CostiComponent,
    CostiTableComponent,
    UsageMetricComponent,
    BucketS3Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
