import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
    standalone: true,
    imports: [FormsModule, UpperCasePipe]
})
export class HeroesComponent {
  heroes = HEROES;
}
