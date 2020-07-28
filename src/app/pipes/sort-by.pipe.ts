import { Pipe, PipeTransform } from '@angular/core';

import { SortSelection } from '../models/sort-selection';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(listToSort: any[], sortSelection: SortSelection): any[] {

    let orderedList = [];

    if (listToSort && sortSelection) {

      if (listToSort.length <= 1) {
        orderedList = listToSort;
      }

      let compareFunction = compare(sortSelection.column)
      if (sortSelection.type === 'int') {
        compareFunction = compareInt(sortSelection.column);
      }
      if (sortSelection.type === 'date') {
        compareFunction = compareDate(sortSelection.column);
      }

      if (sortSelection.direction === 'asc') {
        orderedList = listToSort.sort(compareFunction);
      } else {
        orderedList = listToSort.sort(compareFunction).reverse();
      }
    }
    return orderedList;
  }

}

function compare(column: string) {
  return (a: any, b: any) => (a[column] < b[column]) ? -1 : (a[column] > b[column]) ? 1 : 0;
}

function compareInt(column: string) {
  return (a: any, b: any) => (parseInt(a[column]) < parseInt(b[column])) ? -1 : (parseInt(a[column]) > parseInt(b[column])) ? 1 : 0;
}

function compareDate(column: string) {
  return (a: any, b: any) => {
    const c = new Date(a[column]).getTime();
    const d = new Date(b[column]).getTime();

    return (c < d) ? -1 : (c > d) ? 1 : 0;
  }
}
