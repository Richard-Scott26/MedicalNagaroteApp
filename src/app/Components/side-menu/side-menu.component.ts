import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {

  public appPages = [
    { title: 'Inicio', url: 'dashboard', icon: 'home' },
    { title: 'Perfil', url: 'app/profile', icon: 'person' },
    { title: 'Historial médico', url: 'history-dignostic', icon: 'receipt' },
    { title: 'Management Doctors', url: 'ControlDoctors', icon: 'list' }

  ];
  constructor(private router: Router,
    private menuController: MenuController) {

  }

  public  ngOnInit() {

  }
  Logout() {
    this.HideMenu();
    this.router.navigateByUrl('login', { replaceUrl: true })
  }
  HideMenu() {
    this.menuController.close('start');
  }
}
