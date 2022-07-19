import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ListsComponent} from './lists/lists.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lists-component/:type', component: ListsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
