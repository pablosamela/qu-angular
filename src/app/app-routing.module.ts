import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsListComponent } from './controllers/planets/planets-list.component';
import { PeopleListComponent } from './controllers/people/people-list.component';
import { FilmsListComponent } from './controllers/films/films-list.component';
import { SpeciesListComponent } from './controllers/species/species-list.component';
import { VehicleListComponent } from './controllers/vehicle/vehicle-list.component';
import { StarshipListComponent } from './controllers/starship/starship-list.component';


const routes: Routes = [
  { path: '', component: PlanetsListComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'films', component: FilmsListComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'starships', component: StarshipListComponent },
  { path: 'vehicles', component: VehicleListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
