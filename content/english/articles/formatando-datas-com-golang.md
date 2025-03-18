---
slug: formatting-dates-with-golang
title: Formatting dates with Golang
description: Understand how to use the magic date to your advantage.
date: 2025-03-16T23:15:00-03:00
draft: false
tags:
 - coding
 - golang
---

Something I like about the Go language is the simplicity adopted as a design philosophy and, although it may not seem like it at first glance, this can be seen in the way the language formats date and time.

In more popular languages, such as Java and C#, it's common to define the format via a template using identifiers, such as `dd` for the day and `yyyy` for the year. However, Go uses a different approach.

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

Além disso, a linguagem possui alguns [layouts pré-definidos](https://pkg.go.dev/time#Layout "Layouts do pacote time") que facilitam o processo de formatação de datas, como o caso da `RFC3339`, um perfil do formato `ISO 8601` comumente usado em APIs RESTful por meio da serialização dos dados no formato JSON.
