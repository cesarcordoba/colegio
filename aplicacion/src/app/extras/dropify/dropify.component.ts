import { Component, Input, Output, ElementRef, forwardRef, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { element } from 'protractor';
declare var $: any
@Component({
    selector: 'dropify',
    templateUrl: './dropify.component.pug',
    styleUrls: ['./dropify.component.styl'],
    providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DropifyComponent),
          multi: true
      }
  ],
  encapsulation: ViewEncapsulation.None
  })

  export class DropifyComponent implements ControlValueAccessor, OnInit{
    selectedFileName: string = null;
    @Input() showFileNameInput: boolean;
    @Output() remove = new EventEmitter();
    writeValue(value: any) {
      //Handle write value
   }
   propagateChange = (_: any) => { };
   registerOnChange(fn) {
       this.propagateChange = fn;
   }
   registerOnTouched() { }

   changeListener($event): void {
       // debugger; // uncomment this for debugging purposes
       this.readThis($event.target);
   }
   readThis(inputValue: any): void {
       // debugger; // uncomment this for debugging purposes
       var file: File = inputValue.files[0];
       var myReader: FileReader = new FileReader();

       myReader.onloadend = (e) => {
           this.propagateChange(file);
           this.selectedFileName = file.name;
       }
       myReader.readAsDataURL(file);
   }

   ngOnInit() {
        var drEvent = $('.dropify').dropify({
            messages: {
                'default': 'Arrastra la imagen aqui ó da click',
                'replace': 'Arrastra y remplaza la imagen',
                'remove':  'Quitar',
                'error':   'Ooops, algo salio mal.'
            }
        });

        drEvent.on('dropify.beforeClear', (event, element) => this.remove.emit('assets/images/nophoto.svg'));
    }
  }
