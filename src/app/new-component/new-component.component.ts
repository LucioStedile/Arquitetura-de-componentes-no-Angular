import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  template: '<h1>Oi, eu sou Goku</h1>',
  styles: ['h1{ color: tomato}']
})
export class NewComponentComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
