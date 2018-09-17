import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-nj',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><text font-size="16.038" transform="translate(3.285 15.591)">NJ</text></svg>',
  styles: []
})
export class IconProductNjComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
