# Frontend Task (Angular) 
### [DEMO]()
This example application would allows you to check the registered clients and their banking accounts.

#### Features

- Lazy loading.
- Strict mode.
- Defer Load
- BEM CSS Naming Notation
- Component Driven Development
- Angular Mateial UI library
- Echart library
- Layout Structure
- Angular version 11.2.10
- Typescript and RxJS

#### Tech
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.
- [@angular/material](https://material.angular.io/) - Material Design components for Angular
- [ngx-echarts](https://www.npmjs.com/package/ngx-echarts) - Angular directive for Apache ECharts (incubating) (version >= 3.x) (The project is renamed from angular2-echarts)
- [@trademe/ng-defer-load](https://www.npmjs.com/package/@trademe/ng-defer-load) - It uses Intersection Observer API to check if an element is in viewport and falls back to scroll detection mechanism for unsupported browsers.
- [Bootstrap SCSS](https://www.npmjs.com/package/bootstrap-scss) - Sleek, intuitive, and powerful front-end framework for faster and easier web development.


#### Project structure

```console
├───app
│   ├───core
│   │   ├───interceptors
|   |   |   └───progress
│   │   ├───services
│   │   │   └───pprogress-bar
|   |   |   └───simple-state
│   ├───modules
│   │   ├───bank-accounts
|   |   |   ├───components
|   |   |   |   └───account-bar-chart
|   |   |   |   └───account-pie-chart
|   |   |   |   └───client-card
|   |   |   ├───pages
|   |   |   |   └───bank-account-list
|   |   |   ├───services
|   |   |   |   └───bank-account
│   ├───pages
│   |   └───not-found
│   ├───shared
│   |   ├───layout
|   |   |   └───footer
|   |   |   └───header
|   |   |   └───wrapper
│   |   ├───models
|   |   |   └───account
|   |   |   └───chart-info
|   |   |   └───client
│   |   ├───modules
|   |   |   └───material
│   └───router
├───assets
│   ├───scss
├───environments
```
#### Installation

Cloning project and installing dependencies

```sh
git clone https://gitlab.com/cluepoints/poc-be-hsallabas.git
cd poc-be-hsallabas
'yarn install' or 'npm install'
```

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
