import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('titleText') titleText: ElementRef;

  ngAfterViewInit() {
    // setInterval(() => {
    //   console.log(this.titleText.nativeElement.innerText);
    // }, 5000);
  }
}
