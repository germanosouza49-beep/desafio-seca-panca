# Layout Specification - Desafio Seca Pança (Thais Araujo)

## Linguagem Visual

### Cores
- **Primária (Brand):** `#D368F9` (Orchid/Fuchsia) - Usada em botões primários, destaques e ícones.
- **Primária Dark:** `#A21CAF` (Purple) - Usada em hovers e textos de destaque forte.
- **Secundária (Dark):** `#111827` (Almost Black) - Usada em headlines e fundos escuros.
- **Accent (Urgency):** `#F59E0B` (Gold/Amber) - Usada em datas e alertas de urgência.
- **Background Main:** `#FFFFFF` (White) - Fundo padrão.
- **Background Alt:** `#F9FAFB` (Gray 50) - Fundo alternativo para seções.
- **Texto Principal:** `#1F2937` (Gray 900) - Leitura principal.
- **Texto Corpo:** `#4B5563` (Gray 600) - Parágrafos e descrições.
- **Bordas:** `#E5E7EB` (Gray 200).

### Tipografia
- **Headline (Display):** `Playfair Display`, pesos 400 (regular), 600 (semi-bold), 700 (bold). Itálico usado para ênfase (ex: *5 Dias de Foco Total*).
- **Body (Sans):** `Outfit`, pesos 300 (light), 400 (regular), 500 (medium), 700 (bold).
- **Base Size:** 16px.

### Espaçamentos
- **Container:** `1200px` max-width (90% width).
- **Section Padding:** `6rem` (96px) vertical padrão.
- **Grid Gap:** `2rem` (32px) a `4rem` (64px) dependendo da seção.

### Tom de Animação
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Suave e premium).
- **Duration:** 800ms a 1000ms.
- **Style:** `Fade Up` (Sutil, de baixo para cima) e `Slide In` (Lateral suave).
- **Scroll:** Scroll-triggered via AOS (Animate On Scroll) com `disableMutationObserver: true`.

---

## Seção 1: Barra Superior (Sticky Bar)

### Conteúdo
- Texto: "Desafio Seca Pança: 10 a 14 de Janeiro, 19:30h - Você consegue estar presente nas 5 lives?"

### Layout
- **Estrutura:** Faixa horizontal full-width fixa no topo (opcional sticky).
- **Alinhamento:** Centralizado.
- **Altura:** 40px a 50px.

### Tipografia Específica
- **Texto:** `Outfit`, 14px, peso 500, uppercase, tracking `0.05em`.

### Cores Específicas
- **Background:** Gradient Linear Right (`#D368F9` to `#A21CAF`).
- **Texto:** `#FFFFFF`.

### Animações
- **Entrada:** SlideDown (0.5s) após 1s de delay.

---

## Seção 2: Hero

### Conteúdo
- **Tag:** "MÉTODO COMPROVADO"
- **Data:** "DATA: 10 A 14 DE JANEIRO (AO VIVO)"
- **Headline:** "Desafio Seca Pança" + "5 Dias de Foco Total"
- **Subheadline:** "De 10 a 14 de janeiro eu vou te guiar ao vivo, todo dia, numa troca simples de alimentos. Sem passar fome, sem cardápio caro..." (texto completo da copy)
- **Barra de Lotes:** "LOTE 1: R$37 (ABERTO) | LOTE 2: R$57 (EM BREVE)"
- **CTA:** "VOU ESTAR PRESENTE - QUERO ENTRAR POR R$37"
- **Texto abaixo CTA:** "Próximo Lote: R$57,00 (EM BREVE)"
- **Pilares (Lateral):** 
    1. Interromper Metabólico
    2. Regra da Substituição
    3. Fim do Cardápio Caro

### Layout
- **Estrutura:** Split-screen (Texto Esquerda 60% / Pilares Direita 40%).
- **Desktop:** Grid de 2 colunas.
- **Mobile:** Coluna única (Pilares abaixo do CTA).
- **Background:** `Radial Gradient` sutil branding nos cantos. Shape decorativo `blur` no topo direito.

### Tipografia Específica
- **Headline:** `Playfair Display`, 3.5rem (mobile) a 4.5rem (desktop), peso 700. Span itálico na segunda linha cor Primária.
- **Subheadline:** `Outfit`, 1.125rem, peso 300, leading 1.6.

### Elementos Visuais
- **Pillars Cards:** Estilo "Glass" (vidro fosco). Fundo branco com 80% opacidade + backdrop-filter blur(10px). Borda esquerda grossa (4px) cor Primária.

