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

  it('should set data and get it', () => {
    storageService.setItem('foo', 'bar');
    expect(storageService.setItem('foo', 'bar')).toBeUndefined();
    expect(storageService.getItem('foo')).toBe('bar');
  });

  it('should remove data', () => {
    storageService.setItem('foo', 'bar');
    expect(storageService.removeItem('foo')).toBeUndefined();
    expect(storageService.getItem('foo')).toBeNull();
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
