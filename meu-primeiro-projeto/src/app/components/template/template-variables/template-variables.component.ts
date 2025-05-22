import { Component } from '@angular/core';
import { TemplateBindingComponent } from '../template-binding/template-binding.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [TemplateBindingComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent {

}
