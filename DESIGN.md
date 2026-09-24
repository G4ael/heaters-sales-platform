---
name: Servigás Aquecedores
description: Loja de aquecedores a gás com instalação inclusa, no visual quente e fria.
colors:
  laranja-marca: "#EA580C"
  laranja-escuro: "#C2410C"
  pessego: "#FDBA74"
  azul-agua: "#0B4FB3"
  azul-claro: "#E8F0FB"
  azul-noite: "#7FB0F5"
  tinta: "#111111"
  tinta-2: "#55575F"
  tinta-3: "#6A6C74"
  marrom-sobre-laranja: "#3B1606"
  fundo: "#FFFFFF"
  tile: "#F2F2F4"
  tile-2: "#E8E8EC"
  linha: "#E6E6EA"
  linha-forte: "#D2D2D8"
  verde-whatsapp: "#15803D"
  fundo-escuro: "#0E0E10"
  tile-escuro: "#1B1B1F"
typography:
  display:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.4vw, 60px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Unbounded, system-ui, sans-serif"
    fontSize: "clamp(26px, 3vw, 38px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 500
    lineHeight: 1.4
  price:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontFeature: "tnum"
rounded:
  bloco: "28px"
  tile: "20px"
  pilula: "999px"
spacing:
  s1: "8px"
  s2: "16px"
  s3: "24px"
  s4: "32px"
  s5: "48px"
  s6: "64px"
  s7: "96px"
components:
  button-branco:
    backgroundColor: "{colors.fundo}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pilula}"
    padding: "0 28px"
    height: "52px"
  button-preto:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.fundo}"
    rounded: "{rounded.pilula}"
    padding: "0 28px"
    height: "52px"
  button-azul:
    backgroundColor: "{colors.azul-agua}"
    textColor: "{colors.fundo}"
    rounded: "{rounded.pilula}"
    padding: "0 28px"
    height: "52px"
  button-carrinho-redondo:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.fundo}"
    rounded: "{rounded.pilula}"
    size: "44px"
  button-carrinho-redondo-hover:
    backgroundColor: "{colors.laranja-marca}"
    textColor: "{colors.tinta}"
  button-fechar-pedido:
    backgroundColor: "{colors.verde-whatsapp}"
    textColor: "{colors.fundo}"
    rounded: "{rounded.pilula}"
    height: "48px"
  card-produto-imagem:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
  input-busca:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pilula}"
    height: "52px"
    padding: "0 20px 0 50px"
  filtro-ativo:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.fundo}"
    rounded: "{rounded.pilula}"
    height: "40px"
  selo-desconto:
    backgroundColor: "{colors.laranja-marca}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pilula}"
    padding: "4px 10px"
---

# Design System: Servigás Aquecedores

## Overview

**Creative North Star: "O Misturador"**

O site é o registro do chuveiro: quente de um lado, fria do outro. O laranja da marca é o quente e aparece como bloco inteiro no herói, nunca como um detalhe tímido. O azul-água é a fria e aparece no bloco onde o cliente diz quantos chuveiros liga. Entre os dois, o resto da página é branco, cinza-claro e preto, para que produto, preço e botão sejam lidos sem esforço.

A forma é macia e generosa: blocos com raio de 28px, botões em pílula, cartões de produto sobre um fundo cinza-claro, sem borda. A densidade é de loja: na mesma rolagem estão a escolha por chuveiros, a faixa escura dos diferenciais, as promoções e o catálogo com filtros laterais. O sistema nasceu da fusão de dois modelos escolhidos pelo dono: o visual do "Quente e fria" com as partes de loja do "Oficina".

A página fala em chuveiros e banhos antes de falar em litros por minuto, e todo caminho termina no WhatsApp com o pedido escrito.

**Key Characteristics:**
- Herói em bloco laranja cheio, com os aquecedores recortados em cima.
- Bloco azul com o controle de chuveiros e o preço de entrada de cada faixa.
- Faixa preta arredondada com os quatro diferenciais reais da loja.
- Cartões de produto sem borda: imagem sobre tile cinza, coração azul, carrinho preto redondo.
- Unbounded só em títulos; Onest em todo o resto, preços com números tabulares.

## Colors

Uma cor quente, uma fria e neutros sem tom; o verde existe só para o WhatsApp.

