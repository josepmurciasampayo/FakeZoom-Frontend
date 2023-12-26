import { CallService } from './call/call.service';
import { Component } from '@angular/core';
import { decodeAndDownload, decodeFileAndAddInCollection } from './utils';
import { AppService } from './app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'fakezoom';
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  

}
