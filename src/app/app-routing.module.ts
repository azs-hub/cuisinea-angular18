import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@/page-not-found/page-not-found.component';
import { HomeViewComponent } from '@/home/home-view.component'

const routes: Routes = [
  {
    path: 'home',
    title: 'Home Page',
  component: HomeViewComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {  path: 'recipes',
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
