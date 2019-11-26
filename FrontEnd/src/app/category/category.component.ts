import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    category: string;

    getCategory(): string {
        return this.route.snapshot.paramMap.get('category');
    }

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.category = this.getCategory();
        console.log(this.route.snapshot.paramMap);
  }

}
