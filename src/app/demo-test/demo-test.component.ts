import { Component } from '@angular/core';

@Component({
  selector: 'fba-demo-test',
  templateUrl: './demo-test.component.html',
  styleUrls: ['demo-test.component.scss']
})

export class DemoTestComponent {
  text = '';
  x;
  y;
  data = "http://lorempixel.com/500/500"
  condition: boolean = true;
  constructor (){
  }
  reloadPic(event){
    this.x = event.offsetX;
    this.y = event.offsetY;
    if (this.x > this.y && this.x > (500 - this.y)){
      this.text = 'Right';
      this.condition = !this.condition;
    }else if (this.x > this.y && this.x < (500 - this.y)){
      this.text = "Up";
    }else if (this.x < this.y && this.x > (500 - this.y)){
      this.text = 'Down';
    }else if (this.x < this.y && this.x < (500 - this.y)){
      this.text = "Left";
    }
  }
}
