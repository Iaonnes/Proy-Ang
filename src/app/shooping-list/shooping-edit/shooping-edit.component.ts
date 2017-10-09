import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {
@ViewChild('nameInput')  nameInputRef: ElementRef;
@ViewChild('amountInput')  amounInputRef: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amounInputRef.nativeElement.value;
    const newIngredient = new Ingredient (ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
