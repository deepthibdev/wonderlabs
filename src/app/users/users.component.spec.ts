import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from '../services/app.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('User Component', () => {
  beforeEach(async () => {
    // Create a fake TwainService object with a `getQuote()` spy
    const appService = jasmine.createSpyObj('AppService', ['userListsPerPage$']);
    // Make the spy return a synchronous Observable with the test data
    const getQuoteSpy = appService.userListsPerPage$.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        UsersComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
