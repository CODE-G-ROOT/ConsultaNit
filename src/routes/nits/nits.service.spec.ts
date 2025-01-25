import { Test, TestingModule } from '@nestjs/testing';
import { NitsService } from './nits.service';

describe('NitsService', () => {
  let service: NitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NitsService],
    }).compile();

    service = module.get<NitsService>(NitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
