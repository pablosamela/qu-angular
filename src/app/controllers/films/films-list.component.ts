import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Film, filmSortOptions } from 'src/app/models/film';
import { ApiUrl } from 'src/app/models/api-urls.enum';
import { DataService } from 'src/app/services/data.service';
import { ApiResponse } from 'src/app/models/api-response';
import { SortSelection } from 'src/app/models/sort-selection';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html'
})
export class FilmsListComponent implements OnInit {

  films$: Observable<ApiResponse<Film[]>>;
  sortSelection: SortSelection;
  sortOptions = filmSortOptions;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.films$ = this.dataService.get<ApiResponse<Film[]>>(ApiUrl.films);
      this.sortSelection = filmSortOptions[0].value;
    });
  }

  onSortChange(selection: SortSelection) {
    this.sortSelection = selection;
  }

}
