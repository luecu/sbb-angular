import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-tobogganing-winter-hiking',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke-miterlimit="10" d="M6 38.5h26.5c5.477 0 8-1.806 8-6.5M6 32.5h28m-24.5 0v6m7-6v6m7-6v6m7.001-6v6m10.5-20c-10.447 0-14.708 9-25.501 9a9 9 0 0 1 0-18c10.793 0 15.054 9 25.5 9zM13.5 9.721v5.315m4-5.428v5.428m-4 6.929v5.312m4-5.312v5.429M26.5 13v11M41 18.5H19.5" vector-effect="non-scaling-stroke"/><circle cx="15.5" cy="18.5" r="4" fill="none" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhTobogganingWinterHikingComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
