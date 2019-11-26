import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Fee {
    propertyPreservationType: string;
    name: string;
    comments: string;
}

const FEE_DATA: Fee[] = [
    { propertyPreservationType: 'Roof Repair', name: 'Tarping or patchwork', comments: 'Up to $400 for 10x20 sq ft area' },
    { propertyPreservationType: 'Boarding', name: 'Windows', comments: '75 UI or less $70, 76-100 UI $90, 101-125 UI $115 ' },
    { propertyPreservationType: 'Boarding', name: 'Slider door', comments: 'Up to $160' },
    { propertyPreservationType: 'Boarding', name: 'Security Door ', comments: 'Up to $250' },
    { propertyPreservationType: 'Boarding', name: 'Crawl Space', comments: 'Up to $60 ' },
    { propertyPreservationType: 'Lock Changes and Securing', name: 'Knoblock, Knob lock and Deadbolt ', comments: 'Up to $60 each ' },
    { propertyPreservationType: 'Lock Changes and Securing', name: 'Padlock, Padlock and hasp ', comments: 'Up to $40 each ' },
    { propertyPreservationType: 'Lock Changes and Securing', name: 'Slider lock ', comments: 'Up to $25 each ' },
    { propertyPreservationType: 'Lock Changes and Securing', name: 'Window lock ', comments: 'Up to $25 each ' },
    { propertyPreservationType: 'Hazards', name: 'Cleaning Refrigerator or Cleaning stand alone freeze', comments: 'Up to $100 each' },
    { propertyPreservationType: 'Hazards', name: 'Cleaning toilet', comments: 'Up to $75 each' },
    { propertyPreservationType: 'Hazards', name: 'Capping wires', comments: 'Up to $10 each' },
    { propertyPreservationType: 'Hazards', name: 'Capping gas/water', comments: 'Up to $50 each' },
    { propertyPreservationType: 'Hazards', name: 'Removing gas can(s) or Propane tank(s)', comments: 'Up to $15 each' },
    { propertyPreservationType: 'Swimming Pool', name: 'Secure pool', comments: 'Up to $400' },
    { propertyPreservationType: 'Lawn Maintenance', name: 'Initial Lawn Cut (up to 10,000 sq ft)', comments: 'Up to $100' },
    { propertyPreservationType: 'Lawn Maintenance', name: 'Initial Lawn Cut (up to 15,000 sq ft)', comments: 'Up to $150' },
    { propertyPreservationType: 'Lawn Maintenance', name: 'Regular Lawn Maintenance Cut (up to 10,000)', comments: 'Up to $80' },
    { propertyPreservationType: 'Lawn Maintenance', name: 'Snow Removal', comments: 'Up to $75 one time only if needed to secure property.' },
    { propertyPreservationType: 'Winterization', name: 'Regular Lawn Maintenance Cut (up to 15,000)', comments: 'Up to $100' },
    { propertyPreservationType: 'Winterization', name: 'Winterization/De-winterization', comments: 'Up to $200 for first unit and up to $80 per each additional unit.' },
    { propertyPreservationType: 'Other', name: 'Emergency funds', comments: 'Up to $500' },
    { propertyPreservationType: 'Other', name: 'Sump Pump', comments: 'Up to $300' },
    { propertyPreservationType: 'Other', name: 'Water/Gas/Electric/Unclassified utility', comments: 'Up to $75 for one time shutoff/transfer fee of each' },
    { propertyPreservationType: 'Other', name: 'Vacant Property Registration (VPR)', comments: 'Actual cost to register per local requirement' },
];


@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
    styleUrls: ['./matrix.component.css'],
    animations: [
        trigger('slideInLeft', [
            transition(':enter', [
                style({ transform: 'translateX(100%)', }),
                animate('800ms ease-in', style({ transform: 'translateX(0%)' }))
            ])
        ]),
    ]
})
export class MatrixComponent implements OnInit {

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    displayedColumns: string[] = ['Property Preservation Type', 'Fee Name', 'Comments'];
    dataSource = new MatTableDataSource(FEE_DATA);

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }


    step = -1;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

  constructor() { }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
  }

}
