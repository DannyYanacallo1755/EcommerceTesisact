import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router,
    private toastController: ToastController
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.registerForm.invalid) {
      this.showToast('Por favor, rellena todos los campos correctamente.');
      return;
    }

    const { email, password } = this.registerForm.value;

    try {
      await this.authService.register(email, password).toPromise();
      this.showToast('¡Registro exitoso!');
      this.router.navigate(['/login']);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        this.showToast('El registro falló: ' + err.message);
      } else {
        this.showToast('El registro falló: ocurrió un error desconocido.');
      }
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
