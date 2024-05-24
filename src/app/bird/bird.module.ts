import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdsListComponent } from './components/birds-list/birds-list.component';
import { BirdComponent } from './components/bird/bird.component';
import { BirdRoutingModule } from './bird-routing.module';
import { BorderCardDirective } from './border-card.directive';
import { BirdDetailsComponent } from './components/bird-details/bird-details.component';
import { ContinentPipeColourPipe } from './continent-pipe-colour.pipe';
import { EditBirdComponent } from './components/edit-bird/edit-bird.component';
import { FormsModule } from '@angular/forms';
import { BirdFormComponent } from './components/bird-form/bird-form.component';
import { AddBirdComponent } from './components/add-bird/add-bird.component';
import { SearchBirdComponent } from './components/search-bird/search-bird.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    BirdsListComponent,
    BirdComponent,
    BorderCardDirective,
    BirdDetailsComponent,
    ContinentPipeColourPipe,
    BirdFormComponent,
    EditBirdComponent,
    AddBirdComponent,
    SearchBirdComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BirdRoutingModule,
    FormsModule
  ]
})
export class BirdModule { }
