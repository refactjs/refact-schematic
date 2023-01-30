import { ApplicationOptions } from './application.schema';
import { move, apply, Source, url, Tree } from '@angular-devkit/schematics';
import {  join, Path, template } from '@angular-devkit/core';

export function main(options: ApplicationOptions) {
  console.log('WE WILL CREATE Application on This' , options);
  return (tree: Tree) => {
    tree.create(options.path + '/hi', 'Hello world!');
    return tree;
  };
}
