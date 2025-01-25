import { Test, TestingModule } from '@nestjs/testing';
import { RazonSocialService } from './razon_social.service';

describe('RazonSocialService', () => {
  let service: RazonSocialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RazonSocialService],
    }).compile();

    service = module.get<RazonSocialService>(RazonSocialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
