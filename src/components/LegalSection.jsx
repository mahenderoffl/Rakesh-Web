import React from 'react';
import { HiX } from 'react-icons/hi';

const LegalModal = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      <div className="relative bg-[#1A1A1A] w-full max-w-2xl max-h-[80vh] rounded-3xl overflow-hidden border border-gold/20 shadow-2xl animate-scaleIn flex flex-col">
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <h2 className="text-2xl font-black text-gold-gradient tracking-tight">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <HiX size={24} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-gray-400 text-sm leading-relaxed space-y-6">
          {content}
        </div>
        <div className="p-6 bg-black/40 text-center">
          <button onClick={onClose} className="text-gold font-bold text-xs uppercase tracking-widest">Close Document</button>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicy = ({ isOpen, onClose }) => {
  const content = (
    <>
      <p>Your privacy is important to us. It is Mangya Footwear's policy to respect your privacy regarding any information we may collect from you across our website.</p>
      <h3 className="text-white font-bold">1. Information We Collect</h3>
      <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
      <h3 className="text-white font-bold">2. Use of Information</h3>
      <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft.</p>
      <h3 className="text-white font-bold">3. Third-party Access</h3>
      <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
      <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.</p>
    </>
  );
  return <LegalModal title="Privacy Policy" content={content} isOpen={isOpen} onClose={onClose} />;
};

export const TermsConditions = ({ isOpen, onClose }) => {
  const content = (
    <>
      <p>Welcome to Mangya Footwear. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Mangya Footwear if you do not agree to all of the terms and conditions stated on this page.</p>
      <h3 className="text-white font-bold">1. License</h3>
      <p>Unless otherwise stated, Mangya Footwear and/or its licensors own the intellectual property rights for all material on Mangya Footwear. All intellectual property rights are reserved.</p>
      <h3 className="text-white font-bold">2. User Comments</h3>
      <p>This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information. Mangya Footwear does not filter, edit, publish or review Comments prior to their presence on the website.</p>
      <h3 className="text-white font-bold">3. Product Orders</h3>
      <p>All orders placed through the website are subject to availability and acceptance. We reserve the right to refuse or cancel any order for any reason.</p>
    </>
  );
  return <LegalModal title="Terms & Conditions" content={content} isOpen={isOpen} onClose={onClose} />;
};
