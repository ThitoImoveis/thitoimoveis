import React from 'react';

export default function NotificationBell({ count = 3 }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span role="img" aria-label="notificações">🔔</span>
      {count > 0 && (
        <span style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '12px'
        }}>
          {count}
        </span>
      )}
    </div>
  );
}
