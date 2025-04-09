import React from 'react';

const mockNotifications = [
  { id: 1, title: 'Novo lead recebido!', date: '2025-04-06', read: false },
  { id: 2, title: 'Seu imóvel foi visualizado 10 vezes hoje.', date: '2025-04-05', read: true },
];

export default function NotificationsList() {
  return (
    <div>
      <h2>Histórico de Notificações</h2>
      <ul>
        {mockNotifications.map((notif) => (
          <li key={notif.id} style={{ fontWeight: notif.read ? 'normal' : 'bold' }}>
            <p>{notif.title}</p>
            <span>{notif.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
