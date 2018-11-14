import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';


@Component({
    selector: 'boletin',
    templateUrl: './boletin.component.pug',
    styleUrls: ['./boletin.component.styl'],
    encapsulation: ViewEncapsulation.None,
})

export class BoletinComponent implements OnInit {
    boletinForm: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<BoletinComponent>,
        private formBuilder: FormBuilder
    ) {}

        // login(form: FormGroup) {
        //     if(form.controls.usuario.valid && form.controls.contra.valid){
        //         let usuario = {correo: form.controls.usuario.value, password: form.controls.contra.value}
        //         this.auth.iniciarSesion(usuario)
        //         .then(response => {
        //             if(response===false){
        //                 console.log('no se encontro el usuario')
        //             }else{
        //                 this.dialogRef.close(false)
        //             }
        //         })
                
        //     }
        // }

        mandarBoletin(form: FormGroup){
            if(form.controls.correo.valid)
                console.log(form.controls.correo.value)
        }

        cancel(){
            this.dialogRef.close()
        }

        ngOnInit(){
            this.boletinForm = this.formBuilder.group({
                correo: ['', Validators.required]
            });

        }
}
