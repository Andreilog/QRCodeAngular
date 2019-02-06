import { Component, OnInit, Input } from '@angular/core';
import { UrlListService } from 'src/app/services/url-list.service';
import { UrlItemModel } from 'src/app/models/urlItem.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-url-item',
  templateUrl: './url-item.component.html',
  styleUrls: ['./url-item.component.scss']
})
export class UrlItemComponent implements OnInit {

  private title = '';
  urlItem: UrlItemModel = { title: '', url: '' };

  public qrUrl = '';

  constructor(
    private service: UrlListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => {
        this.title = params.title;

        this.service.getByTitle(this.title).subscribe( item => {
          this.urlItem = item;
          this.qrUrl = `${this.service.url}/${this.title}`;
        });
      }
    );

  }

  goBack() {
    this.router.navigate(['/']);
  }
}
