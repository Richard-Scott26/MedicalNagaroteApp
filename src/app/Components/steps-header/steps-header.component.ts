import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-header',
  templateUrl: './steps-header.component.html',
  styleUrls: ['./steps-header.component.scss'],
})
export class StepsHeaderComponent  implements OnInit {

  @Input() currentStep: string = '1';

  constructor() { }

  ngOnInit() {}

}
