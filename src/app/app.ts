import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-part4';
  // color: number = 1;

  // colorcall(val: number) {
  //   this.color = val;
  //   console.log(this.color);
  // }

  // handleInput(event: Event) {
  //   this.color = parseInt((event.target as HTMLInputElement).value);
  // }

  // color = 'blue';

  // handlecolor(val: string) {
  //   this.color = val;
  // }

  // changecolor(event:Event) {
  //   this.color=(event.target as HTMLInputElement).value;
  // }

  users = ['aman', 'suman', 'raman', 'shyam', 'gopal'];

  students = [
    { name: 'Aman', age: 20, city: 'Delhi' },
    { name: 'Suman', age: 22, city: 'Mumbai' },
    { name: 'Raman', age: 21, city: 'Kolkata' },
    { name: 'Shyam', age: 23, city: 'Chennai' },
    { name: 'Gopal', age: 24, city: 'Bangalore' },
  ];

  getName(name: string) {
    console.log(name);
    return name;
  }

  numbers: number[] = [];

  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i);
    }
  }
}
