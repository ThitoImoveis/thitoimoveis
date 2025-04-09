import React from 'react';

const SocialShare = ({ title, url }) => {
  const share = (platform) => {
    alert(`Simulando publicação no ${platform}: ${title} (${url})`);
  };

  return (
    <div className="flex space-x-3 mt-4">
      <button onClick={() => share("Facebook")} className="bg-blue-600 text-white px-3 py-1 rounded">Facebook</button>
      <button onClick={() => share("Instagram")} className="bg-pink-500 text-white px-3 py-1 rounded">Instagram</button>
      <button onClick={() => share("YouTube")} className="bg-red-600 text-white px-3 py-1 rounded">YouTube</button>
    </div>
  );
};

export default SocialShare;
