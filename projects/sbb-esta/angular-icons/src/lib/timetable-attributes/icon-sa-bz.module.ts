/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-sa-bz',
  // tslint:disable:max-line-length
  template: `
    <svg
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M5.84 6.678h1.102c1.42 0 2.96-.4 2.96-2.04 0-1.34-1.28-1.4-2.34-1.4H6.58l-.74 3.44zM4.56 12.8h.96c1.72 0 3.642-.2 3.642-2.36 0-1.461-1.36-1.681-2.861-1.681h-.9l-.84 4.04zM4.34 1.037h4.142c2.18 0 4.22.8 4.22 3.34 0 1.7-1.36 3.062-2.98 3.322v.04c1.56.24 2.24 1.44 2.24 2.94 0 4-4.48 4.32-6.56 4.32H1.42L4.34 1.038zM16.181 1.037h9.582l-.48 2.2-8.422 9.563h6.361l-.46 2.2H12.96l.44-2.2 8.402-9.563h-6.101z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaBzComponent extends IconBase {
  constructor() {
    super({ width: '27px', height: '16px', ratio: 1.6875 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaBzComponent],
  exports: [IconSaBzComponent]
})
export class IconSaBzModule {}
