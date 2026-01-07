import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import DiscordIcon from './DiscordIcon';
import { Tv, Bot, Clock } from 'lucide-react';
import { products, WHATSAPP_NUMBER } from '@/data/products';

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'discord':
      return <DiscordIcon className="w-6 h-6" />;
    case 'streaming':
      return <Tv className="w-6 h-6" />;
    case 'ai':
      return <Bot className="w-6 h-6" />;
    case 'accounts':
      return <Clock className="w-6 h-6" />;
    default:
      return <Tv className="w-6 h-6" />;
  }
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Nossos Produtos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha entre nossa variedade de produtos premium com os melhores preços.
            Clique em comprar para ser redirecionado ao WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard
                title={product.title}
                icon={getIcon(product.iconType)}
                image={product.image}
                options={product.options}
                whatsappNumber={WHATSAPP_NUMBER}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
