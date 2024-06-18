import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Models/Person.model';

@Component({
  selector: 'app-consult-steps',
  templateUrl: './consult-steps.page.html',
  styleUrls: ['./consult-steps.page.scss'],
})
export class ConsultStepsPage implements OnInit {

  public showFirst: boolean = true;
  public showSecond: boolean = false;
  public showThird: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  NavigateTo(){
    this.router.navigate(['SecondInfo'])
  }

  cancel(){
    this.router.navigate([''])
  }

}
