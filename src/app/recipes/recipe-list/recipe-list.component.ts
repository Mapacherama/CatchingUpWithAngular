import { Recipe } from '../../shared/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Gut-Stuffers', 'This is a test', 'https://i.redd.it/ti1v42gndzhy.png'),
    new Recipe('Gut-Stuffers', 'This is a test', 'https://i.redd.it/ti1v42gndzhy.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
