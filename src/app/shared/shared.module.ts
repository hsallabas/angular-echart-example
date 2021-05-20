import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { MaterialModule } from './modules/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutsModule,
    MaterialModule
  ]
})
export class SharedModule { }
