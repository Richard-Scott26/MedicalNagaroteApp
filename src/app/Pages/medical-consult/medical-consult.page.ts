import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { InfoComponent } from 'src/app/Components/info/info.component'
@Component({
  selector: 'app-medical-consult',
  templateUrl: './medical-consult.page.html',
  styleUrls: ['./medical-consult.page.scss'],
})
export class MedicalConsultPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private route: Router,
    private alertController: AlertController,
    ) {

   }

  ngOnInit() {
  }



  async AbrirModal(){
    const modal = await this.modalController.create({
      component: InfoComponent
    });
    await modal.present();
  }

  NavigateTo(){
    this.route.navigate(['consult-steps']);
  }


  async showAnswer(response: any){

    console.log(response);
    

    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important Message',
      message: 'This is an alert',
      buttons: ['Ok'],
    });

    await alert.present();
  }

}