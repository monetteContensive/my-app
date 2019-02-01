import { Component, OnInit } from '@angular/core';
import { Demo } from '../demo';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-demo-test',
  templateUrl: './demo-test.component.html',
  styleUrls: ['./demo-test.component.scss']
})
export class DemoTestComponent implements OnInit {
  demos: Demo[];
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getDemoList();
  }

  getDemoList(): void {
    this.heroService.getDemoList()
      .subscribe(demos => this.demos = demos);
  }

}
