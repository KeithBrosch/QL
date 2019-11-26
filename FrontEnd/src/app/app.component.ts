import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('slideInLeft', [
            transition(':enter', [
                style({ transform: 'translateX(100%) translateY(-100%)', }),
                animate('700ms ease-in', style({ transform: 'translateX(0%) translateY(0%)' }))
            ])
        ]),
        trigger('slideInRight', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('700ms ease-in', style({ transform: 'translateX(0%)' }))
            ])
        ]),
    ]
})
export class AppComponent {
  title = 'FrontEnd';
}
