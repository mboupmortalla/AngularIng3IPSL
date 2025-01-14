import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeRestoComponent } from './commande-resto.component';

describe('CommandeRestoComponent', () => {
  let component: CommandeRestoComponent;
  let fixture: ComponentFixture<CommandeRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandeRestoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandeRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
