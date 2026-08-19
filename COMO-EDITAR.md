# Como gerenciar a loja Servigás

## 🏪 Produtos: agora é pelo sistema de gestão!

O catálogo do site é gerenciado pela aba **Loja** do sistema interno de
gestão (o mesmo onde ficam vendas, estoque e clientes). Lá você pode, com
login e senha:

- ➕ Adicionar, ✏️ editar e ➖ remover produtos
- 🖼️ Subir fotos (são comprimidas sozinhas para o site carregar rápido)
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

No `index.html`, procure:

```
const WHATSAPP = '5500000000000';
```

e troque pelo número real, só dígitos, com `55` na frente. Ex.: `5547999998888`.

## 🚀 Publicar mudanças no código (visual, textos fixos...)

O site está conectado ao GitHub: depois de editar, basta fazer **commit**
e **sincronizar (push)** — no VS Code, botão "Sync Changes". A Vercel
percebe a mudança e atualiza o site sozinha em ~30 segundos.
(Lembrando: mudanças de **produtos** não precisam disso — são pela aba Loja.)

## 🔜 Próximo passo combinado

- **Pagamento online**: Pix e cartão via provedor (ex.: Mercado Pago) — o
  dinheiro cai direto na conta, sem o site guardar dados de cartão.
