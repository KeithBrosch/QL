import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
    animations: [
        trigger('fadeIn', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(1200, style({ opacity: 1 }))
            ])
        ])
    ]
})
export class CategoryComponent implements OnInit {

    title = "Fannie Mae | Reference Guide: ";

    category: string;

    getCategoryInfo(): void {
        this.category = this.route.snapshot.paramMap.get('category');
    }

    constructor(private route: ActivatedRoute) {
        this.getCategoryInfo();
      }

    ngOnInit() {
      
  }

}
