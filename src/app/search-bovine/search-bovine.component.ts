import { Component, OnInit } from '@angular/core';
import { Bovine } from '../bovine';
import { BovineService } from '../bovine-service.service';

@Component({
  selector: 'app-search-bovine',
  templateUrl: './search-bovine.component.html',
  styleUrls: ['./search-bovine.component.css']
})
export class SearchBovineComponent implements OnInit {

  id: number;
  bovine: Bovine[];

  constructor(private dataService: BovineService) { }

  ngOnInit() {
    // this.id = 0;
  }

  searchBovine() {
    this.dataService.getBovineById(this.id)
      .subscribe(bovine => this.bovine = bovine);
  }

  onSubmit() {
    this.searchBovine();
  }
}
