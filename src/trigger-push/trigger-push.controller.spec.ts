import { Test, TestingModule } from '@nestjs/testing';
import { TriggerPushController } from './trigger-push.controller';

describe('TriggerPushController', () => {
  let controller: TriggerPushController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TriggerPushController],
    }).compile();

    controller = module.get<TriggerPushController>(TriggerPushController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
