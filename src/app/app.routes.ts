import { Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

export const routes: Routes = [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListPageComponent },
      { path: 'details/:id', component: DetailsPageComponent },
      { path: '**', redirectTo: 'list' }
];
