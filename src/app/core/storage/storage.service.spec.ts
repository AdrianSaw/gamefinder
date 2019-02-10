import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('Storage Service', () => {
  let storageService: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
    storageService = TestBed.get(StorageService);
  });

  it('should create storageService', () => {
    expect(storageService).toBeTruthy();
  });

  it('should set data', () => {
    expect(storageService.setItem('foo', 'bar')).toBeUndefined();
  });

  it('should remove data', () => {
    expect(storageService.removeItem('foo')).toBeUndefined();
  });

  it('should clear storage', () => {
    expect(storageService.clear()).toBeUndefined();
  });

  it('should return null', () => {
    spyOn(storageService, 'hasStorage');
    storageService.hasStorage = false;
    expect(storageService.clear()).toBeUndefined();
    expect(storageService.removeItem('foo')).toBeUndefined();
    expect(storageService.getItem('')).toBeUndefined();
    expect(storageService.setItem('foo', 'bar')).toBeUndefined();
  });

});
