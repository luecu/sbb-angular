import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-hiking',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke-miterlimit="10" d="M9.5 28.5v-17h12V16c0 5.375 2.5 14.5 8 14.5h5a6 6 0 0 1 6 6h-17c-2.625 0-4.875-1-8-1h-7v-7a7 7 0 0 1 7 7m-6-20h12m1.5 4h-4" vector-effect="non-scaling-stroke"/><path fill="none" stroke-miterlimit="10" d="M40.5 36.5v3h-17v-1c-2.625 0-4.875-1-8-1v2h-8v-4h1m15.5-13h-4m5 3h-4" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhHikingComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
