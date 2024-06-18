import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'

@Component({
  selector: 'app-third-info-steps',
  templateUrl: './third-info-steps.component.html',
  styleUrls: ['./third-info-steps.component.scss'],
})
export class ThirdInfoStepsComponent  implements OnInit {

  public formuser: FormGroup;

  constructor(
    private modal: ModalController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formuser = formBuilder.group({
      sintomas: ['', [Validators.required]],
      state: ['', [Validators.required]],
      medicalCondition: ['', [Validators.required]],
      sickTime: ['', [Validators.required]],
      severityLevel: ['', [Validators.required]]
    })
  }

  ngOnInit() {}

  //#region 
  cancel() {
    this.router.navigate(['SecondInfo']);
  }
  confirm() {
    this.router.navigate(['Results']);
  }
   // Para confirmar
   async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Completed',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
  // modal para agregar empleado
  onWillDismiss(event: Event) {
    const eve = event as CustomEvent<OverlayEventDetail<string>>;
    if (eve.detail.role === 'confirm') {
    }
  }
  //#endregion

}
