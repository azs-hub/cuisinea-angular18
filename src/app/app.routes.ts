import { Routes } from '@angular/router';
import { HomeViewComponent } from '@/home/home-view.component'
import { PageNotFoundComponent } from '@/page-not-found/page-not-found.component'

export const routes: Routes = [{
  path: '',
  title: 'Home Page',
  component: HomeViewComponent, // this is the component with the <router-outlet> in the template
},
{
  path: 'recipes',
  component: HomeViewComponent,
  children: [
    {
      path: 'category/:categoryId',
      component: HomeViewComponent,
    },
  ],
},
{
  path: 'recipe/:id',
  component: HomeViewComponent,
},
{ path: '**', component: PageNotFoundComponent },
];
