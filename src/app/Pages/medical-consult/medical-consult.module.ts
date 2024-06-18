import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalConsultPageRoutingModule } from './medical-consult-routing.module';

import { MedicalConsultPage } from './medical-consult.page';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/app/Components/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalConsultPageRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [
    MedicalConsultPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MedicalConsultPageModule {}
