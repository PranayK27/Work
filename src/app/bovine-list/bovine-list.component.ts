import { BovineDetailsComponent } from '../bovine-details/bovine-details.component';
import { Observable } from 'rxjs';
import { BovineService } from '../bovine-service.service';
import { Bovine } from '../bovine';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bovine-list',
  templateUrl: './bovine-list.component.html',
  styleUrls: ['./bovine-list.component.css']
})
export class BovineListComponent implements OnInit {
  bovine: Observable<Bovine[]>;

  constructor(private bovineService: BovineService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bovine = this.bovineService.getBovinesList();
  }

  deleteBovine(id: number) {
    this.bovineService.deleteBovine(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bovineDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateBovine(id: number) {
    this.router.navigate(['update', id]);
  }
}
