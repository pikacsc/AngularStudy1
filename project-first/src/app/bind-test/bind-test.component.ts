import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-bind-test',
  templateUrl: './bind-test.component.html',
  styleUrls: ['./bind-test.component.css']
})
export class BindTestComponent implements OnInit {
  name = 'Angular <mark>6</mark>';
  imgURL = 'https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  imgURI = 'L2907KPfuXqXQsbbJwk9xw8jDw_JmF63gLEESlqYa7CRF0687-F2y6HCFMW-w-hDSMazvKcJ90ZHLF5Phsh9FfcrW_oU66Nk60TRTUsNfA';
  isDisabled: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer) {

  }

  ngOnInit() {
    let btns = this.elRef.nativeElement.getElementsByTagName('button');
    console.log(btns);

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", this.popup);
    }

    // You can use listenGlobal that will give you access to document, body, etc.
    // this.renderer.listenGlobal('document', 'click', (event) => {
    //   this.popup();
    // });
  }

  popup(event){
    // console.log(event);
    alert(event.target.innerText);
  }
}
