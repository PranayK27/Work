import { SearchBovineComponent } from './search-bovine/search-bovine.component';
import { BovineDetailsComponent } from './bovine-details/bovine-details.component';
import { CreateBovineComponent } from './create-bovine/create-bovine.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BovineListComponent } from './bovine-list/bovine-list.component';
import { UpdateBovineComponent } from './update-bovine/update-bovine.component';

const routes: Routes = [
  { path: '', redirectTo: 'bovine', pathMatch: 'full' },
  { path: 'bovine', component: BovineListComponent },
  { path: 'add', component: CreateBovineComponent },
  { path: 'update/:id', component: UpdateBovineComponent },
  { path: 'details/:id', component: BovineDetailsComponent },
  { path: 'search', component: SearchBovineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
