import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-trainformation-2-class',
  // tslint:disable-next-line:max-line-length
  template: '<svg [attr.class]="svgClass + commonClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#767676" d="M10.82 11.104c0-1.184.432-2.576 1.776-2.576.976 0 1.68.672 1.68 1.728-.016 1.376-1.36 2.064-2.352 2.736-1.936 1.312-3.52 2.416-3.536 5.008h8.224v-1.952h-5.296c.816-1.152 2.128-1.792 3.232-2.576s2-1.712 2-3.392c0-2.192-1.792-3.504-3.84-3.504-2.688 0-4.144 1.968-4.064 4.528h2.176z"/></svg>',
  styles: []
})
export class IconTrainformation2ClassComponent {
  constructor() { }

  @Input() svgClass = '';
  commonClass = ' ';
}
