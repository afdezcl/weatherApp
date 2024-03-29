import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSidenavModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Solo hacemos los exports, no hacemos imports. Este es un modulo organizativo
@NgModule({
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSidenavModule,
    // Forms
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class MaterialFormsModule { }