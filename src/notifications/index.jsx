import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotificationsList from './NotificationsList';
import NotificationSettings from './NotificationSettings';

export default function NotificationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NotificationsList />} />
      <Route path="/configuracoes" element={<NotificationSettings />} />
    </Routes>
  );
}
