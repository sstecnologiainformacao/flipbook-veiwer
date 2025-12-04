"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header-fixed" style={{ backgroundColor: '#BB0A4D' }}>
      <div className="header-container">
        <div className="header-logo-wrapper">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={184} 
            height={68}
            className="header-logo"
            priority
          />
        </div>
        <div className="header-avatar-wrapper">
          <Image 
            src="/images/avatar.png" 
            alt="Avatar" 
            width={50} 
            height={50}
            className="header-avatar"
          />
        </div>
      </div>
    </header>
  );
}

