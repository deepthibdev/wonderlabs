import {AppService} from "./app.service";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {Page, User} from "../User";

let httpClientSpy: { get: jasmine.Spy };
// @ts-ignore
let appService: AppService;

describe('AppService', () => {
  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    appService = new AppService(httpClientSpy as any);
  });

  it('should return expected Page (HttpClient called once)', () => {
    const expectedHPage: Page =
      {data: [], page: 2, total_pages: 2};

    httpClientSpy.get.and.returnValue(of(expectedHPage));

    appService.getUsersRequest(1).subscribe(
      users => expect(users).toEqual(expectedHPage, 'expected page'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

// it('should return an error when the server returns a 404', () => {
//   const errorResponse = new HttpErrorResponse({
//     error: 'test 404 error',
//     status: 404, statusText: 'Not Found'
//   });
//
//   httpClientSpy.get.and.returnValue(of(errorResponse));
//
//   appService.getUsersRequest(1).subscribe(
//     users => fail('expected an error, not page'),
//     error  => expect(error.message).toContain('test 404 error')
//   );
//   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
// });

});
