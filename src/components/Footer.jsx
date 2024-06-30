import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className="py-6">
      <div className="container mx-auto text-center mb-4">
        <h2 className="text-xl font-semibold">To Connect on social media🚀</h2>
      </div>
      <div className="container mx-auto grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-2 justify-items-center px-4">
        <SocialIcon url="https://www.linkedin.com/in/babar02/" target="_blank" className="hover:scale-110 transition-transform" />
        <SocialIcon url="https://github.com/Babur02" target="_blank" className="hover:scale-110 transition-transform" />
        <SocialIcon url="https://discord.com/users/thequreshi.exe" target="_blank" className="hover:scale-110 transition-transform" />
        <SocialIcon url="https://x.com/Baburqureshi02?t=0fGT1bUGkMCYea58emwOkw&s=09" target="_blank" className="hover:scale-110 transition-transform" />
        <SocialIcon url="https://t.me/Thequreshi" target="_blank" className="hover:scale-110 transition-transform" />
        <SocialIcon url="https://api.whatsapp.com/send?phone=+918871545850" target="_blank" className="hover:scale-110 transition-transform" />
      </div>
    </footer>
  );
}

export default Footer;