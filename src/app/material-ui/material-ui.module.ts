import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
];

@NgModule({
  imports: [ CommonModule, ...MATERIAL_COMPONENTS ],
  exports: [ ...MATERIAL_COMPONENTS ],
})
export class MaterialUiModule { }
