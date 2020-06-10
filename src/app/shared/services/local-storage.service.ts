import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getStorage(key: string) {
    return localStorage.getItem(key);
  }

  setStorage(key: string, data: any) {
    localStorage.setItem(key, data);
  }
}
