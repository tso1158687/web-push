import { Controller, Post } from '@nestjs/common';
import * as webPush from 'web-push';

@Controller('trigger-push')
export class PushTriggerController {
//   @Post()
//   async triggerPush() {
//     // 從數據庫或其他地方獲取所有的subscriptions
//     const subscriptions = await fetchSubscriptionsFromDatabase();

//     // 定義要推送的通知內容
//     const notificationPayload = {
//       notification: {
//         title: 'New Notification',
//         body: 'This is the body of the notification',
//         icon: 'assets/icon.png',
//       },
//     };

//     // 向每一個訂閱者發送通知
//     for (const subscription of subscriptions) {
//       await webPush.sendNotification(subscription, JSON.stringify(notificationPayload));
//     }
//   }
}
