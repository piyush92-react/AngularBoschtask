import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  navList = [
    {
    "isActive": true,
    "title": "Design Factory"
    },
    {
      "isActive": false,
      "title": "Translation Services"
    },
    {
      "isActive": false,
      "title": "Survey Services"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

  navActive(index: any){
   this.navList.map(x => x.isActive = false)
   this.navList[index].isActive = true;
  }

}
