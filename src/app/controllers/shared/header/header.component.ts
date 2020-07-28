import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  sortForm: FormGroup;
  @Input() sortOptions: any[];
  @Input() title: any[];

  @Output() sortChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.sortForm = new FormGroup({
      sortOption: new FormControl('Sort By')
   });
  }

  toggleSort() {
    this.sortChange.emit(JSON.parse(this.sortForm.get('sortOption').value));
  }

}
