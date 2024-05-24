import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdsListComponent } from './components/birds-list/birds-list.component';
import { BirdDetailsComponent } from './components/bird-details/bird-details.component';
import { EditBirdComponent } from './components/edit-bird/edit-bird.component';
import { AddBirdComponent } from './components/add-bird/add-bird.component';
import { authGuard } from '../auth.guard';


const birdRoutes: Routes = [
  { path: "birds/edit/:id", component: EditBirdComponent, canActivate: [authGuard]},
  { path: "birds/add", component: AddBirdComponent, canActivate: [authGuard] },
  { path: "birds/:id", component: BirdDetailsComponent, canActivate: [authGuard] },
  { path: "birds", component: BirdsListComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(birdRoutes)],
  exports: [RouterModule]
})
export class BirdRoutingModule { }
