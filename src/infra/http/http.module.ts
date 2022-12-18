import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from '@app/use-cases/errors/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@app/use-cases/errors/cancel-notification';
import { CountRecipientNotifications } from '@app/use-cases/errors/count-recipient-notifications';
import { GetRecipientNotifications } from '@app/use-cases/errors/get-recipient-notifications';
import { ReadNotification } from '@app/use-cases/errors/read-notification';
import { UnreadNotification } from '@app/use-cases/errors/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
