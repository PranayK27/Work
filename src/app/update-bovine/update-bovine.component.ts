import { Bovine } from './../bovine';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BovineService } from '../bovine-service.service';

@Component({
  selector: 'app-update-bovine',
  templateUrl: './update-bovine.component.html',
  styleUrls: ['./update-bovine.component.css']
})
export class UpdateBovineComponent implements OnInit {

  id: number;
  bovine: Bovine;

  constructor(private route: ActivatedRoute, private router: Router,
              private bovineService: BovineService) { }

  ngOnInit() {
    this.bovine = new Bovine();

    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];

    this.bovineService.getBovine(this.id)
      .subscribe(data => {
        console.log(data);
        this.bovine = data;
      }, error => console.log(error));
  }

  updateBovine() {
    this.bovineService.updateBovine(this.id, this.bovine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bovine = new Bovine();
    this.gotoList();
  }

  onSubmit() {
    this.updateBovine();
  }

  gotoList() {
    this.router.navigate(['/bovine']);
  }
}
