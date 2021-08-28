import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import{ListServiceService} from '../shared/services/list-service.service'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  total: Subject<number>;
  // runningTotal;

  constructor(private list: ListServiceService) { }

  ngOnInit(): void {
    this.total = this.list.total;
  }

}
