import {Directive, ElementRef, Input, HostListener, OnInit, Renderer, Renderer2} from '@angular/core';

export type LmSrcType = "backgroundImage" | "src";

/**
 * 用于设置src的指令，没做安全处理，慎用
 */
@Directive({
  selector: '[lm-src]'
})
export class LmSrcDirective implements OnInit {
  //src，支持实时刷新
  @Input("lm-src") src: string;

  @Input() lmType: LmSrcType = 'src';

  constructor(private ElementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  updateSrc() {
    if ('src' === this.lmType) {
      this.ElementRef.nativeElement.setAttribute("src", this.src);
    }
    if ('backgroundImage' === this.lmType) {
      this.ElementRef.nativeElement.setAttribute("style", `background:url(${this.src})`);
    }
  }

  ngOnChanges(changeMap) {
    if (!this.ElementRef) {
      return;
    }
    if (changeMap.src) {
      this.updateSrc();
    }
    if (changeMap.lmType) {
      this.updateSrc();
    }
  }

}
