import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  whatsappNumber: string;
}

const Footer = ({ whatsappNumber }: FooterProps) => {
  const handleContact = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <footer id="sobre" className="relative py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold gradient-text mb-4">
              STREAMING STORE
            </h3>
            <p className="text-muted-foreground text-sm">
              Sua loja confiável para acesso a plataformas de streaming e serviços premium.
              Qualidade e segurança em todas as transações.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <button
                  onClick={handleContact}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Suporte
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Contato
            </h4>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleContact}
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white"
              >
                <Instagram className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por Streaming Store
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
