import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './controllers/shared/header/header.component';
import { NavBarComponent } from './controllers/shared/nav-bar/nav-bar.component';
import { PeopleListComponent } from './controllers/people/people-list.component';
import { PlanetsListComponent } from './controllers/planets/planets-list.component';
import { FilmsListComponent } from './controllers/films/films-list.component';
import { SpeciesListComponent } from './controllers/species/species-list.component';
import { StarshipListComponent } from './controllers/starship/starship-list.component';
import { VehicleListComponent } from './controllers/vehicle/vehicle-list.component';

import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PlanetsListComponent,
    SortByPipe,
    HeaderComponent,
    FilmsListComponent,
    SpeciesListComponent,
    StarshipListComponent,
    VehicleListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
