import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Item } from '../shared/interfaces/item';
import { ListServiceService } from '../shared/services/list-service.service';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() editItem: boolean;
  @Input() item: Item;
  @Input() indexNumber: number;

  // DI list-service
  constructor(private list: ListServiceService, private fb: FormBuilder, private el: ElementRef) { }

  form: FormGroup;

  ngOnInit(): void {

    // set input values equal to item @input() field values, if this.item == 
    if(this.item){
      console.log("this.item is true")
      this.form = this.fb.group({
        value: [this.item.value, []],
        desc:  [this.item.desc, []]
      })

    };
    if(!this.item){
      console.log("!this.item")
      this.form = this.fb.group({
        value: ['', []],
        desc:  ['', []]
      })
    }

  }

  addItem(){
    try {
      this.list.addToArray(this.currentForm());
      this.clearForm();
    }
    finally {
      const valueInput = this.el.nativeElement.querySelector('#value');
      valueInput.focus();
    }
  }

  currentForm(): Item{
    return {value: this.form.get("value").value, desc: this.form.get("desc").value};
  }

  modItem(index: number){
    // const tempItem: Item = {value: this.form.get("value").value, desc: this.form.get("desc").value};
    this.list.editItem(this.indexNumber, this.currentForm());
  }

  clearForm(){
    this.form.reset();
      this.form.get('value').clearValidators();
      this.form.get('value').updateValueAndValidity();
      this.form.get('desc').clearValidators();
      this.form.get('desc').updateValueAndValidity();
  
  }



  get value(){
    return this.form.get('value');
  }

  get desc(){
    return this.form.get('desc');
  }

}
