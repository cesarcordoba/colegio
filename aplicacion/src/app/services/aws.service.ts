import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { AWSKEYS } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()   
export class AWSService {

    private FOLDER: string;
    private bucketName: string;
    private bucket = new S3({
        accessKeyId: AWSKEYS.accessKeyId,
        secretAccessKey: AWSKEYS.secretAccessKey,
        region: AWSKEYS.region
    });

    private linkUpload: Observable<string | boolean>;
    private borradoArchivo: Observable< boolean>;

    constructor(){
        this.FOLDER = 'imagenes/';
        this.bucketName = 'bull-imagenes';
    }

    subirArchivo(archivo): Observable<string | boolean>{

        const params: S3.PutObjectRequest = {
            Bucket: this.bucketName,
            Key: this.FOLDER + archivo.name,
            Body: archivo,
            ACL: 'public-read'
        }

        this.linkUpload = new Observable(observar => {
            observar.next(true)
            this.bucket.upload(params, (err, data) => {
                if (err) {
                    console.log('There was an error uploading your file: ', err);
                    observar.next(false)
                    return false;
                  }
             
                  console.log('Successfully uploaded file.', data);
                  observar.next(data.Location)
                  return true;
            })
        })
        return this.linkUpload
    }

    borrarArchivo(nombreArvhi: string): Observable< boolean>{
        const params: S3.PutObjectRequest = {
            Bucket: this.bucketName,
            Key: this.FOLDER + nombreArvhi
        }

        this.borradoArchivo = new Observable(observar => {
            this.bucket.deleteObject(params, (err, data)=> {
                if(err){
                    console.log('There was an error uploading your file: ', err);
                    observar.next(false)
                    return false;
                }

                observar.next(data.DeleteMarker)
                
            })
        })

        return this.borradoArchivo;
    }

}
