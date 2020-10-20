import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatGridListModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
