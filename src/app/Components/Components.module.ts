import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { CardsComponent } from "./cards/cards.component";
import { InfoComponent } from "./info/info.component";
import { StepsHeaderComponent } from "./steps-header/steps-header.component";
import { FirstInfoStepsComponent } from "./InformationSteps/first-info-steps/first-info-steps.component";
import { SecondInfoStepsComponent } from "./InformationSteps/second-info-steps/second-info-steps.component";
import { ThirdInfoStepsComponent } from "./InformationSteps/third-info-steps/third-info-steps.component";
import { ResultsComponent } from "./results/results.component";

@NgModule({
    declarations: [
        SideMenuComponent,
        CardsComponent,
        InfoComponent,
        StepsHeaderComponent,
        FirstInfoStepsComponent,
        SecondInfoStepsComponent,
        ThirdInfoStepsComponent,
        ResultsComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        SideMenuComponent,
        CardsComponent,
        InfoComponent,
        StepsHeaderComponent,
        FirstInfoStepsComponent,
        SecondInfoStepsComponent,
        ThirdInfoStepsComponent,
        ResultsComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ComponentsModule{ }