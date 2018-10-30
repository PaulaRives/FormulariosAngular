import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-otro',
  templateUrl: './otro.component.html',
  styleUrls: ['./otro.component.css']
})
export class OtroComponent implements OnInit {
  myForm: FormGroup;

  get nombre() {
    return this.myForm.get('nombre')
  }

  get apellido() {
    return this.myForm.get('apellido')
  }

  get mail() {
    return this.myForm.get('mail')
  }

  get newsletter() {
    return this.myForm.get('mail')
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({ 'nombre': ['', Validators.required], 'apellido': ['', Validators.required], 'mail': [{ value: '', disabled: true }], 'newsletter': [true] })

    this.newsletter.valueChanges.subscribe(function (value) {
      if (value) {
        this.mail.enable();
      }
      else {
        this.mail.disable();
      }

    });
  }

  ngOnInit() {
  }

}
