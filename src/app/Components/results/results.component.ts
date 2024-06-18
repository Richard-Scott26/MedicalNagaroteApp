import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent  implements OnInit {

  @Input() Diagnostico: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  NavigateTo(){
    this.router.navigate(['']);
  }

}
