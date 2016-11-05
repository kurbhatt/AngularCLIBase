/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MyNewComponentComponent } from './my-new-component.component';

import { MyNewComponentComponent } from './my-new-component.component';

describe('MyNewComponentComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyNewComponentComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(MyNewComponentComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'my-new-component works!'`, async(() => {
    let fixture = TestBed.createComponent(MyNewComponentComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.hello).toEqual('my-new-component works!');
  }));

  it('should render title in a h4 tag', async(() => {
    let fixture = TestBed.createComponent(MyNewComponentComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('my-new-component works!');
  }));
});
