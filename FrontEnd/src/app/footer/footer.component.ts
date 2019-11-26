import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    animations: [
        trigger('slideInUp', [
            transition(':enter', [
                style({ transform: 'translateY(100%) ', }),
                animate('700ms ease-in', style({ transform: 'translateY(0%)' }))
            ])
        ])
    ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
