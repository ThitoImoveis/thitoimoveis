import React, { useState } from 'react';

export default function NotificationSettings() {
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(false);

  return (
    <div>
      <h2>Preferências de Notificações</h2>
      <form>
        <label>
          <input type="checkbox" checked={email} onChange={() => setEmail(!email)} />
          Notificações por e-mail
        </label>
        <br />
        <label>
          <input type="checkbox" checked={push} onChange={() => setPush(!push)} />
          Notificações push (quando disponível)
        </label>
      </form>
    </div>
  );
}
