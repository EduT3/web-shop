# Grão de Ouro · web-shop

Landing page de estudo para uma loja de café, construída com HTML, CSS e JavaScript puro. Inclui apresentação, produtos com preços ilustrativos, depoimentos de exemplo e formulário demonstrativo.

## Executar

Abra `index.html` no navegador ou rode `python -m http.server 8000` na raiz e acesse http://localhost:8000. Não é necessário instalar dependências ou gerar um build.

## Recursos

- Layout adaptável e menu mobile acionável por teclado
- Estado do menu exposto com `aria-expanded`; Escape fecha e devolve o foco
- Navegação disponível mesmo quando JavaScript está desativado
- Formulário com validação nativa e aviso acessível
- Foco visível e respeito à preferência por movimento reduzido

## Limites

É uma vitrine estática: não existe carrinho, pagamento, estoque, autenticação ou backend. O formulário não envia nem armazena dados; sua validação apenas demonstra a interface. Não use dados pessoais reais para testar.

## Verificação manual

Confira larguras de 320, 768 e 1440 px, abra e feche o menu várias vezes, use Escape e navegue com Tab. Desative JavaScript e confirme que os links continuam visíveis. No formulário, teste campos vazios, e-mail inválido e preenchimento válido; não deve haver envio de rede.

## Arquivos

`index.html` contém a estrutura, `style.css` os estilos, `script.js` as interações e `assets/` as fotografias. Não há suíte de testes ou build configurado.
