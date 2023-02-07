import React from "react";

const Footer = () => {
  return (
    <section className="w-full h-full bg-black/90 text-white/90">
      <div className="w-full h-full text-center py-5">
        <p>
          © {new Date().getFullYear()} Flickr, Inc. All rights reserved. Powered
          by WordPress.com VIP
        </p>
      </div>
    </section>
  );
};

export default Footer;
