import {Component} from "@angular/core";

@Component({
  selector: "lm-main",
  template: `
    <nz-header></nz-header>
    <nz-layout>
      <nz-sider [nzWidth]="64"></nz-sider>
      <nz-content></nz-content>
    </nz-layout>
  `,
  styles: [
      `
      .ant-layout {
        position: absolute;
        top: 24px;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .ant-layout-header {
        position: absolute;
        width: 100%;
        height: 24px;
        box-shadow: 0 1px 1px 1px #717171;
        z-index: 996;
      }

      .ant-layout-sider {
        position: relative;
        top: 0;
        bottom: 0;
        background-color: rgb(55, 17, 29);
        z-index: 997;
      }

      .ant-layout-content {
        position: relative;
        top: 0;
        bottom: 0;

        background-image: url(/assets/img/background-img.jpg);
      }
    `
  ]
})
export class MainComponent {

  constructor() {

  }
}
