import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = "Dener Troquatte";
  public teste: number = 12345;
  public isDisabled = true;
  public somar = () => {
    this.teste++;
  }
  public subtrair = () => {
    this.teste--;
  }
}
