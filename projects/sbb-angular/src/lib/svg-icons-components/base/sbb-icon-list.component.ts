import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-list',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 24h24V0H0z"/><path fill="#666" d="M4 7h16V6H4zM4 19h16v-1H4zM4 15h16v-1H4zM4 11h16V9.999H4z"/></g></svg>',
  styles: []
})
export class IconListComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
