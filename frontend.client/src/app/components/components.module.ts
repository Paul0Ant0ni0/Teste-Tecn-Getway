import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../shared/material/material.module';
import { CardInfoComponent } from './card-info/card-info.component';
import { ButtonCustomComponent } from './button-custom/button-custom.component';
import { ChipsCustomComponent } from './chips-custom/chips-custom.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalComponent,
    DialogComponent,
    CardInfoComponent,
    ButtonCustomComponent,
    ChipsCustomComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule

  ],
  exports: [
    ModalComponent,
    DialogComponent,
    CardInfoComponent,
    ChipsCustomComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