### Animações
- **Sequência de Entrada:** FadeUp escalonado nos elementos de texto (Headline -> Sub -> CTA).
- **Pilares:** SlideInRight escalonado (1, 2, 3).
- **Background Blob:** Pulse lento e infinito (8s).

### Interatividade
- **CTA Hero:** Efeito de brilho "shimmer" passando em loop a cada 5s. Hover: Scale 1.05 + Shadow colorido.

---

## Seção 3: Depoimentos (Prova Social)

### Conteúdo
- **Título:** "Veja os depoimentos do último desafio"
- **Subtítulo:** "Resultados reais de quem fez o método da Thais Araujo"
- **Cards:** 3 Depoimentos (Ana Paula, Carina S., Maria Luiza).
- **CTA Secundário:** "QUERO ENTRAR NO DESAFIO"

### Layout
- **Estrutura:** Grid de 3 colunas (Cards).
- **Cards:** Estilo minimalista, fundo cinza muito claro (`#F9FAFB`), bordas arredondadas (16px).
- **Aspas:** Ícone de aspas gigante, opacidade 10%, cor primária, no fundo do card.

### Tipografia Específica
- **Título Seção:** `Playfair Display`, 2.5rem, peso 700, centralizado.
- **Texto Depoimento:** `Outfit`, 1rem, itálico, cinza escuro.
- **Autor:** `Outfit`, peso 700, cor Primária Dark.

### Animações
- **Cards:** FadeUp com delay progressivo (0ms, 100ms, 200ms).

---

## Seção 4: Esse Desafio É Pra Você? (Qualificação)

### Conteúdo
- **Título:** "Antes de entrar, leia isso:"
- **Coluna Não é para você (X):**
  - "Você quer comprar e assistir gravado 'quando der'"
  - "Não consegue separar 30 minutos por dia às 19:30h"
  - "Está procurando mágica sem compromisso"
- **Coluna É para você (Check):**
  - "Consegue estar ao vivo de 10 a 14 de janeiro, às 19:30h"
  - "Está disposta a aplicar no mesmo dia o que aprender"
  - "Quer resultado real, não só conteúdo pra acumular"

### Layout
- **Estrutura:** Grid 2 Colunas com borda divisória ou gap largo.
- **Lado Esquerdo (Negativo):** Ícones 'X' vermelhos/cinzas. Fundo levemente avermelhado ou cinza.
- **Lado Direito (Positivo):** Ícones 'Check' verdes/primários. Fundo levemente colorido (tom da marca bem suave) ou branco com borda destaque.
- **Visual:** Cards comparativos lado a lado ou lista vertical estilizada.

### Cores Específicas
- **Ícone X:** `#EF4444` (Red 500).
- **Ícone Check:** `#10B981` (Green 500) ou `#D368F9` (Brand).
- **Fundo "É pra você":** `rgba(211, 104, 249, 0.05)`.

### Animações
- **Entrada:** Os dois blocos entram deslizando das laterais (Esquerda -> Centro, Direita -> Centro) ou FadeUp simples.

---

## Seção 5: Como Funciona (O Método)

### Conteúdo
- **Título:** "Como funcionam os 5 dias do Seca Pança"
- **Subtítulo:** "ANOTE: 10 A 14 DE JANEIRO"
- **Cards (Steps):**
  1. "Você entra na live às 19:30h"
  2. "Recebe a missão do dia NA HORA"
  3. "Aplica e sente no corpo"
- **CTA:** "QUERO ME COMPROMETER COM OS 5 DIAS"

### Layout
- **Estrutura:** Linha do tempo horizontal (Desktop) ou Vertical (Mobile).
- **Conector:** Linha tracejada conectando os passos.
- **Cards:** Ícone numérico grande (1, 2, 3) no topo ou esquerda.

### Tipografia Específica
- **Número do Passo:** `Playfair Display`, 4rem, cor Primária (opacidade 20%) ou Outline.

### Animações
- **Timeline:** A linha conectora se "desenha" (width 0% -> 100% ou height) conforme a rolagem.
- **Steps:** FadeUp sequencial.

---

## Seção 6: Por Que Você Desiste? (Dor)

### Conteúdo
- **Título:** "Por que você desiste?"
- **Subtítulo:** "Os métodos tradicionais foram feitos para falhar."
- **Cards:**
  1. Passar Fome
  2. Comida Cara
  3. Efeito Sanfona

