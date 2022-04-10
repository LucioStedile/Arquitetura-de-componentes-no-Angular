import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  name: string = 'Lúcio';
  newName!: string;
  avatar: string = 'assets/images/Lucio.png';
  

  constructor() {}

  ngOnInit(): void {
  }

  makeMeHero(){
    DataBindingComponent.constructor();
    this.name = this.newName;
    this.avatar = 'assets/images/nave.png';
  }

}
