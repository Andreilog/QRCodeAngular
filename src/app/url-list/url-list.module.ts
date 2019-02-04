import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlItemsComponent } from './url-items/url-items.component';
import { UrlItemComponent } from './url-item/url-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UrlItemsComponent, pathMatch: 'full' },
  { path: ':name', component: UrlItemComponent  },
];

@NgModule({
  declarations: [UrlItemsComponent, UrlItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UrlListModule { }
