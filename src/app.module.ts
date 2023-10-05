import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriggerPushController } from './trigger-push/trigger-push.controller';
import * as webPush from 'web-push';

@Module({
  imports: [],
  controllers: [AppController, TriggerPushController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    webPush.setVapidDetails(
      'mailto:your-email@example.com', // 你的聯繫信息，通常是email
      'BFKOtIJ7-91OePMZobZIXDIZG41l1Gy6Ax2Gq-7x6iCTpvNloDxvZauDF8PvPV4Saku2QRNNstnEbZm9FUrwt1o', // 生成的VAPID公鑰
      'ZNcdjQWPU3z82BJnda7N6b_hGNNAypgLrXbIQvAfeMc', // 生成的VAPID私鑰
    );
  }
}
