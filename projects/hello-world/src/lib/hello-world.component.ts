import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-hello-world',
  template: `
    <p>
      hello-world works!
    </p>
     <lib-my-lib2></lib-my-lib2>
  `,
  styles: [
  ]
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
