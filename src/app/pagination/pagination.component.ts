import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {

  @Input()
  pageSize: number[] = [];
  selectedPage: number | undefined = 1;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  selectPage(val: number): void {
    this.selectedPage = val;
    this.appService.userListsPerPage$.next(val);
  }
}
