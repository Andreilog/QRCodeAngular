import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlListModule } from './url-list/url-list.module';

const routes: Routes = [
  { path: 'urls', loadChildren: './url-list/url-list.module' }, // delay loading "url-list.module" module
  { path: '**', redirectTo: 'urls' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UrlListModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
