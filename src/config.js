// AJUSTAR: número só com dígitos, país + DDD
export const whatsapp = '5511900000000';

export const mensagens = {
  geral: 'Olá! Vi seu site e quero conversar sobre um projeto.',
  plano: (nome) => `Olá! Vi o plano "${nome}" no seu site e queria entender melhor.`,
};

export function linkWa(chave) {
  const texto = chave === 'geral' ? mensagens.geral : mensagens.plano(chave);
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`;
}
