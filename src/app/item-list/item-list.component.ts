import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../shared/interfaces/item';
import { ListServiceService } from '../shared/services/list-service.service';

import {MatDialog} from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  
  listArray: Subject<Item[]> = this.list.subjectArray;
  
  constructor(private list: ListServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItem(index: number){
    this.list.removeItem(index)
  }

  openDialog(item: Item, i: number) {
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: '700px',
      data: {
        item: item,
        indexNumber: i
      },
    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
