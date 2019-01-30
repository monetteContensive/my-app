import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-demo-test',
  templateUrl: './demo-test.component.html',
  styleUrls: ['./demo-test.component.scss']
})
export class DemoTestComponent implements OnInit {
  demo: Demo[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getDemo();
  }

  getDemo(): void {
    this.heroService.getDemo()
      .subscribe(demo => this.demo = demo);
  }

}
