# ExpressionChangedAfterChecked

This project aims to demonstrate the source of 'expressionChangedAfterChecked'.  Because my project is in Angular 4, so is this repo.

It has some of the most basic examples.

Can you figure out how to fix these examples?

There's always the hack to set values in a ```setImmediate``` or ```setTimeout``` callback.  However, the best solutions involve restructuring to have parent compoents responsible for changes and child components responsible for rendering wherever possible.  Angular expects a top down data flow.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