### Layout
- **Background:** Inverter para escuro ou usar cor Primária Dark (`#A21CAF`) para quebrar o ritmo visual. Fonte branca/clara.
- **Cards:** Fundo branco (contraste alto), shadow suave.
- **Ícones:** Ilustrações lineares simples representando cada dor.

### Cores Específicas
- **Background Seção:** `#2C0834` (Variação escura profunda do roxo) para dar peso e seriedade.
- **Texto Título:** `#FFFFFF`.
- **Card Background:** `#FFFFFF`.
- **Texto Card:** Dark Gray.

### Animações
- **Seção:** Fade in.
- **Cards:** Flip 3D ou Scale Up suave ao rolar.

---

## Seção 7: Escolha Seu Lote (Pricing)

### Conteúdo
- **Título:** "Escolha seu lote"
- **Alerta:** "ATENÇÃO: A virada de lote é automática."
- **Cards de Preço:**
  - **Lote 1 (Destaque):** R$ 37,00 - "ÚLTIMAS VAGAS"
  - **Lote 2:** R$ 57,00 - "BLOQUEADO" (Cinza/Opaco)
  - **Lote 3:** R$ 67,00 - "BLOQUEADO" (Cinza/Opaco)
- **Rodapé Preço:** "Pagamento 100% Seguro..."

### Layout
- **Grids:** 3 Cards lado a lado. O Card do meio (ou o ativo - Lote 1) deve ser maior ou estar em destaque (scale 1.1).
- **Highlight:** Card Lote 1 com borda colorida e selo "Recomendado" ou "Aberto".
- **Locked:** Cards 2 e 3 com visual desabilitado (tons de cinza, cadeado ícone).

### Interatividade
- **Botão Compra:** Hover agressivo (cor muda, cresce) para incentivar o clique. Botão pulsando levemente.

---

## Seção 8: Biografia (Autoridade)

### Conteúdo
- **Foto:** Thais Araujo (Recorte profissional, fundo transparente ou foto em círculo).
- **Nome:** "Com Thais Araujo"
- **Qualificação:** "NUTRICIONISTA E PSICÓLOGA (PSICONUTRI)"
- **Lista:** 20 anos exp, 10k alunas, Método Intestino Livre, Autora livro.
- **Citação:** "Criei o Desafio..."

### Layout
- **Estrutura:** Imagem à Esquerda (ou Direita), Texto ao lado.
- **Estilo:** Elegante. Foto preto e branco ou com filtro roxo suave, tornando-se colorida no hover (opcional).

### Tipografia
- **Nome:** `Playfair Display`, grande.
- **Qualificação:** Uppercase, tracking espaçado.

---

## Seção 9: Garantia

### Conteúdo
- **Selo:** Imagem de selo "7 Dias de Garantia".
- **Título:** "Garantia Blindada de 7 Dias"
- **Texto:** "Entre, assista no dia 10..."
- **CTA:** "QUERO ENTRAR SEM RISCO"

### Layout
- **Background:** Fundo cinza claro ou caixa com borda dourada/primária. Centralizado.
- **Ícone:** Selo de garantia SVG animado (girando devagar).

---

## Seção 10: FAQ (Dúvidas)

### Conteúdo
- 4 Perguntas e Respostas (Accordion).

### Layout
- **Estilo:** Accordion clean. Linha fina separando itens. Seta que gira ao abrir.
- **Comportamento:** Apenas um aberto por vez.

### Interatividade
- **Click:** SlideDown suave do conteúdo da resposta. Cor do título muda para Primária quando ativo.

---

## Seção 11: Micro-Compromisso & Footer

### Conteúdo
- **Checkbox:** "Confirmo que consigo estar ao vivo..."
- **CTA Final:** Botão de compra.
- **Copyright:** Texto simples.

### Layout
- **Checkbox:** Estilizado (grande), não nativo do browser.
- **Logos:** Logos de pagamento abaixo do botão.
- **Footer:** Simples, fundo escuro, texto pequeno branco/cinza.

---

## Detalhes Globais & Exigências

### Responsividade
- **Mobile First:** Todo o design deve funcionar perfeitamente em telas pequenas (padding reduzido, fontes ajustadas).
- **Touch Targets:** Botões e links com área de toque mínima de 44px.

### Imagens
- Usar imagens da pasta `/images` via CDN Netlify.
- Todas com `loading="lazy"` (exceto Hero, que é `eager`).
- `alt` tags descritivas sempre.

### Scripts
- `AOS` para animações de scroll.
- `intl-tel-input` para formulários (se houver input de telefone).
- JavaScript Vanilla para lógica de Accordion e Timers.
