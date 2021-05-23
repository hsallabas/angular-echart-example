import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../modules/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WrapperComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    WrapperComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class LayoutsModule { }
