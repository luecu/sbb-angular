/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-zip',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 4H6v16h12V9l-5-5zm0 1.4L16.6 9H13V5.4zM7 19V5h5v5h5v9H7zM9 6H8V5h1v1zm1 1H9V6h1v1zM9 8H8V7h1v1zm1 1H9V8h1v1zm-1 1H8V9h1v1zm1 1H9v-1h1v1zm-1 1H8v-1h1v1zm1 1H9v-1h1v1zm-1 1H8v-1h1v1zm1 1H9v-1h1v1zm-1 1H8v-1h1v1zm1 1H9v-1h1v1zm-1 1H8v-1h1v1zm1 1H9v-1h1v1z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconZipComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconZipComponent],
  exports: [IconZipComponent]
})
export class IconZipModule {}