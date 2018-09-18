import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-play-button-big',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18"><path fill="#FFF" fill-rule="evenodd" d="M.116 2.753C.116.546 1.664-.335 3.56.777l11.09 6.5c1.902 1.116 1.864 2.87-.076 3.916l-10.94 5.89c-1.943 1.048-3.518.102-3.518-2.1V2.754z"/></svg>',
  styles: []
})
export class IconPlayButtonBigComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
