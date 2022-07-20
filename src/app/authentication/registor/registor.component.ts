import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.scss']
})
export class RegistorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  RegistorUser(registorForm: NgForm){
    console.log(registorForm)
  }
}
