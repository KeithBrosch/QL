import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface Tile{
    color: string;
    cols: number;
    rows: number;
    opacity: number;
    text: string;
    url: string;
}

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
    styleUrls: ['./grid-list.component.css'],
    animations: [
        trigger('slideInLeft', [
            transition(':enter', [
                style({ transform: 'translateX(100%) translateY(-100%)', }),
                animate('700ms ease-in', style({ transform: 'translateX(0%) translateY(0%)'}))
            ])
        ]),
        trigger('slideInRight', [
            transition(':enter', [
                style({ transform: 'translateX(-100%) translateY(100%)'}),
                animate('700ms ease-in', style({ transform: 'translateX(0%) translateY(0%)'}))
            ])
        ]),
            trigger('slideLeftText', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('800ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ])
        ]
})
export class GridListComponent implements OnInit {

    tiles: Tile[] = [
        {
            cols: 3,
            rows: 1,
            color: '#b5121b',
            opacity: 0.8,
            text: 'Lock Changes and Securing',
            url: "Lock-Changes-And-Securing"
        },
        {
            cols: 1,
            rows: 2,
            color: '#b5121b',
            opacity: 0.7,
            text: 'Boarding',
            url: "Boarding"
        },
        {
            cols: 1,
            rows: 1,
            color: '#b5121b',
            opacity: 0.6,
            text: 'Roof Repair', 
            url: "Roof-Repair"
        },
        {
            cols: 2,
            rows: 1,
            color: '#b5121b',
            opacity: 0.5,
            text: 'Hazards',
            url: "Hazards"
        }
    ];

    tiles2: Tile[] = [
        {
            cols: 1,
            rows: 2,
            color: '#0c4569',
            opacity: 0.7,
            text: 'Other',
            url: "Other"
        },
        {
            cols: 2,
            rows: 1,
            color: '#0c4569',
            opacity: 0.5,
            text: 'Lawn Maintenance',
            url: "Lawn-Maintenance"
        },
        {
            cols: 1,
            rows: 1,
            color: '#0c4569',
            opacity: 0.6,
            text: 'Swimming Pool',
            url: "Swimming-Pool",
        },
        {
            cols: 3,
            rows: 1,
            color: '#0c4569',
            opacity: 0.8,
            text: 'Winterization',
            url: "Winterization"
        }
    ];

  constructor() { }

    ngOnInit() {

  }
}
