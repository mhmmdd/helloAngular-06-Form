import {Component} from 'angular2/core';
import {TemplateDrivenFormComponent} from "./template-driven-form";
import {DataDrivenFormComponent} from "./data-driven-form";

@Component({
  selector: 'my-app',
  template: `
     <my-template-driven></my-template-driven>
     <my-data-driven></my-data-driven>
  `,
  directives: [TemplateDrivenFormComponent, DataDrivenFormComponent]
})

export class AppComponent {

}
