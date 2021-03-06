import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Noticia } from '../../../../models/noticia.model';

@Component({
    selector: 'app-nueva-noticia',
    templateUrl: './nueva-noticia.component.pug',
    styleUrls: ['./nueva-noticia.component.styl']
})

export class NuevaNoticiaComponent implements OnInit {
    form: FormGroup;
    data : Noticia;
    constructor(
        public dialogRef: MatDialogRef<NuevaNoticiaComponent>,
        private formBuilder: FormBuilder,
        // @Inject(MAT_DIALOG_DATA) public data: Noticia
    ) {
    this.data = new Noticia({})
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
