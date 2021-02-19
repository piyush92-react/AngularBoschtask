import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  items = [
    {
      isSelect: false,
      name: 'Presentation',
      image: 'assets/images/premium.png',
      items: [
        'Description of Presentation'
      ]
    }, {
      isSelect: false,
      name: 'Video',
      image: 'assets/images/video.png',
      items: [
        'Description of Video'
      ]
    }, {
      isSelect: false,
      name: 'Icon',
      image: 'assets/images/icon.png',
      items: [
        'Description of Icon'
      ]
    }, {
      isSelect: false,
      name: 'Flyer',
      image: 'assets/images/icon.png',
      items: [
        'Description of Flyer'
      ]
    }, {
      isSelect: false,
      name: 'Mailer',
      image: 'assets/images/premium.png',
      items: [
        'Description of Video Mailer'
      ]
    }, {
      isSelect: false,
      name: 'Poster',
      image: 'assets/images/video.png',
      items: [
        'Description of poster'
      ]
    }, {
      isSelect: false,
      name: 'Catalogue',
      image: 'assets/images/icon.png',
      items: [
        'Description of Catalogue'
      ]
    }, {
      isSelect: false,
      name: 'Brochure',
      image: 'assets/images/premium.png',
      items: [
        'Description of Brochure'
      ]
    }, {
      isSelect: false,
      name: 'Flipbook',
      image: 'assets/images/video.png',
      items: [
        'Description of Flipbook'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  visibleIndex = -1;
  showSubItem(index: number) {
    if (this.visibleIndex === index) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = index;
    }
    this.items[index].isSelect = !this.items[index].isSelect;
  }

}
