import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/ThePepidev', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mathys-dupont-8a934333b/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:mathys.dupont.pro@outlook.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-700" />

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center gap-2 text-sm">
              © {currentYear} Mathys Dupont. Fait avec
              <Heart className="w-4 h-4 text-red-500" />
              à Lille
            </p>
            <p className="text-xs mt-2 opacity-75">
              Développeur passionné par la création d'expériences numériques exceptionnelles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
