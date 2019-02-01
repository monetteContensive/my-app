import { Component, OnInit, Input } from '@angular/core';
import { Demo } from '../demo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-demo-detail',
  templateUrl: './demo-detail.component.html',
  styleUrls: ['./demo-detail.component.scss']
})
export class DemoDetailComponent implements OnInit {
   @Input() demo: Demo;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
     this.getDemo();
  }

  getDemo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getDemo(id)
      .subscribe(demo => this.demo = demo);
  }

}
