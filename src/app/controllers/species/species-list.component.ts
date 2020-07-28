import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { Specie, speciesSortOptions } from 'src/app/models/specie';
import { ApiResponse } from 'src/app/models/api-response';
import { ApiUrl } from 'src/app/models/api-urls.enum';
import { SortSelection } from 'src/app/models/sort-selection';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html'
})
export class SpeciesListComponent implements OnInit {
  species$: Observable<ApiResponse<Specie[]>>;
  sortSelection: SortSelection;
  sortOptions = speciesSortOptions;
  
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.species$ = this.dataService.get<ApiResponse<Specie[]>>(ApiUrl.species);
      this.sortSelection = speciesSortOptions[0].value;
    });
  }

  onSortChange(selection: SortSelection) {
    this.sortSelection = selection;
  }
}
