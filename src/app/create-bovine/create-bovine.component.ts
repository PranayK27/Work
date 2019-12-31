import { BovineService } from '../bovine-service.service';
import { Bovine } from '../bovine';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bovine',
  templateUrl: './create-bovine.component.html',
  styleUrls: ['./create-bovine.component.css']
})
export class CreateBovineComponent implements OnInit {

  bovine: Bovine = new Bovine();
  submitted = false;

  constructor(private bovineService: BovineService,
              private router: Router) { }

  ngOnInit() {
  }

  newBovine(): void {
    this.submitted = false;
    this.bovine = new Bovine();
  }

  save() {
    this.bovineService.createBovine(this.bovine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bovine = new Bovine();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/bovine']);
  }
}
