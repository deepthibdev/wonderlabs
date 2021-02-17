import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import {AppService} from '../services/app.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PaginationComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should initialize the selectedPage as 1`, () => {
    const fixture = TestBed.createComponent(PaginationComponent);
    const app = fixture.componentInstance;
    expect(app.selectedPage).toEqual(1);
  });

  it(`should update the page value and send value to service observable`, () => {
    const val = 2;
    const appService = TestBed.inject(AppService);
    const fixture = TestBed.createComponent(PaginationComponent);
    const app = fixture.componentInstance;
    app.selectPage(val);
    expect(app.selectedPage).toEqual(2);
    appService.userListsPerPage$.subscribe(d => {
      expect(d).toEqual(2);
    });
  });
});
