# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Morador de casa ou apartamento da região atendida (DDD 47) que precisa trocar ou instalar um aquecedor a gás, ou resolver banho fraco. Chega pelo celular, na maioria das vezes, sem saber o que é "vazão" ou "L/min": sabe quantos chuveiros tem em casa e quanto quer gastar. Instaladores também compram peças e acessórios, mas são público secundário.

## Product Purpose
Loja online da Servigás Aquecedores: mostrar o catálogo (aquecedores a gás, bombas pressurizadoras, mangueiras, registros de gás, acabamentos, dutos de exaustão), ajudar o morador a escolher o aparelho certo e levar o pedido montado até o WhatsApp da loja, onde a venda é fechada. Sucesso é o morador chegar no WhatsApp com o produto certo no carrinho.

## Positioning
A Servigás não é só revenda: é assistência técnica autorizada e a instalação é feita pela equipe própria, incluída na compra. Faz visita técnica e orçamento para dimensionar aquecedor e exaustão, e o cliente pode retirar na loja.

## Operating Context
- O catálogo é gerenciado pela aba "Loja" do sistema interno de gestão e lido direto do Supabase (tabela `loja_produtos`, somente produtos ativos). Até 4 fotos por produto; a primeira é a capa.
- Produto sem preço aparece como "Sob consulta" com pedido de orçamento.
- Fechamento do pedido: mensagem montada no WhatsApp (47) 9 9150-0164. Pagamento online (Pix/cartão) é próximo passo combinado, ainda não existe.
- Atendimento: seg. a sex. 8h às 18h, sábado 8h às 12h.

## Capabilities and Constraints
- Stack: HTML estático (arquivo único com CSS e JS inline), hospedado na Vercel com deploy automático pelo GitHub. CSP em `vercel.json` permite fontes do Google Fonts, imagens e dados do Supabase e scripts do próprio domínio.
- Quem edita o código é o dono da loja, com pouca experiência: configuração no topo do script, comentários em português.
- Carrinho em `localStorage` (`servigas-carrinho`).

## Brand Commitments
- Nome: Servigás Aquecedores.
- Laranja é a cor da marca e deve ser mantido como destaque. Ícone de chama.
- Voz: direta, de quem entende do assunto, sem exagero.

## Evidence on Hand
- Fatos confirmados que podem aparecer como prova: assistência técnica autorizada, instalação inclusa, retirada na loja, visita técnica/orçamento, garantia de fábrica.
- Banner real: `imagens/banner-aquecedores.webp` e `imagens/banner-aquecedores-1440.webp`.
- Fotos de produto vêm do Supabase; os produtos de demonstração não têm foto.
- Não existem: depoimentos, número de clientes, avaliações, ranking de mais vendidos, prazo de promoção. Nada disso pode ser inventado.
- Parcelamento não é anunciado (confirmado pelo dono): o pagamento é combinado pelo WhatsApp.

## Product Principles
- Falar em chuveiros e banhos, não em especificação técnica, e traduzir a especificação quando ela aparecer.
- A instalação e a assistência são o diferencial; o preço vem junto, não na frente.
- Todo caminho termina no WhatsApp com o pedido já escrito.
- Celular primeiro.

## Accessibility & Inclusion
Público amplo, de todas as idades: texto legível no celular, alvos de toque de 44px, contraste AA.
