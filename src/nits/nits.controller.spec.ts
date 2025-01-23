import { Test, TestingModule } from '@nestjs/testing';
import { NitsController } from './nits.controller';
import { NitsService } from './nits.service';

describe('NitsController', () => {
  let controller: NitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NitsController],
      providers: [NitsService],
    }).compile();

    controller = module.get<NitsController>(NitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
