import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {
  hero$: Observable<Hero>;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); /* The JavaScript (+) operator converts the string to a number */
    this.hero$ = this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

}
