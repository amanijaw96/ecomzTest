import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  sections = [
    {
      imageAlignment: 'right',
      textColor: 'red',
      class: 'image-right red-text',
    },
    {
      imageAlignment: 'left',
      textColor: 'red',
      class: 'image-left blue-text',
    },
  ];

  constructor() {}

  AddNewSection() {
    let newSection = {
      imageAlignment: 'left',
      textColor: 'red',
      class: 'image-left blue-text',
    };
    this.sections = [...this.sections, newSection];
  }

  onSectionChange(event) {
    let ref = this;
    let index = event.index;
    ref.sections = Object.assign([...ref.sections], {
      [index]: {
        ...ref.sections[index],
        [event.attribute]: event.value,
      },
    });
    ref.generateClass(ref.sections[index], index);
  }

  generateClass = (secttion, index) => {
    let ref = this;
    ref.sections = Object.assign([...ref.sections], {
      [index]: {
        ...ref.sections[index],
        class: `image-${secttion.imageAlignment} ${secttion.textColor}-text`,
      },
    });
  };

  onSectionDelete(event) {
    let index = event.index;
    this.sections = [
      ...this.sections.slice(0, index),
      ...this.sections.slice(index + 1),
    ];
  }
  ngOnInit(): void {}
}
