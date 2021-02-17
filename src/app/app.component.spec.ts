import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {of} from "rxjs";
import {AppService} from "./services/app.service";
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {
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
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
