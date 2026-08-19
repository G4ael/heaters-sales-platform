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
- 🏷️ Colocar em **promoção** (preço antigo riscado) e dar selo **Destaque**
- 👁️ **Ocultar/mostrar** um produto no site sem precisar apagar
- Preço vazio = aparece "**Sob consulta**" com botão de orçamento

Tudo o que você salva lá **aparece no site na hora** — sem commit, sem
deploy, sem mexer em código.

> Primeira vez? É preciso rodar o script `supabase/loja.sql` (fica na pasta
> do sistema de gestão) no SQL Editor do painel do Supabase — uma vez só.

A lista de produtos que existe dentro do `index.html` é só uma **reserva de
demonstração**: aparece apenas se o banco estiver fora do ar.

## 📱 Número do WhatsApp

Já está configurado: **(47) 9 9150-0164**. Para trocar, procure no
`index.html`:

```
const WHATSAPP = '5547991500164';
```

e ponha o novo número só com dígitos e `55` na frente (55 + DDD + número).
Troque também o texto que aparece na faixa do topo e no rodapé.

## 🖼️ Banner da página inicial

A foto dos aquecedores fica em `imagens/banner-aquecedores.webp` (telas
grandes) e `imagens/banner-aquecedores-1440.webp` (celular). Para trocar,
salve as novas imagens com os mesmos nomes — o texto continua aparecendo
por cima, na área escura da esquerda.

## 🚀 Publicar mudanças no código (visual, textos fixos...)

O site está conectado ao GitHub: depois de editar, basta fazer **commit**
e **sincronizar (push)** — no VS Code, botão "Sync Changes". A Vercel
percebe a mudança e atualiza o site sozinha em ~30 segundos.
(Lembrando: mudanças de **produtos** não precisam disso — são pela aba Loja.)

## 🔜 Próximo passo combinado

- **Pagamento online**: Pix e cartão via provedor (ex.: Mercado Pago) — o
  dinheiro cai direto na conta, sem o site guardar dados de cartão.
