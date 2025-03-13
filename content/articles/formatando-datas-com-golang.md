---
title: Formatando datas com Golang
description: Entenda como utilizar a data mágica ao seu favor.
date: 2025-03-09T18:37:16-03:00
draft: true
tags:
 - coding
 - golang
---

Algo que eu gosto na liguagem Go é a simplicidade adotada como filosofia de design e, apesar de não parecer a primeira vista, isso pode ser evidenciado na forma como a linguagem formata data e hora.

Em linguagens mais populares, como Java e C#, é comum definir o formato por meio de um template utilizando identificadores, como `dd` para o dia e `yyyy` para o ano, no entento Go usa uma abordagem diferente seguinto o princípio _"What You See Is What You Get"_, ou seja, "O que você vê é o que você obtém".

## A kind of magic

O pacote `time` da linguagem espera que seja informada a data mágica `Mon Jan 2 15:04:05 -0700 MST 2006` em um dos diferentes formatos. Mas o que tem de mágico nessa data? Bom, a brincadeira com o nome se dá pela ordem dos elementos que compõe a data de acordo com o padrão americano e seu respectivo valor:

1. **Mês**: Jan, (Janeiro ou mês 1);
2. **Dia**: 2;
3. **Horas**: 15, na notação de 24 horas (3pm);
4. **Minutos**: 04;
5. **Segundos**: 05;
6. **Ano**: 2006;
7. **Desvio de fuso horário**: -0700 (-7 horas);

Em resumo, sempre que formos nos referir ao mês devemos nos referia à Janeiro, ao referenciar um dia, o segundo dia do mês e assim por diante. Os possíveis valores para cada componente são:

- **Dia da semana**: `Mon` ou `Monday`;
- **Dia do mês**: `2`, `_2` ou `02`;
- **Dia do ano**: `__2` ou `002`;
- **Mês**: `Jan`, `January`, `01` ou `1`;
- **Ano**: `2006`;
- **Hora**: `15`, `3` ou `03`;
- **Minutos**: `4`, `04`;
- **Segundos**: `5`, `05`;

## Seguindo padrões


