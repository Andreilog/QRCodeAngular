import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlListModule } from './url-list/url-list.module';

const routes: Routes = [
  { path: '', loadChildren: './url-list/url-list.module', pathMatch: 'full' },
  // { path: 'urls', loadChildren: './url-list/url-list.module', pathMatch: 'full' }, // delay loading "url-list.module" module
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UrlListModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
