import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private hasStorage = true;

  constructor() {
    try {
      localStorage.setItem('storage_test', 'test');
      localStorage.removeItem('storage_test');
    } catch (e) {
      this.hasStorage = false;
    }
  }

  clear() {
    if (this.hasStorage) {
      localStorage.clear();
      return;
    }
  }

  getItem(key: string): string | any {
    if (this.hasStorage) {
      return localStorage.getItem(key);
    }
    return;
  }

  setItem(key: string, value: any) {
    if (this.hasStorage) {
      localStorage.setItem(key, value);
      return;
    }
  }

  removeItem(key: string) {
    if (this.hasStorage) {
      localStorage.removeItem(key);
      return;
    }
    return;
  }

}
