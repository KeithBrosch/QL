import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    text: string;
    url: string;
    opacity: number;
}

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
    styleUrls: ['./grid-list.component.css'],
    animations: [
        trigger('slideInLeft', [
            transition(':enter', [
                style({ transform: 'translateX(100%)'}),
                animate('700ms ease-in', style({ transform: 'translateX(0%)'}))
            ])
        ]),
        trigger('slideInRight', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)'}),
                animate('700ms ease-in', style({ transform: 'translateX(0%)'}))
            ])
        ]),
    ]
})
export class GridListComponent implements OnInit {

    tiles: Tile[] = [
        { text: 'Lock Changes and Securing', cols: 3, rows: 1, color: '#b5121b', url: "Lock-Changes-And-Securing", opacity: 0.8 },
        { text: 'Boarding', cols: 1, rows: 2, color: '#b5121b', url: "Boarding", opacity: 0.7 },
        { text: 'Roof Repair', cols: 1, rows: 1, color: '#b5121b', url: "Roof-Repair", opacity: 0.6 },
        { text: 'Hazards', cols: 2, rows: 1, color: '#b5121b', url: "Hazards", opacity: 0.5 }
    ];

    tiles2: Tile[] = [
        { text: 'Other', cols: 1, rows: 2, color: '#0c4569', url: "Other", opacity: 0.7 },
        { text: 'Lawn Maintenance', cols: 2, rows: 1, color: '#0c4569', url: "Lawn-Maintenance", opacity: 0.5 },
        { text: 'Swimming Pool', cols: 1, rows: 1, color: '#0c4569', url: "Swimming Pools", opacity: 0.6 },
        { text: 'Winterization', cols: 3, rows: 1, color: '#0c4569', url: "Winterization", opacity: 0.8 }
    ];

  constructor() { }

  ngOnInit() {
  }

}
