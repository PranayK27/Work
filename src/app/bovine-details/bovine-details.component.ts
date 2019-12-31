import { Bovine } from '../bovine';
import { Component, OnInit, Input } from '@angular/core';
import { BovineService } from '../bovine-service.service';
import { BovineListComponent } from '../bovine-list/bovine-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bovine-details',
  templateUrl: './bovine-details.component.html',
  styleUrls: ['./bovine-details.component.css']
})
export class BovineDetailsComponent implements OnInit {

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
        console.log(data),
        this.bovine = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['/bovine']);
  }
}
