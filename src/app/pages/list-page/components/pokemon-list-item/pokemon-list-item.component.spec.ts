import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListItemComponent } from './pokemon-list-item.component';
import { Router } from '@angular/router';

describe('PokemonListItemComponent', () => {
      let component: PokemonListItemComponent;
      let fixture: ComponentFixture<PokemonListItemComponent>;

      let routerSpy: jasmine.SpyObj<Router>; //To test the redirect

      beforeEach(async () => {

            const spy = jasmine.createSpyObj('Router', ['navigate']);

            await TestBed.configureTestingModule({
                  imports: [PokemonListItemComponent],
                  providers: [{ provide: Router, useValue: spy }]
            }).compileComponents();

            routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

            fixture = TestBed.createComponent(PokemonListItemComponent);
            component = fixture.componentInstance;

            component.pokemon = {
                  id: '25',
                  name: 'pikachu',
                  sprite: '',
                  detailsUrl: ''
            };

            fixture.detectChanges();
      });

      it('should create', () => {
            expect(component).toBeTruthy();
      });

      it('Image error: should set imageError to true when onImageError() is called', () => {
            expect(component.imageError).toBeFalse();
            component.onImageError();
            expect(component.imageError).toBeTrue();
      });

      it('Redirect to details: should navigate to details page when navigateToDetails() is called', () => {
            component.navigateToDetails();
            expect(routerSpy.navigate).toHaveBeenCalledWith(['/details', '25']);
      });
});
