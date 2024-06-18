import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ScrollDetail } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  @Input() customData: any;

  constructor(
    private modal: ModalController,
    ) { }

  ngOnInit() {
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
