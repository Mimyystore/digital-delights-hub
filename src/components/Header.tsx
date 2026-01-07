import { motion } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  logo?: string;
  whatsappNumber: string;
}

const Header = ({ logo, whatsappNumber }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContact = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os produtos disponíveis.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            {logo ? (
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-wine to-crimson flex items-center justify-center">
                <span className="font-display font-bold text-foreground">S</span>
              </div>
            )}
            <span className="font-display text-xl font-bold gradient-text hidden sm:block">
              STREAMING STORE
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#produtos" className="text-muted-foreground hover:text-foreground transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContact}
              className="btn-glow px-4 py-2 rounded-lg text-primary-foreground font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Contato
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#produtos"
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Produtos
              </a>
              <a
                href="#sobre"
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre
              </a>
              <button
                onClick={handleContact}
                className="btn-glow px-4 py-2 rounded-lg text-primary-foreground font-semibold flex items-center gap-2 w-fit"
              >
                <MessageCircle className="w-4 h-4" />
                Contato
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
