import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';

describe('Router', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: []
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  });

  it('shoul go to todos when nav ""', fakeAsync(() =>{
    // given
    // when
    router.navigate(['']);
    tick(50);
    // then
    expect(location.path()).toEqual('/todos')
  }));
  it('should go to todos/create when nav todos/create', fakeAsync(() => {
    router.navigate(['todos/create']);
    tick(50);
    expect('/todos/create').toEqual(location.path());
  }));
  it('should go to todos/1 when nav todos/1', fakeAsync(() => {
    router.navigate(['todos', 1]);
    tick(50);
    expect('/todos/1').toEqual(location.path());
  }));
  
});
