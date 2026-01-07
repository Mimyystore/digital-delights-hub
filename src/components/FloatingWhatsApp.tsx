import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}

const FloatingWhatsApp = ({ whatsappNumber }: FloatingWhatsAppProps) => {
  const handleClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações sobre os produtos.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-400 transition-colors animate-pulse-glow"
      style={{ '--tw-shadow-color': 'rgb(34 197 94 / 0.3)' } as React.CSSProperties}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.button>
  );
};

export default FloatingWhatsApp;
