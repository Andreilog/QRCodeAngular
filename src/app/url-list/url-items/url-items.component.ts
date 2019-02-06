import { Component, OnInit } from '@angular/core';
import { UrlListService } from 'src/app/services/url-list.service';
import { UrlItemModel } from 'src/app/models/urlItem.model';

const delegationSelector = '.enter-sensitive';

// tslint:disable-next-line:only-arrow-functions


@Component({
  selector: 'app-url-items',
  templateUrl: './url-items.component.html',
  styleUrls: ['./url-items.component.scss']
})
export class UrlItemsComponent implements OnInit {
  items: UrlItemModel[] = [];

  qrUrl = '';

  constructor(private service: UrlListService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data: UrlItemModel[]) => {
      this.items = data;
    });
  }

  onMouseOver(item: UrlItemModel) {
    this.qrUrl = `${this.service.url}/${item.title}`;
  }
}
