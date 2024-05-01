import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CasiComponent } from './casi/casi.component';
import { MacchineComponent } from './macchine/macchine.component';
import { UsageMetricComponent } from './usage-metric/usage-metric.component';
import { BucketS3Component } from './bucket-s3/bucket-s3.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'casi', component: CasiComponent },
  { path: 'macchine', component: MacchineComponent },
  { path: 'metrics', component: UsageMetricComponent},
  { path: 'bucket-S3', component: BucketS3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
