import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications-repository';
import { Notification } from '../../entities/notification';

interface getRecipientNotificationsRequest {
  recipientId: string;
}

interface getRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: getRecipientNotificationsRequest,
  ): Promise<getRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
