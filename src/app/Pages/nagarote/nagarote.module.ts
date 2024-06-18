import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NagarotePageRoutingModule } from './nagarote-routing.module';

import { NagarotePage } from './nagarote.page';
import { ComponentsModule } from 'src/app/Components/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NagarotePageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    NagarotePage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NagarotePageModule {}
