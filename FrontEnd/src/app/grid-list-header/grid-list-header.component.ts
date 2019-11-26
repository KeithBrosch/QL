import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 


@Component({
  selector: 'app-grid-list-header',
  templateUrl: './grid-list-header.component.html',
    styleUrls: ['./grid-list-header.component.css'],
    animations: [
        trigger('slideInDown', [
            transition(':enter', [
                style({ transform: 'translateY(-100%) ', }),
                animate('700ms ease-in', style({ transform: 'translateX(0%)' }))
            ])
        ]),
    ]
})
export class GridListHeaderComponent implements OnInit {

    title = "Fannie Mae | Reference Guide";

  constructor() { }

  ngOnInit() {
  }

}
