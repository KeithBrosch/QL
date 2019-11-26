import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    animations: [
        trigger('fadeIn', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(700, style({ opacity: 1 }))
            ])
        ])
    ]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
