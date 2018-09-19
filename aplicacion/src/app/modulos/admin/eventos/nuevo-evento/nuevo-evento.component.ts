import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Evento } from '../../../../models/evento.model';

@Component({
    selector: 'app-nuevo-evento',
    templateUrl: './nuevo-evento.component.pug',
    styleUrls: ['./nuevo-evento.component.styl']
})

export class NuevoEventoComponent implements OnInit {
    form: FormGroup;
    data : Evento;
    constructor(
        public dialogRef: MatDialogRef<NuevoEventoComponent>,
        private formBuilder: FormBuilder,
    ) {
    this.data = new Evento({})
}
        submit(){
            if(this.form.valid){
                this.dialogRef.close(this.data)
                console.log(this.data)
            }

        }

        cancel(){
            this.dialogRef.close()
        }

        ngOnInit(){
            this.form = this.formBuilder.group({
                titulo:['', Validators.required]
            })

        }
}
