import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponentComponent, TemplateBindingComponent, NgClass, TemplateVariablesComponent],

  template: `
    <H1>Curso de angular</H1>
    <app-template-binding />
    <app-template-variables />
  `
})
export class AppComponent {

}
