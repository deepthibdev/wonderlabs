import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../User';
import {AppService} from '../services/app.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  pageSize: number[] = [];
  users$: Observable<Page> | undefined;
  constructor(
    private appService: AppService,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.appService.userLists$?.pipe(
      tap(p => {
        this.pageSize = Array(p.total_pages).fill(0).map((x, i) => i + 1);
      })
    );
  }

}
