import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../service/auth.service';

import { LoginComponent } from './login.component';
import { MockAuthService } from '../mocks/mock-auth-service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: MockAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    authService = new MockAuthService();
     component = fixture.componentInstance;
     fixture.detectChanges();
     component = new LoginComponent(authService); //using component instance at the end 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should return true when user is not authenticated', () => {
  
    authService.authenticated = false;

    expect(component.needsLogin()).toBeTruthy();
  });

  fit('should return false when user is authenticated', () => {
    
    console.log(component.needsLogin());

    console.log();
   
    authService.authenticated = true;
    
    expect(component.needsLogin()).toBeFalsy();
  });
  
});
