import { Notification, NotificationProps } from '@app/entities/notification';
import { Content } from '@app/entities/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova Notificação'),
    recipientId: 'example-recipient-id-2',
    ...override,
  });
}
