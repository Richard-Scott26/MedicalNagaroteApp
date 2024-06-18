import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ScrollDetail } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent  implements OnInit {

  @Input() customData: any;

  constructor(
    private modal: ModalController,
    private navParams: NavParams
    ) { }

  ngOnInit() {
    console.log(this.customData);
  }

  handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', JSON.stringify(ev.detail));
  }

  handleScrollEnd() {
    console.log('scroll end');
  }

  Cerrar() {
    this.modal.dismiss(null, 'cancel');
  }

}
