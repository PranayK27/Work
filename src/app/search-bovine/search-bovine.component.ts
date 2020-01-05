import { Component, OnInit } from '@angular/core';
import { Bovine } from '../bovine';
import { BovineService } from '../bovine-service.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-bovine',
  templateUrl: './search-bovine.component.html',
  styleUrls: ['./search-bovine.component.css']
})
export class SearchBovineComponent implements OnInit {

  searchForm: FormGroup;
  searchCriteria: SearchBovinesForm;
  // id: number;
   bovine: Bovine[];

  constructor(private dataService: BovineService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      movedFrom: new FormControl(null, []),
      movedTo: new FormControl(null, []),
      thirdParty: new FormControl(null, []),
      tagNumber: new FormControl(null, []),
      healthCertNo: new FormControl(null, []),
      fromDate: new FormControl(null, []),
      toDate: new FormControl(null, []),
      provinceMovementSyastem: new FormControl(null, []),
    });
  }

// isFormInvalid() {
//     return false;
//   }

submitSearchForm(): void {
    const search: SearchBovinesForm = {
      movedFrom: this.searchForm.controls.movedFrom.value,
      movedTo: this.searchForm.controls.movedTo.value,
      thirdParty: this.searchForm.controls.thirdParty.value,
      tagNumber: this.searchForm.controls.tagNumber.value,
      healthCertNo: this.searchForm.controls.healthCertNo.value,
      fromDate: this.searchForm.controls.fromDate.value,
      toDate: this.searchForm.controls.toDate.value,
      provinceMovementSystem: this.searchForm.controls.provinceMovementSystem.value
    };
    this.searchCriteria = search;
  }

  searchBovine() {
    this.dataService.getBovineByTagNumber(this.searchForm.controls.tagNumber.value)
      .subscribe(bovine => this.bovine = bovine);
  }

  onSubmit() {
    //this.submitted = true;
    this.searchBovine();
  }
}
export class SearchBovinesForm {
  movedFrom: string;
  movedTo: string;
  thirdParty: string;
  tagNumber: string;
  healthCertNo: string;
  fromDate: Date;
  toDate: Date;
  provinceMovementSystem: string;
}

