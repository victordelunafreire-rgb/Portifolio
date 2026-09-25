# Portfólio

Behavior rules live in the `mentor` output style, not here.

## Projeto

Portfólio pessoal, página única, 4 blocos (hero, projetos, stack,
contato). Stack: React + Vite + TypeScript + Tailwind CSS + GSAP.
Projetos exibidos: DevClub, DevBurguer, DevBills, DevTempo. Deploy na
Vercel; só o DevClub tem deploy funcional, os outros 3 usam link
placeholder até serem publicados.

Barra de qualidade: precisa parecer um site "que se vende", feito à
mão, com personalidade, não genérico. Referência de tom (não de
conteúdo): https://decathlon-yeyeweller.index.studio/ — parallax de
fundo reagindo ao mouse, elementos reagindo à proximidade do cursor,
loop idle em elementos ilustrados.

Referência visual: reference/DESIGN.md e os prints em reference/.

## Convenções

- Yarn, Biome, Vite
- Código (pastas, arquivos, componentes, variáveis, commits,
  comentários) em inglês; só o conteúdo visível ao usuário em português

## Sequência (guia, não gate)

- Fase 0: setup Vite + React + TypeScript + Tailwind local
- Fase 1: estrutura e hero (componentização, tipagem de props, layout)
- Fase 2: carrossel de tecnologias, loop infinito em CSS puro, sem GSAP
- Fase 3: cards de projeto (lista, dado tipado, grid)
- Fase 4: GSAP em pontos estratégicos: entrada da seção de projetos
  (trigger, timeline, easing) e micro-interações no hero (parallax de
  fundo ao mouse, elemento com loop idle). Não é "GSAP em tudo".
- Fase 5: performance e deploy (imagens, build, Vercel)
