import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppContentLayoutComponent } from './layouts/content/content-layout.component';
import { CONTENT_ROUTES } from './shared/routers';


const routes: Routes = [
  {
    path: '',
    component: AppContentLayoutComponent,
    children: CONTENT_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
