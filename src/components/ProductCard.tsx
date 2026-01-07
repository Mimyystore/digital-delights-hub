import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle } from 'lucide-react';

interface ProductOption {
  name: string;
  price: string;
  stock: number;
  period?: string;
}

interface ProductCardProps {
  title: string;
  icon?: React.ReactNode;
  image?: string;
  options: ProductOption[];
  whatsappNumber: string;
}

const getStockStatus = (stock: number) => {
  if (stock === 0) return { class: 'stock-empty', text: 'Esgotado' };
  if (stock <= 3) return { class: 'stock-low', text: `${stock} em estoque` };
  return { class: 'stock-available', text: `${stock} em estoque` };
};

const formatWhatsAppMessage = (productName: string, optionName: string, price: string) => {
  const message = `Olá! Tenho interesse em comprar: ${productName} - ${optionName} por ${price}. Poderia me ajudar?`;
  return encodeURIComponent(message);
};

const ProductCard = ({ title, icon, image, options, whatsappNumber }: ProductCardProps) => {
  const handleBuy = (option: ProductOption) => {
    if (option.stock === 0) return;
    
    const message = formatWhatsAppMessage(title, option.name, option.price);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card-glow bg-card rounded-xl overflow-hidden gradient-border"
    >
      {/* Header with Image */}
      <div className="relative h-40 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-wine to-crimson flex items-center justify-center">
            <div className="text-6xl opacity-30">{icon}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              {icon}
            </div>
            <h3 className="font-display text-xl font-bold text-foreground uppercase tracking-wider">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="p-4 space-y-3">
        {options.map((option, index) => {
          const stockStatus = getStockStatus(option.stock);
          const isOutOfStock = option.stock === 0;

          return (
            <motion.div
              key={index}
              whileHover={!isOutOfStock ? { scale: 1.02 } : {}}
              className={`p-3 rounded-lg bg-muted/50 border border-border/50 ${
                isOutOfStock ? 'out-of-stock' : 'in-stock hover:border-primary/50'
              } transition-all`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm truncate">
                    {option.name}
                    {option.period && (
                      <span className="text-muted-foreground text-xs ml-1">
                        ({option.period})
                      </span>
                    )}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-primary font-bold">{option.price}</span>
                    <span className={`stock-badge ${stockStatus.class}`}>
                      {stockStatus.text}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleBuy(option)}
                  disabled={isOutOfStock}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isOutOfStock
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : 'btn-glow text-primary-foreground'
                  }`}
                >
                  {isOutOfStock ? (
                    <ShoppingCart className="w-4 h-4" />
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">Comprar</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProductCard;
