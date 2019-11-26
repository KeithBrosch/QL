import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    animations: [
        trigger('fadeIn', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(1200, style({ opacity: 1 }))
            ])
        ])
    ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
