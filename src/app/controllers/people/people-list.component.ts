import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { People, peopleSortOptions } from 'src/app/models/people';
import { ApiResponse } from 'src/app/models/api-response';
import { ApiUrl } from 'src/app/models/api-urls.enum';
import { SortSelection } from 'src/app/models/sort-selection';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  
  people$: Observable<ApiResponse<People[]>>;
  sortSelection: SortSelection;
  sortOptions = peopleSortOptions;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.people$ = this.dataService.get<ApiResponse<People[]>>(ApiUrl.people);
      this.sortSelection = peopleSortOptions[0].value;
    });
  }

  onSortChange(selection: SortSelection) {
    this.sortSelection = selection;
  }

}
