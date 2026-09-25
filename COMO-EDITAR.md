# Como gerenciar a loja Servigás

## 🏪 Produtos: agora é pelo sistema de gestão!

O catálogo do site é gerenciado pela aba **Loja** do sistema interno de
gestão (o mesmo onde ficam vendas, estoque e clientes). Lá você pode, com
login e senha:

- ➕ Adicionar, ✏️ editar e ➖ remover produtos
- 🖼️ Subir **até 4 fotos por produto** (comprimidas sozinhas para o site
  carregar rápido). A 1ª foto é a **capa** — aparece na lista da loja; as
  outras viram o **carrossel** na página do produto, para o cliente ver
  todos os ângulos. Use as setinhas embaixo de cada foto para mudar a ordem.
- 🏷️ Colocar em **promoção** (preço antigo riscado) e dar selo **Destaque**.
  Produto com preço antigo entra sozinho no bloco **"Baixou o preço"**,
  com o % de desconto calculado.
- ⭐ Escolher o produto grande do **"Baixou o preço"**: no cadastro do
  produto (com preço antigo preenchido), marque **Principal do "Baixou o
  preço"**. Só um fica marcado por vez. Sem nenhum marcado, o site usa o de
  maior desconto.
- 🚿 Escolher os aquecedores do **"Qual serve na sua casa?"**: no cadastro do
  aquecedor, marque **Aparece no "Qual serve na sua casa?"**. O site mostra
  até 3 marcados por faixa (1, 2 ou 3+ chuveiros), do menor preço para o
  maior. Enquanto nenhum estiver marcado, o site escolhe sozinho pela vazão.
- 📷 **Fotos de instalações**: na aba Loja, troque para **Fotos de
  instalações** para subir fotos de aquecedores que a equipe instalou, com
  legenda opcional, ordem, ocultar e remover. Elas aparecem em carrossel no
  bloco preto **"Quem vende é quem instala"**. Sem fotos, o bloco mostra só
  o título. Fotos na horizontal ficam melhores.
- 👁️ **Ocultar/mostrar** um produto no site sem precisar apagar
- Preço vazio = aparece "**Sob consulta**" com botão de orçamento

Tudo o que você salva lá **aparece no site na hora** — sem commit, sem
deploy, sem mexer em código.

> Primeira vez? É preciso rodar o script `supabase/loja.sql` (fica na pasta
> do sistema de gestão) no SQL Editor do painel do Supabase — uma vez só.

### 🚿 Escolha por chuveiros ("Qual serve na sua casa?")

O site descobre quantos banhos cada aquecedor atende pela **vazão** que está
nas especificações. Para um aquecedor aparecer nessa escolha (marcado ou
não), escreva nas especificações uma linha assim:

```
Vazão: 21 L/min
```

Até 16 L/min = 1 chuveiro · de 17 a 22 = 2 chuveiros · 23 ou mais = 3 ou
mais. É uma estimativa, e o site avisa que a visita técnica confirma.

A lista de produtos que existe dentro do `index.html` é só uma **reserva de
demonstração**: aparece apenas se o banco estiver fora do ar.

## 📱 Número do WhatsApp

Já está configurado: **(47) 9 9150-0164**. Para trocar, procure no
`index.html`:

```
const WHATSAPP = '5547991500164';
```

e ponha o novo número só com dígitos e `55` na frente (55 + DDD + número).
Troque também o número escrito na faixa cinza do topo e no rodapé.

## 🖼️ Foto do topo da página

Os aquecedores que aparecem sobre o bloco laranja ficam em
`imagens/aquecedores-recorte.webp`: é um recorte **sem fundo** (transparente)
feito a partir de `imagens/banner-aquecedores.webp`. Para trocar, salve uma
nova imagem com fundo transparente (PNG ou WebP, uns 900 px de largura) com
o mesmo nome.

## 🎨 Cores e visual

O visual escolhido é o **"Quente e fria"**: laranja da marca no topo, azul no
bloco de escolha por chuveiros, preto nos botões. As cores, fontes e medidas
ficam no começo do `<style>` do `index.html`, em `:root` (por exemplo
`--laranja:#EA580C`). As regras do visual estão explicadas no `DESIGN.md`.
O site não anuncia parcelamento: o pagamento é combinado pelo WhatsApp.

## 🚀 Publicar mudanças no código (visual, textos fixos...)

O site está conectado ao GitHub: depois de editar, basta fazer **commit**
e **sincronizar (push)** — no VS Code, botão "Sync Changes". A Vercel
percebe a mudança e atualiza o site sozinha em ~30 segundos.
(Lembrando: mudanças de **produtos** não precisam disso — são pela aba Loja.)

## 🔜 Próximo passo combinado

- **Pagamento online**: Pix e cartão via provedor (ex.: Mercado Pago) — o
  dinheiro cai direto na conta, sem o site guardar dados de cartão.
