import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { Planet, planetSortOptions } from 'src/app/models/planet';
import { ApiResponse } from 'src/app/models/api-response';
import { ApiUrl } from 'src/app/models/api-urls.enum';
import { SortSelection } from 'src/app/models/sort-selection';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html'
})
export class PlanetsListComponent implements OnInit {
  planets$: Observable<ApiResponse<Planet[]>>;
  sortSelection: SortSelection;
  sortOptions = planetSortOptions;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.planets$ = this.dataService.get<ApiResponse<Planet[]>>(ApiUrl.planets);
      this.sortSelection = planetSortOptions[0].value;
    });
  }

  onSortChange(selection: SortSelection) {
    this.sortSelection = selection;
  }

}
