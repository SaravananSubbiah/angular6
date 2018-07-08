import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
  // styles: [`
  //   h1 {
  //     color: purple;
  //     font-size: 80px;
  //   }
  // `],
})

//Parent to Child: Sharing Data via Input()
export class ParentComponent {
  parentMessage123 = "How are you my child?"
  constructor() { }
}
