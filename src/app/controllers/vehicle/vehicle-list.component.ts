import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { Vehicle, vehicleSortOptions } from 'src/app/models/vehicle';
import { ApiResponse } from 'src/app/models/api-response';
import { ApiUrl } from 'src/app/models/api-urls.enum';
import { SortSelection } from 'src/app/models/sort-selection';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent implements OnInit {

  planets$: Observable<ApiResponse<Vehicle[]>>;
  sortSelection: SortSelection;
  sortOptions = vehicleSortOptions;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.planets$ = this.dataService.get<ApiResponse<Vehicle[]>>(ApiUrl.vehicles);
      this.sortSelection = vehicleSortOptions[0].value;
    });
  }

  onSortChange(selection: SortSelection) {
    this.sortSelection = selection;
  }

}
