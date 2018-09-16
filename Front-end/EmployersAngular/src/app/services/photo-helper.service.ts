import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoHelperService {

  readonly DefaultPhotoPath: string = 'http://localhost:3000/img/user.png';
  private readonly PhotoPath: string = 'http://localhost:3000/img/employees/';

  constructor() {

  }//constructor

  getPhotoPath(imgName : string){

    return imgName ? this.PhotoPath + imgName : null;

  }//getPhotoPath

}//PhotoHelperService
