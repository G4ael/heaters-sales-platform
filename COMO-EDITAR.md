# Como gerenciar a loja Servigás (index.html)

Todo o site fica em **um único arquivo**: `index.html`. Para editar, abra ele
em qualquer editor de texto (Bloco de Notas, VS Code...) e procure a seção
marcada assim:

```
📦 PRODUTOS — para gerenciar a loja, edite SOMENTE esta lista!
```

## ➕ Adicionar um produto

1. Copie um bloco inteiro de `{` até `},` de um produto parecido.
2. Cole logo abaixo, antes do `];` que fecha a lista.
3. Troque os dados: `id` (invente um código novo, sem repetir), `nome`,
   `marca`, `preco`, etc.
4. Salve o arquivo e recarregue o site — pronto!

## ➖ Remover um produto

Apague o bloco `{ ... },` inteiro do produto. Salve e recarregue.

## ✏️ Mudar preço ou colocar em promoção

- `preco: 1990` → preço atual (use ponto para centavos: `1990.50`).
- `precoAntigo: 2290` → aparece riscado com selo vermelho **Promoção**.
  Sem promoção? Deixe `precoAntigo: null`.
- `preco: null` → mostra **"Sob consulta"** com botão de orçamento.
- `destaque: true` → selo laranja **Destaque** (aparece primeiro na loja).

## 🖼️ Colocar fotos

1. Salve as fotos na pasta `imagens` (fica ao lado do `index.html`).
   Prefira fotos quadradas, até ~800×800 px, formato JPG ou WebP.
2. No produto, escreva os nomes dos arquivos:

```
fotos: ['imagens/rinnai-15l.jpg', 'imagens/rinnai-15l-lado.jpg'],
```

A primeira foto é a principal; as outras viram miniaturas nos detalhes.
Se deixar `fotos: []`, o site mostra um desenho automático da categoria.

## 📱 Número do WhatsApp

No topo da mesma seção, troque:

```
const WHATSAPP = '5500000000000';
```

pelo número real, só dígitos, com `55` na frente. Ex.: `5547999998888`.

## 🚀 Publicar as mudanças

O site está conectado ao GitHub: depois de editar, basta fazer **commit**
e **sincronizar (push)** — no VS Code, botão "Sync Changes". A Vercel
percebe a mudança e atualiza o site sozinha em ~30 segundos.

## 🔜 Próximos passos combinados

- **Área do lojista**: gerenciar produtos pelo próprio site com login e
  senha (Firebase ou Supabase), sem mexer em código.
- **Pagamento online**: Pix e cartão via Mercado Pago (ou similar) — o
  dinheiro cai direto na conta, sem o site guardar dados de cartão.
