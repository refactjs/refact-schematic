import { ApplicationOptions } from './application.schema';
import { move,apply, Source, url } from '@angular-devkit/schematics';
import {  join, Path, template } from '@angular-devkit/core';

export function main(options: ApplicationOptions): void {
  console.log('WE WILL CREATE Application on This');
  generate(options , "")
}
function generate(options: ApplicationOptions, path: string): Source {
  return apply(url(join('./files' as Path, "ts")), [
    move(path),
  ]);
}
