import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipe: Recipe = new Recipe();
  recipelist = [];
  constructor() {}

  ngOnInit() {
    this.recipelist = this.recipe.recipes;
  }
}