### Primary
- **Laranja da Marca** (#EA580C): o bloco do herói, os selos de desconto, os ícones da faixa escura, a ponta quente do controle de chuveiros e o hover do botão de carrinho. É a cor oficial da Servigás e não muda.
- **Laranja Escuro** (#C2410C): reserva para texto laranja sobre branco quando for preciso contraste (5,2:1).

### Secondary
- **Azul-Água** (#0B4FB3): o bloco "Qual serve na sua casa?", a bolha "Instalação inclusa", o coração de favorito, os ícones de gota, o contorno de foco e o contador do carrinho. No tema escuro vira **Azul-Noite** (#7FB0F5) nos ícones e no foco.
- **Azul Claro** (#E8F0FB): fundo dos chips de filtro ativo.

### Neutral
- **Tinta** (#111111): texto, botões pretos, botão de carrinho, faixa dos diferenciais e rodapé.
- **Tinta 2** (#55575F) e **Tinta 3** (#6A6C74): texto de apoio e preço riscado, ambos acima de 4,5:1 sobre branco e sobre o tile.
- **Marrom sobre Laranja** (#3B1606): texto de apoio dentro do bloco laranja.
- **Tile** (#F2F2F4) e **Tile 2** (#E8E8EC): fundo das imagens de produto, da busca, dos filtros e da faixa superior; o segundo é o hover.
- **Linha** (#E6E6EA) e **Linha Forte** (#D2D2D8): divisórias finas e contornos de botão secundário.
- **Verde WhatsApp** (#15803D): só no botão "Fechar pedido no WhatsApp" e no botão flutuante.

### Named Rules
**A Regra do Misturador.** Laranja e azul nunca se misturam numa mesma superfície: cada um tem o seu bloco. O único lugar onde se encontram é o trilho do controle de chuveiros, que vai do azul ao laranja.

**A Regra do Verde Único.** Verde é o WhatsApp. Nenhum outro elemento usa verde.

## Typography

**Display Font:** Unbounded (com system-ui)
**Body Font:** Onest (com system-ui)

**Character:** Unbounded é larga e arredondada, com a mesma maciez dos blocos, e aparece só em títulos curtos. Onest é uma grotesca clara e neutra que carrega nomes de produto, preços e toda a interface.

### Hierarchy
- **Display** (600, clamp(34px, 4.4vw, 60px), 1.04, -0.04em): só o título do herói.
- **Headline** (600, clamp(26px, 3vw, 38px), 1.08, -0.03em): títulos de seção ("Qual serve na sua casa?", "Baixou o preço", "A loja") e o título do rodapé.
- **Title** (Onest 600, 17px): nomes dos diferenciais e títulos dentro de blocos.
- **Body** (Onest 400, 16px, 1.55): textos corridos, com no máximo 48ch nos blocos.
- **Label** (Onest 500, 13.5px): informação do cartão (banhos e vazão), filtros e faixa superior.
- **Preço** (Onest 700, 19px nos cartões e 32–34px no produto e na promoção, números tabulares).

### Named Rules
**A Regra do Título Curto.** Unbounded só em frases de até seis palavras. Nome de produto, preço e botão são sempre Onest.

## Layout

Largura máxima de 1280px, com respiro lateral de 16px no celular e de 32px a partir de 760px. A escala de espaço é de 8px (8/16/24/32/48/64/96), e as seções são separadas por 64px. Grade de produtos: 2 colunas no celular, 3 a partir de 760px e 4 a partir de 1100px. A partir de 1000px, a loja ganha uma coluna de filtros de 250px, fixa ao rolar. O herói divide em duas colunas a partir de 900px; abaixo disso, o texto vem primeiro e a imagem depois. A faixa dos diferenciais tem título à esquerda e os quatro itens em 2×2 a partir de 1100px.

## Elevation & Depth

O sistema é plano por padrão: a profundidade vem do contraste entre blocos (laranja, azul, preto e tile cinza) e não de sombras. Sombras aparecem em três situações: o botão branco do herói, a pílula de preço e a bolha azul sobre a imagem, e o cartão de produto no hover.

### Shadow Vocabulary
- **Pílula flutuante** (`box-shadow: 0 10px 24px -10px rgba(0,0,0,.4)`): pílula de preço e botão branco sobre o laranja.
- **Bolha** (`box-shadow: 0 18px 30px -18px rgba(0,0,0,.45)`): bolha azul "Instalação inclusa".
- **Cartão em hover** (`box-shadow: 0 0 0 1px #E6E6EA, 0 18px 40px -24px rgba(0,0,0,.35)`): o cartão ganha fundo branco e sobe um pouco.
- **Recorte do produto** (`filter: drop-shadow(0 28px 24px rgba(59,22,6,.35))`): sombra marrom dos aquecedores recortados sobre o laranja.

### Named Rules
**A Regra do Plano em Repouso.** Nenhum cartão tem sombra parado. A sombra é resposta a hover ou marca um elemento que flutua sobre uma foto.

## Shapes

Três raios e nada mais: 28px em blocos (herói, bloco azul, faixa preta, promoção, rodapé, filtros), 20px em áreas de imagem dentro deles e pílula (999px) em botões, busca, filtros, selos e contadores. Não há bordas visíveis em cartões: a separação é feita por fundo. Ícones de traço 1,8px, desenhados à mão, num único estilo.

## Components

### Buttons
- **Shape:** pílula (999px), altura de 52px nas chamadas principais e de 44–48px nos botões internos.
- **Branco:** fundo branco e texto #111, com a sombra de pílula flutuante; é a ação principal sobre o laranja.
- **Preto:** fundo #111 e texto branco; é a ação principal sobre fundos claros ("Adicionar ao pedido", "Ver a loja"). No tema escuro inverte.
- **Contorno:** transparente, com anel interno de 1,5px em Linha Forte que escurece no hover ("Ver detalhes").
- **Carrinho redondo:** 44px, preto; no hover vira laranja com ícone preto e cresce 8%.
- **Hover / Focus:** botões sobem 2px no hover. O foco é um contorno azul de 3px com 3px de afastamento.

### Chips e filtros
- **Filtro lateral:** linha em pílula; o ativo fica preto com texto branco e a contagem aparece à direita com 60% de opacidade.
- **Categoria (celular):** pílula cinza com a imagem da categoria num círculo branco; a ativa fica preta.
- **Chip de filtro aplicado:** azul-claro com texto azul e um X para remover.

### Cards / Containers
- **Cartão de produto:** sem borda nem fundo em repouso. A imagem fica num tile cinza de 20px de raio e proporção quadrada. Coração azul no canto superior esquerdo, selo laranja de desconto no direito. Abaixo vêm o nome (2 linhas), a linha "2 banhos · 21 L/min" com ícone de gota, o preço e o carrinho redondo.
- **Blocos:** raio de 28px, com padding interno de 32px a 64px conforme a largura.

### Inputs / Fields
- **Busca:** pílula cinza (tile) de 52px, com lupa à esquerda; no foco ganha um anel azul de 3px.
- **Ordenar:** select na mesma pílula cinza.

### Navigation
- **Header:** fixo no topo, com fundo branco translúcido e desfoque. Links de texto à esquerda com sublinhado azul que cresce no hover, logo no centro e uma pílula cinza com favoritos, busca, tema e carrinho à direita. No celular, o logo vai para a esquerda e o botão de tema some.

### Controle de chuveiros (componente assinatura)
Bloco azul com o número grande (Unbounded), um range de 1 a 3 com trilho em degradê do azul-claro ao laranja e agulha branca cujo miolo acompanha a faixa (azul, pêssego, laranja), e três linhas-botão com o preço de entrada de cada faixa. A escolha troca os três cartões recomendados ao lado.

## Do's and Don'ts

### Do:
- **Do** usar o laranja #EA580C como bloco inteiro no herói e como detalhe só em selos, ícones da faixa escura e hover do carrinho.
- **Do** mostrar quantos banhos o aquecedor atende ("2 banhos · 21 L/min") em todo cartão de aquecedor.
- **Do** manter os preços em Onest com números tabulares e o preço riscado em Tinta 3.
- **Do** terminar todo fluxo no botão verde do WhatsApp.

### Don't:
- **Don't** anunciar parcelamento: o pagamento é combinado pelo WhatsApp (confirmado pelo dono).
- **Don't** inventar "mais vendidos", avaliações, depoimentos ou prazo de promoção; o site só mostra destaque e desconto que vêm do cadastro.
- **Don't** colocar rótulo pequeno acima de título (eyebrow); o título fala sozinho e a marca vai abaixo do nome.
- **Don't** usar verde fora do WhatsApp, nem misturar laranja e azul na mesma superfície.
- **Don't** pôr o produto numa caixa escura sobre o laranja; o aquecedor fica recortado, direto na cor.
