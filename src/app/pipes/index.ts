import { NgModule } from '@angular/core';
import { WikiUrlPipe } from './wiki-url.pipe';

export { WikiUrlPipe } from './wiki-url.pipe';

const pipes = [WikiUrlPipe];

/**
 * The pipe is standalone, so this module only re-exports it.
 */
@NgModule({
  imports: [...pipes],
  exports: [...pipes]
})
export class PipesModule { }
