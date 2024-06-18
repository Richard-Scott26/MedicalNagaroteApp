import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { InfoComponent } from 'src/app/Components/info/info.component';
import { Review } from 'src/app/Models/Review.model';
import { LocalStorageRepository } from 'src/app/Repositories/LocalStorage.repository';
import { GetJson } from 'src/app/Services/GetJson';

@Component({
  selector: 'app-nagarote',
  templateUrl: './nagarote.page.html',
  styleUrls: ['./nagarote.page.scss'],
})
export class NagarotePage implements OnInit {

  public reviews: Review[] = [];

  constructor(
    private getJson: GetJson, 
    private LSRepository: LocalStorageRepository,
    private navCtrl: NavController,
    private modalController: ModalController
    ) {
      this.getJson.getReviews().subscribe((data: Data) => {
        this.reviews = data['Review'];
  
        const isSaved = this.LSRepository.saveData<Data>(data,'DataJSon');
          isSaved ? console.log('Guardado') : console.log('NO se guardo');
  
        const datas = LSRepository.getData<Data>('DataJSon');
        console.log(datas);
        
      })
  
    }

  ngOnInit() {
  }

  async AbrirModal(index: number){
    const modal = await this.modalController.create({
      component: InfoComponent,
      componentProps: {
        customData: this.reviews[index]
      }
    });
    await modal.present();
  }

}
