import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  Input,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective implements OnInit {
  // @Input() ec: string = '';
  // @Input() lc: string = '';
  @HostBinding('style.backgroundColor') bg: string = '';
  constructor(private render: Renderer2, private element: ElementRef) {}
  ngOnInit() {
    this.bg = 'green';
    this.render.setAttribute(this.element.nativeElement, 'align', 'center');
    this.render.setStyle(this.element.nativeElement, 'color', 'white');
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    );
  }

  // @HostListener('mouseenter') mouseover() {
  //   // this.renders.setStyle(this.element.nativeElement,'background-color',this.Dcolor);
  //   if (this.ec == '') {
  //     this.ec = 'lightblue';
  //   }
  //   this.bg = this.ec;
  //   this.render.setAttribute(this.element.nativeElement, 'align', 'center');
  //   this.render.setStyle(this.element.nativeElement, 'font-family', 'verdana');
  //   this.render.setStyle(this.element.nativeElement, 'color', 'whitesmoke');
  // }
  // @HostListener('mouseleave') mouseleave() {
  //   //  this.renders.setStyle(this.element.nativeElement,'background-color',this.Acolor);
  //   if (this.lc == '') {
  //     this.lc = 'transparent';
  //   }
  //   this.bg = this.lc;
  //   this.render.setAttribute(this.element.nativeElement, 'align', 'center');
  //   this.render.setStyle(this.element.nativeElement, 'font-family', 'verdana');
  //   this.render.setStyle(this.element.nativeElement, 'color', this.lc);
  // }
}
