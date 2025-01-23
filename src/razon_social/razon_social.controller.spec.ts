import { Test, TestingModule } from '@nestjs/testing';
import { RazonSocialController } from './razon_social.controller';
import { RazonSocialService } from './razon_social.service';

describe('RazonSocialController', () => {
  let controller: RazonSocialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RazonSocialController],
      providers: [RazonSocialService],
    }).compile();

    controller = module.get<RazonSocialController>(RazonSocialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
