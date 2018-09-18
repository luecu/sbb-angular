import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-lh-family-excursions',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="13.497" cy="12.5" r="2" fill="none" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/><path fill="none" stroke-miterlimit="10" d="M11.497 37.5V40m4-2.499V40m-7-10.5l2-12h6l2 12" vector-effect="non-scaling-stroke"/><path fill="none" stroke-miterlimit="10" d="M17.497 37.5l-1-10h-6l-1 10z" vector-effect="non-scaling-stroke"/><circle cx="25.498" cy="12.5" r="2" fill="none" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/><path fill="none" stroke-miterlimit="10" d="M23.498 27.5V40m4-12.5V40m-6-10.5v-12h8v12m-8-2h8" vector-effect="non-scaling-stroke"/><circle cx="36.499" cy="20.5" r="2" fill="none" stroke-miterlimit="10" vector-effect="non-scaling-stroke"/><path fill="none" stroke-miterlimit="10" d="M34.499 32.5V40m4-7.5V40m-6-5.5l1-9h6l1 9m-7.78-2h7.557" vector-effect="non-scaling-stroke"/></svg>',
  styles: []
})
export class IconLhFamilyExcursionsComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
