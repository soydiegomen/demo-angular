import { TestBed } from '@angular/core/testing';
import { HomeService, MyData } from './home.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HomeService', () => {
  let service: HomeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
 
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getData should return expected data', (done) => {
    const expectedData: MyData[] = [
      { 'name': 'one' },
      { 'name': 'two' },
      { 'name': 'three' },
    ];
 
    service.getData().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
 
    const testRequest = httpTestingController.expectOne('http://localhost:9999/data');
 
    testRequest.flush(expectedData);
  });

  //Estoy revisando estas pruebas https://www.testim.io/blog/testing-angular-services/
});
