import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-twit';
  data!:any

  getValue(val:any){
    console.log(val);
    
this.data={sourceType:'url',url: val}
  }
}
