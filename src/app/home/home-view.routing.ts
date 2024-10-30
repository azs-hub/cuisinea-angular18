import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from '@/home/home-view.component'

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    children: [
      {
        path: 'recipes',
        component: HomeViewComponent,
      },
      {
        path: 'recipe/:id',
        component: HomeViewComponent,
        children: [
          {
            path: 'category/:categoryId',
            component: HomeViewComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
