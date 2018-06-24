import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <style>
    div {
          border: 1px solid red;
          padding: 5px;
          margin: 5px;
          /*outline: #4CAF50 solid 10px;*/
         }
      .flex-container {
      display: flex;
      background-color: DodgerBlue;
      }

      .flex-container > div {
      background-color: #f1f1f1;
      margin: 10px;
      padding: 20px;
      font-size: 30px;
      }

    div.sticky {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      padding: 5px;
      background-color: #cae8ca;
      border: 2px solid #4CAF50;
    }
    </style>
    <div>
        <div class="flex-container sticky">
        <span  class="sticky"><h1 style="display:inline;">Tour of Heroes&nbsp;&nbsp;</h1><h2 style="display:inline;">spanning here.</h2></span>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div>Testing parent message2</div>
        <app-child [childMessage]="parentMessage"></app-child>
        <div style="padding-bottom:2000px">
          <p>In this example, the sticky element sticks to the top of the page (top: 0), when you reach its scroll position.</p>
          <p>Scroll back up to remove the stickyness.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
          <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        </div>
    </div>
  `,
  styles: [`
    h1 {
      color: purple;
      font-size: 80px;
    }
  `],
})

//Parent to Child: Sharing Data via Input()
export class ParentComponent {
  parentMessage = "message from parent"
  constructor() { }
}
