import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-some-library',
  template: `
    <p>
      some-library works!
    </p>
  `,
  styles: []
})
export class SomeLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
