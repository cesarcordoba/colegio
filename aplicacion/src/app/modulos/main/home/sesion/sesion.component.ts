import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'sesion',
    templateUrl: './sesion.component.pug',
    styleUrls: ['./sesion.component.styl'],
    encapsulation: ViewEncapsulation.None,
})

export class InicioSesionComponent implements OnInit {
    loginForm: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<InicioSesionComponent>,
        private formBuilder: FormBuilder,
        private auth: AuthService
    ) {}

    login(form: FormGroup) {
        if(form.controls.usuario.valid && form.controls.contra.valid){
            let usuario = {correo: form.controls.usuario.value, password: form.controls.contra.value}
            this.auth.iniciarSesion(usuario)
            .then(response => {
                if(response===false){
                    console.log('no se encontro el usuario')
                }else{
                    this.dialogRef.close(false)
                }
            })
           
        }
    }

        cancel(){
            this.dialogRef.close()
        }

        ngOnInit(){
            this.loginForm = this.formBuilder.group({
                usuario: ['', Validators.required],
                contra: ['', Validators.required]
            });

        }
}
