import { TestBed } from '@angular/core/testing';

import { GamelistService } from './gamelist.service';

describe('GamelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamelistService = TestBed.get(GamelistService);
    expect(service).toBeTruthy();
  });
});
