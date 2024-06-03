import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string): Observable<void> {
    return from(
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("Inicio de sesión exitoso");
        })
        .catch(error => {
          console.error("Error al iniciar sesión:", error);
          throw error; 
        })
    );
  }

  register(email: string, password: string): Observable<void> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {}));
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    }));
  }

  isLoggedIn(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(user => !!user)
    );
  }
}
