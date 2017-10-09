import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('Zanahorias',5),
  new Ingredient('Papa',4),
  new Ingredient('Calabaza',6),
  new Ingredient('chayote',2)
];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdd(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
