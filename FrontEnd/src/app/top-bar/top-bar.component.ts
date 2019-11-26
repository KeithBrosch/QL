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
        ]),
        trigger('slideInDown', [
            transition(':enter', [
                style({ transform: 'translateY(-100%)', }),
                animate('500ms ease-in', style({ transform: 'translateY(0%)' }))
            ])
        ]),
        trigger('slideInDownSlower', [
            transition(':enter', [
                style({ transform: 'translateY(-300%)', }),
                animate('800ms ease-in', style({ transform: 'translateY(0%)' }))
            ])
        ]),
        trigger('slideInDownSlowest', [
            transition(':enter', [
                style({ transform: 'translateY(-300%)', }),
                animate('1100ms ease-in', style({ transform: 'translateY(0%)' }))
            ])
        ])
    ]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
