import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { WHATSAPP_NUMBER } from '@/data/products';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header whatsappNumber={WHATSAPP_NUMBER} />
      <Hero whatsappNumber={WHATSAPP_NUMBER} />
      <ProductsSection />
      <Footer whatsappNumber={WHATSAPP_NUMBER} />
      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </div>
  );
};

export default Index;
