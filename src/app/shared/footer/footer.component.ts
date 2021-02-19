import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerList = [
    {
      "footerItem": "Terms of Use"
    },
    {
      "footerItem": "Legal Notice"
    },
    {
      "footerItem": "Privacy Statement"
    },
    {
      "footerItem": "Cookies"
    },
    {
      "footerItem": "Privacy Setting"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
