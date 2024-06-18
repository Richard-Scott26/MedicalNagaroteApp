import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'

@Component({
  selector: 'app-first-info-steps',
  templateUrl: './first-info-steps.component.html',
  styleUrls: ['./first-info-steps.component.scss'],
})
export class FirstInfoStepsComponent  implements OnInit {

  @Input() direction: string = 'SecondInfo';
  public formuser: FormGroup;

  constructor(
    private modal: ModalController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formuser = formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  }

  ngOnInit() {}

  //#region 
  cancel() {
    this.router.navigate(['']);
  }
  confirm() {
    this.router.navigate(['SecondInfo'])
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
