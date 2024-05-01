import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../assets/environment';


@Injectable({
    providedIn: 'root'
})
export class BucketService {
    baseUrl = environment.bucketApi.baseUrl;

    constructor(protected http: HttpClient) { }

    getListaKeysByBucketName(bucketName: string): Observable<string[]> {
        let url = this.baseUrl.concat("listObjects");
        let params = new HttpParams().set('bucketName', bucketName);
        this.printUrl(url);
        return this.http.get<string[]>(url, {params: params});
    }
    
    getFileContentsByBucketNameAndKey(bucketName: string, key: string): Observable<any> {
        let url = this.baseUrl.concat("getS3ObjectContent");
        let params = new HttpParams()
            .set('bucketName', bucketName)
            .set('key', key);
        this.printUrl(url);
        return this.http.get<string>(url, { params: params, responseType: 'text' as 'json' });
    }

    printUrl(url: string) {
        console.log("URL called: " + url);
    }

}