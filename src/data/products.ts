export interface ProductOption {
  name: string;
  price: string;
  stock: number;
  period?: string;
}

export interface Product {
  id: string;
  title: string;
  iconType: 'discord' | 'streaming' | 'ai' | 'accounts';
  image?: string;
  options: ProductOption[];
}

export const products: Product[] = [
  {
    id: 'nitro-link',
    title: 'Nitro Link',
    iconType: 'discord',
    options: [
      { name: 'Nitro Link Trimestral', price: 'R$ 4,49', stock: 70, period: '3 meses' },
      { name: 'Nitro Link Mensal', price: 'R$ 4,50', stock: 3, period: '1 mês' },
    ],
  },
  {
    id: 'conta-nitrada',
    title: 'Conta Nitrada',
    iconType: 'discord',
    options: [
      { name: 'Conta Nitrada Trimestral', price: 'R$ 12,90', stock: 0, period: '3 meses' },
      { name: 'Conta Nitrada Mensal', price: 'R$ 4,99', stock: 0, period: '1 mês' },
      { name: 'Conta Virgem + 30 dias', price: 'R$ 1,29', stock: 0, period: '30 dias' },
    ],
  },
  {
    id: 'contas-antigas',
    title: 'Contas Antigas',
    iconType: 'accounts',
    options: [
      { name: 'Conta de 2016', price: 'R$ 45,00', stock: 0 },
      { name: 'Conta de 2017', price: 'R$ 18,00', stock: 4 },
      { name: 'Conta de 2018', price: 'R$ 13,00', stock: 4 },
      { name: 'Conta de 2019', price: 'R$ 10,00', stock: 0 },
      { name: 'Conta de 2020', price: 'R$ 7,00', stock: 0 },
    ],
  },
  {
    id: 'assinaturas',
    title: 'Assinaturas',
    iconType: 'streaming',
    options: [
      { name: 'Netflix', price: 'R$ 5,00', stock: 5, period: '30 dias' },
      { name: 'Paramount+', price: 'R$ 5,99', stock: 2, period: '30 dias' },
      { name: 'Disney+', price: 'R$ 5,99', stock: 2, period: '30 dias' },
      { name: 'HBO Max Plus', price: 'R$ 5,99', stock: 4, period: '30 dias' },
      { name: 'Crunchyroll', price: 'R$ 4,00', stock: 4, period: '30 dias' },
      { name: 'Amazon Prime', price: 'R$ 4,00', stock: 4, period: '30 dias' },
      { name: 'YouTube Premium + Music', price: 'R$ 4,99', stock: 1, period: '30 dias' },
      { name: 'Canva Pro', price: 'R$ 3,50', stock: 17, period: '30 dias' },
      { name: 'Spotify Premium', price: 'R$ 3,49', stock: 0, period: '30 dias' },
      { name: 'Spotify Premium', price: 'R$ 7,95', stock: 0, period: '3 meses' },
    ],
  },
  {
    id: 'ias',
    title: "IA's",
    iconType: 'ai',
    options: [
      { name: 'ChatGPT Pro', price: 'R$ 14,99', stock: 4, period: '12 meses' },
      { name: 'Google AI Pro', price: 'R$ 5,99', stock: 2, period: '1 mês' },
      { name: 'Perplexity', price: 'R$ 5,99', stock: 3, period: '1 mês' },
    ],
  },
];

export const WHATSAPP_NUMBER = '5533997305062';
