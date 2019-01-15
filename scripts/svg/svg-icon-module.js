const { readFile } = require('fs');
const { basename, dirname, relative, sep } = require('path');
const { promisify } = require('util');
const { svgo } = require('./svgo-configuration');
const { IconModule } = require('./icon-module');
const readFileAsync = promisify(readFile);

class SvgIconModule extends IconModule {
  constructor(basePath, filePath) {
    super(
      dirname(relative(basePath, filePath))
        .split(sep),
      basename(filePath)
        .replace(/\.svg$/i, '')
        .replace(/SBB_(XX_)?(GC_)?(\d+_)?(\d+_)?/i, '')
        .replace(/\_/g, '-')
        .replace(/([A-Z])/g, (_, m) => `-${m.toLowerCase()}`)
        .replace(/^[\w\W]+$/g, m => `icon-${m}`));
    this.filePath = filePath;
    this.selector = `sbb-${this.kebabCaseName}`;
    this.componentName = `${this.pascalCaseName}Component`;
    this.importPath = `./${this.outputFileBaseName}`;
  }

  iconComponentDetails() {
    return [{
      selector: this.selector,
      name: this.componentName,
      tags: this.modules,
    }];
  }

  async _angularTemplate() {
    const svgContent = await readFileAsync(this.filePath, 'utf8');
    const optimizedSVG = await this._normaliseSvg(svgContent);
    const viewBoxRegex = / viewBox="([ \d,]+)"/g;
    const viewBoxValue = viewBoxRegex.exec(optimizedSVG.data)[1];
    const bindings = ['viewBox', 'preserveAspectRatio', 'width', 'height'].map(a => `[attr.${a}]="${a}"`);
    const angularSvgTemplate = optimizedSVG.data
      .replace(viewBoxRegex, '')
      .replace(/^<svg/g, `<svg [attr.class]="'sbb-svg-icon ' + svgClass" ${bindings.join(' ')}`);
    return `/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '${this.modules.map(m => '..').join('/')}/icon-base';

@Component({
  selector: '${this.selector}',
  // tslint:disable-next-line:max-line-length
  template: \`${angularSvgTemplate}\`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ${this.componentName} extends IconBase {
  constructor() {
    super({ viewBox: '${viewBoxValue}' });
  }
}

@NgModule({
  declarations: [${this.componentName}],
  exports: [${this.componentName}],
})
export class ${this.moduleName} { }
`;
  }

  /**
   * Normalizes SVG mark-up, optimizing the content for cross-browser compatibility.
   * [svgo](https://github.com/svg/svgo) library is used for the scope with configured options findable in svgo-configuration.ts
   * @param svgIconSource Source SVG mark-up
   * @return normalized SVG mark-up
   **/
  async _normaliseSvg(svgIconSource) {
    return await svgo.optimize(svgIconSource);
  }
}

module.exports.SvgIconModule = SvgIconModule;
