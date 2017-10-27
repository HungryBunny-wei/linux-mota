import {Directive, ElementRef, Input, HostListener, OnInit, Renderer, Renderer2, OnChanges} from '@angular/core';

export type LmSrcType = "backgroundImage" | "src";

/**
 * 用于设置src的指令
 * 可以对src做特殊处理
 * 获取用来设置背景图片src
 */
@Directive({
  selector: '[lm-src]'
})
export class LmSrcDirective implements OnInit,OnChanges {
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
  }

}
