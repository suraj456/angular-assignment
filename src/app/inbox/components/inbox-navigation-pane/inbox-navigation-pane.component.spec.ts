import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxNavigationPaneComponent } from './inbox-navigation-pane.component';

describe('InboxNavigationPaneComponent', () => {
  let component: InboxNavigationPaneComponent;
  let fixture: ComponentFixture<InboxNavigationPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxNavigationPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxNavigationPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
