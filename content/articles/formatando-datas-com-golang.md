---
title: Formatando datas com Golang
description: Entenda como utilizar a data mágica ao seu favor.
date: 2025-03-09T18:37:16-03:00
draft: true
tags:
 - coding
 - golang
---

Algo que eu gosto na linguagem Go é a simplicidade adotada como filosofia de design e, apesar de não parecer à primeira vista, isso pode ser evidenciado na forma como a linguagem formata data e hora.

Em linguagens mais populares, como Java e C#, é comum definir o formato por meio de um template utilizando identificadores, como `dd` para o dia e `yyyy` para o ano. No entanto, Go usa uma abordagem diferente, seguinto o princípio _"What You See Is What You Get"_, ou seja, "O que você vê é o que você obtém".

## A kind of magic

O método `time.Format` espera que seja informada a data mágica `Mon Jan 2 15:04:05 -0700 MST 2006` em um dos diferentes layouts possíveis. Mas o que tem de mágico nessa data? Bom, a brincadeira com o nome se dá pela ordem dos elementos que compõem a data de acordo com o padrão americano e seu respectivo valor:

1. **Mês**: Jan, (Janeiro ou mês 1);
2. **Dia**: 2;
3. **Horas**: 15, na notação de 24 horas (3pm);
4. **Minutos**: 04;
5. **Segundos**: 05;
6. **Ano**: 2006;
7. **Desvio de fuso horário**: -0700 (-7 horas);

Em resumo, sempre que formos nos referir ao mês, devemos nos referia a Janeiro; ao referenciarmos um dia, devemos nos referir ao segundo dia do mês, e assim por diante. Os possíveis valores para alguns componentes são:

- **Dia da semana**: `Mon` ou `Monday`;
- **Dia do mês**: `2`, `_2` ou `02`;
- **Dia do ano**: `__2` ou `002`;
- **Mês**: `Jan`, `January`, `01` ou `1`;
- **Ano**: `2006`;
- **Hora**: `15`, `3` ou `03`;
- **Minutos**: `4`, `04`;
- **Segundos**: `5`, `05`;

A lista completa de valores pode ser consultada na [documentação](https://pkg.go.dev/time#Layout "Layouts do pacote time") do pacote `time`.

## Seguindo padrões

Alguns formatos de data e hora são amplamente utilizados, como o `RFC3339` e, tendo em vista a necessidade de simplificar a formatação da data e hora, a linguagem Go possui alguns valores pré-definidos, como:

- **ANSIC**: `"Mon Jan _2 15:04:05 2006"`
- **UnixDate**: `"Mon Jan _2 15:04:05 MST 2006"`
- **RFC822**: `"02 Jan 06 15:04 MST"`
- **RFC3339**: `"2006-01-02T15:04:05Z07:00"`
- **DateTime**: `"2006-01-02 15:04:05"`
- **DateOnly**: `"2006-01-02"`
- **TimeOnly**: `"15:04:05"`

Desse modo, é possível utilizar tanto formatos já estabelecidos, como definir o seu próprio formato:

```go
t := time.Now()

// Usando formatos pré-definidos
fmt.Println(t.Format(time.RFC3339)) 

// Criando um novo formato com base na data mágica
fmt.Println(t.Format("02/01/2006")) 
```

## Conclusão

A formatação de datas na linguagem Go segue uma abordagem não convencional. Contudo, uma vez que entendemos como a data mágica é estruturada, ela se torna simples e explícita. 

Além disso, a linguagem possui alguns [layouts pré-definidos](https://pkg.go.dev/time#Layout "Layouts do pacote time") que facilitam o processo de formatação de datas, seguindo padrões já estabelecidos pela indústria, como o caso da `RFC3339`, um perfil do formato `ISO 8601` comumente usado em APIs RESTful por meio da serialização dos dados no formato JSON.
