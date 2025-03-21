---

title: Your stack doesn't matter!
description: Learn the foundations, not the implementation details.
date: 2024-11-02T00:00:00-03:00
draft: false
tags:
  - coding
---

You've probably seen a video from a tech influencer sharing their new favorite tech stack. This dream stack boasts high performance, productivity gains and the use of the latest technologies, whatever that may means. Some go even further and sell it as a starter   pack, containing a sample project, that bears no resemble to a real-world application running in production. These starter packs often come bundled with third-party services, such as e-mails sending, payment processing, and hosting providers, all with the promise that this tech stack will speed up your next project development and make you a successful indie hacker. 

Influencers tend to captivate the attention of new developers who, after quickly seeing the results on screen achieved by adopting these technologies, become excited to create a new project or even apply them at work. However, a quertion araises: when these technologies no longger meets their needs or more complex problems araise, who will solve them? Is there someone the junior developer can turn on? And if there isn't, will they know how to handle the situation?

## Questions

Before starting a project, even a small one, it's always important to ask a few questions. What is the scope of the project, and what is the size of the development team? Is it a system that will have just a few thousand users, or does it need to handle a heavy workload over long periods? Will there be a need for a database service with replicas for more complex queries? Is there a DevOps team to manage an on-premise infrastructured, or will the developers themselves have to take care of the application's delivery pipeline?

Notice that none of theses question have yet raised the issue of wich programing language, framework or third-party service should be used. This is not the time for that! These questions are far more fundamental than implementation details and will determine what kind of legacy system this project will become. Because, in the end, whether you like it or not, that is the fate of every system running in production.

## A universe of possibilities

A few years ago, while editing a video for an internship task, I asked a college for help and said, "But is this the right way to do it?". He looked at me and asked back, "What would the _the right way_ to do something be?" Then, he advised me to focus on the output of the edit. If the goal was achieved, that was enough. I carry it with me—not as a rule, but as a reminder not to get stuck overthinking. When whatching a video on YouTube, I don't usually wonder whether it was edited with After Effect, DaVinci or CapCut; just focus on the content. So why should it be any different with software?

If you look the surveys in the tech field, such as the Stack Overflow [Developer Survey](https://survey.stackoverflow.com), you'll see the number of laguages, frameworks, databases and tools available for use. It would be counterproductive to try to learn them all. Even in surveys with a more specific audience, such as the [State of JavaScript](https://stateofjs.com/en-US), the number of libraries and metaframeworks available is large. The JavaScript ecosystem is an example of how exhausting it can be to try learn everything and keep up with the latest updates. This is one of the reasons I don't like these starter packs or stacks for indie hacking. There is always a new and better library to solve the same problem. Recommendations are constantly changing, until you no longer remember how you ended up in this rabbit hole.

## Choices and constraints

In an environment of constant changes and an excess of options, it's pretty common to find yourself paralyzed while analyzing  available alternatives. And it may seem paradoxical, but [having many choices isn't necessarily a good thing](https://www.youtube.com/watch?v=VO6XEQIsCoM). The [Tailwind CSS](https://tailwindcss.com/) library, for example, seeks to restrict the number of chices you need to make through its predefined utility classes. That way, you don't need to think about whether you should apply a padding of 11, 12 ou 13 pixels to the purchase confirmation button.

No entanto, é importante se lembra que, quando se está em uma posição de tomada de decisão, delegar a escolha sempre será a pior opção, pois quem recomenda algo dificilmente será responsabilizado por um eventual problema, seja ele qual for. Mas como fazer uma escolha certa? Bom, talvez não exista uma escolha certa, mas provavelmente haverá muitas escolhas erradas e quanto menos escolhas ruins existirem, melhor. Por isso, volte ao início e lembre-se das perguntas a serem feitas. Elas ajudarão a riscar as opções da lista. Uma outra dica é [escolher uma tecnologia chata](https://boringtechnology.club/ 'https://boringtechnology.club/'), e com isso não estou sugerindo adotar Cobol, Visual Basic ou Delphi para o seu próximo projeto, mas optar por um caminho mais estavel em um ecossistema mais maduro. Dessa forma, ao longo do tempo, você terá menos surpresas e haverá uma maior chance de lidar com elas sem maiores complicações.

Além disso, tenha em mente o seu contexto. Certa vez, vi um desenvolvedor justificar a sua escolha por usar Go, alegando ser uma linguagem simples, com uma baixa curva de aprendizagem, e que já tinha tudo o que ele precisava por padrão. Tempos depois, vi outro desenvolvedor citar um momento traumático na startup em que trabalhava, pois um serviço crítico desenvolvido em Go quebrou em produção, e único desenvolvedor que tinha familiaridade com a linguagem não estava disponível. Assim, o time que era especiazado no escossistema JavaScript teve que resolver como pôde. Essas pespectivas antagônicas se dão pelo contexto dos desenvolvedores. Enquanto alguns podem achar que subir um serviço em Go é mais prático do que com Node.js, para outros pode ser um pesadelo sem fim. Por isso, escolha uma tecnologia com a qual você e sua equipe se sintam confortáveis.

## O ciclo se fecha

Quando tecnologias como Angular, Backbone.js e React se popularizaram, o ecossistema JavaScript passou a trazer mais código e responsabilidades para o lado do cliente, sob o argumento de que isso iria melhorar a experiência do usuário. No entanto, essa estratégia acabou se tornando um problema, pois as aplicações inflaram seu tamanho com código, por vezes, desnecessário. Os desenvolvedores passaram a depender cada vez mais de bibliotecas de terceiros, e os novos desenvolvedores deixaram de aprender como a plataforma para a qual desenvolvem funciona, passando a aprender apenas o que a biblioteca ou framework da moda tem a oferecer.

Contudo, hoje o servidor e a web são muito mais poderosos do que décadas atrás, e alguns frameworks, como Svelte e Remix, passaram a trilhar um caminho diferente, dando foco ao que importa: a plataforma web e seus padrões Com isso, o uso de formulários web com a FormData API, aliado à [melhoria progressiva](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement 'Documentação da MDN sobre melhoria progressiva'), voltou a ser o recomendado para o desenvolvimento de aplicações modernas. Os server componentes, junto com as server functions, roubaram a cena como uma grande inovação, mas, no fim, são uma [reinvenção de técnicas já existentes](https://youtu.be/uXCipjbcQfM?t=1641&si=SKrNflKHr4R-KR3B, 'Rich Harris sobre nos arrependermos de reinventar o RPC'), e agora estamos devolvendo as responsabilidades que um dia pertenceram ao lado do servidor.

## Conclusão

É comum ouvir na área de desenvolvimento que não existe uma "bala de prata". No final das contas, o que realmente importa não é a ferramenta utilizada, mas o problema que se resolve. Por isso, é preciso ter cuidado ao seguir cegamente as sugestões que circulam em vídeos e blog posts. Experimentar diferentes tecnologias é importante para criar um repertório e desenvolver um senso crítico sobre qual solução adotar para cada problema. No entanto, as principais linguagens e frameworks não apresentam paradigmas de desenvolvimento tão distintos. Foque nos fundamentos e entenda como as máquinas e os sistemas que você desenvolve operam e se comunicam. Assim, migrar de tecnologia se tornará algo trivial.
