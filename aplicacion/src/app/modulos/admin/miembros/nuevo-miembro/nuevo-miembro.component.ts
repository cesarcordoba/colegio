import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Miembro } from '../../../../models/miembro.model';

@Component({
    selector: 'app-nuevo-miembro',
    templateUrl: './nuevo-miembro.component.pug',
    styleUrls: ['./nuevo-miembro.component.styl']
})

export class NuevoMiembroComponent implements OnInit {
    form: FormGroup;
    data : Miembro;
    constructor(
        public dialogRef: MatDialogRef<NuevoMiembroComponent>,
        private formBuilder: FormBuilder,
    ) {
    this.data = new Miembro({})
}

        submit(){
            if(this.form.valid){
                this.dialogRef.close(this.data)
            }

        }

        cancel(){
            this.dialogRef.close()
        }

        ngOnInit(){
            this.form = this.formBuilder.group({
                nombre:['', Validators.required]

            })

        }
}
