import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getData(key: string): any {
    const storage: any = localStorage.getItem(key);
    return JSON.parse(storage);    
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  constructor() { }
}
