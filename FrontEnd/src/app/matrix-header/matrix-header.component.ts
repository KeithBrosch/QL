import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-matrix-header',
  templateUrl: './matrix-header.component.html',
    styleUrls: ['./matrix-header.component.css'],
    animations: [
        trigger('slideInDown', [
            transition(':enter', [
                style({ transform: 'translateY(-100%) ', }),
                animate('700ms ease-in', style({ transform: 'translateY(0%)' }))
            ])
        ])
    ]
})
export class MatrixHeaderComponent implements OnInit {

    title = "Fannie Mae | Property Preservation Matrix";
    mobileTitle = "Fannie Mae | PPMatrix";

  constructor() { }

  ngOnInit() {
  }

}
