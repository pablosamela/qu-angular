import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { Starship, starshipSortOptions } from 'src/app/models/starship';
import { ApiResponse } from 'src/app/models/api-response';
import { ApiUrl } from 'src/app/models/api-urls.enum';
import { SortSelection } from 'src/app/models/sort-selection';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html'
})
export class StarshipListComponent implements OnInit {
  starships$: Observable<ApiResponse<Starship[]>>;
  sortSelection: SortSelection;
  sortOptions = starshipSortOptions;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.starships$ = this.dataService.get<ApiResponse<Starship[]>>(ApiUrl.starships);
      this.sortSelection = starshipSortOptions[0].value;
    });
  }

  onSortChange(selection: SortSelection) {
    this.sortSelection = selection;
  }


}
