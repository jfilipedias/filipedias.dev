---
slug: formatting-dates-with-golang
title: Formatting dates with Golang
description: Understand how to use the magic date to your advantage.
date: 2025-03-30T16:10:00-03:00
draft: false
tags:
 - coding
 - golang
---

Something I like about the Go language is the simplicity adopted as a design philosophy and, although it may not seem like it at first glance, this can be seen in the way the language formats date and time.

In more popular languages, such as Java and C#, it's common to define the format via a template using identifiers, such as `dd` for the day and `yyyy` for the year. However, Go uses a different approach.

## A kind of magic

The method `time.Format` expect you enter the magic date `Mon Jan 2 15:04:05 -0700 MST 2006` in one of the possible formats. But what's so magic about this date? Well, the joke with the name comes form the orders of the elements that compose the date according to the American standard and their respective value:

1. **Month**: Jan, (January or month 1);
2. **Day**: 2;
3. **Hour**: 15, in 24-hour notation (3pm);
4. **Minute**: 04;
5. **Second**: 05;
6. **Year**: 2006;
7. **Time zone offset**: -0700 (-7 hours);

In short, whenever we refer to the month, we should refer to January; when rever to a day, we should refer to the second day of the month, and so on. The possible values for some components are:

- **Week day**: `Mon` or `Monday`;
- **Month day**: `2`, `_2` or `02`;
- **Year day**: `__2` or `002`;
- **Month**: `Jan`, `January`, `01` or `1`;
- **Year**: `2006`;
- **Hour**: `15`, `3` or `03`;
- **Minute**: `4`, `04`;
- **Second**: `5`, `05`;

The complete list of values can be found on the [documentation](https://pkg.go.dev/time#Layout "Time package layouts") of the `time`package.

## Following standards

Some date and time formats are widely used, such as `RFC3339`, wich is a profile of the `ISO 8601` format. Given the need to simplify the date and formatting, the Go language provides some predefined values, such as:

- **ANSIC**: `"Mon Jan _2 15:04:05 2006"`
- **UnixDate**: `"Mon Jan _2 15:04:05 MST 2006"`
- **RFC822**: `"02 Jan 06 15:04 MST"`
- **RFC3339**: `"2006-01-02T15:04:05Z07:00"`
- **DateTime**: `"2006-01-02 15:04:05"`
- **DateOnly**: `"2006-01-02"`
- **TimeOnly**: `"15:04:05"`

In this way, you can use both established formats and define your own:

```go
t := time.Now()

// Usando formatos pré-definidos
fmt.Println(t.Format(time.RFC3339)) 

// Criando um novo formato com base na data mágica
fmt.Println(t.Format("02/01/2006")) 
```

## Conclusion

Date formatting in the Go languagem doesn't follow a conventional approach. However, once we understand how the magic date is structured, it becomes simple and explicit. Additionaly, the language has some [predefined leyouts](https://pkg.go.dev/time#Layout "Time package layouts") that make the date formatting process esier, shuch as `RFC3339`.  
