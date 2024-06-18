import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultStepsPageRoutingModule } from './consult-steps-routing.module';

import { ConsultStepsPage } from './consult-steps.page';
import { ComponentsModule } from 'src/app/Components/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultStepsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    ConsultStepsPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ConsultStepsPageModule {}
