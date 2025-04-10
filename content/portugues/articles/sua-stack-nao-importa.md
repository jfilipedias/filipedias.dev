---
title: Sua stack não importa!
description: Aprenda os fundamentos, não nos detalhes de implementação.
date: 2024-11-02T00:00:00-03:00
draft: false
tags:
  - coding
---

Você provavelmente já deve ter visto algum vídeo de um tech influencer compartilhando sua nova tech stack preferida. Essa stack dos sonhos conta com alta performance, ganhos de produtividade e o uso das tecnologias mais modernas, seja lá o que isso signifique. Alguns vão além e as vendem como um starter pack, contendo um projeto de exemplo, sem qualquer semelhança com uma aplicação real que opera em produção. Esses starter packs costumam já estar acoplados a serviços de terceiros, como envio de e-mails, recebimento de pagamentos e provedores de hospedagem, tudo isso com a promessa de que essa tech stack irá acelerar o desenvolvimento do seu próximo projeto e te tornar um indie hacker de sucesso.

Os influenciadores tendem a encher os olhos de novos desenvolvedores que, ao verem rapidamente os resultados em tela obtidos pela adoção dessas tecnologias, ficam entusiasmados para criar um novo projeto ou mesmo aplicá-las no trabalho. No entanto, surge uma questão: no momento em que essa tecnologia não suprir sua necessidade ou surgirem problemas mais complexos, quem irá resolver? Há alguém a quem o dev júnior possa recorrer? E se não houver, ele saberá como lidar com a situação?

## Perguntas

Antes de dar início a um projeto, mesmo que pequeno, é sempre importante fazer algumas perguntas. Qual é o escopo do projeto e qual é o tamanho da equipe de desenvolvedores? É um sistema que terá apenas alguns milhares de usuários ou precisa aguentar uma grande carga de trabalho durante longos períodos? Haverá a necessidade de um serviço de banco de dados com réplicas para consultas mais complexas? Existe uma equipe de DevOps para gerenciar uma infraestrutura on-premise ou os próprios desenvolvedores terão que cuidar da esteira de entrega da aplicação?

Perceba que nenhuma dessas perguntas ainda levantou a questão de qual linguagem de programação, framework ou serviço de terceiros deve ser utilizado. Não é o momento para isso! Essas perguntas são muito mais fundamentais do que os detalhes de implementação e irão determinar que tipo de sistema legado esse projeto se tornará, pois, no fim, quer você goste ou não, esse é o destino de todo sistema que está rodando em produção.

## Um universo de possibilidades

Há alguns anos, enquanto editava um vídeo para uma tarefa de estágio, pedi ajuda a um colega e perguntei: “Mas essa é a maneira certa de fazer isso?”. Ele olhou para mim e perguntou de volta "o que seria _a maneira certa_ de fazer algo?", e me aconselhou a manter o foco ao resultado da edição. Se o objetivo foi alcançado, isso era suficiente. Levo isso comigo, não como uma máxima, mas como uma lembrança para não paralisar pensando demais. Ao assistir a um vídeo no YouTube, não costumo me perguntar se foi editado com After Effects, DaVinci ou CapCut; apenas me atenho ao conteúdo. Por que com software seria diferente?

Se você observar as pesquisas na área de tecnologia, como o [Developer Survey](https://survey.stackoverflow.com) do Stack Overflow, verá a quantidade de liguagens, frameworks, bancos de dados e ferramentas disponíveis para uso. Será contraprodutivo tentar aprender todas. Mesmo em pesquisas com um público mais específico, como [State of JavaScript](https://stateofjs.com/pt-BR), a quantidade bibliotecas e metaframeworks disoníveis é grande. O ecossistema JavaScript é um exemplo de como pode ser cansativo tentar aprender tudo e acompanhar as novidades. Esse é um dos motivos pelo qual eu não gosto desses starter packs, ou stack pra indie hacking. Sempre existe uma nova e melhor biblioteca pra resolver o mesmo problema. As recomendações estão sempre mudando até você não se lembrar mais como foi para nessa toca de coelho.

## Escolhas e restrições

Em um ambiente de constantes mudanças e um excesso de opções, é muito comum que você se encontre paralisado analisando as alternativas disponíveis. E pode parecer paradoxal, mas [ter muitas escolhas não é necessáriamente algo bom](https://www.youtube.com/watch?v=VO6XEQIsCoM). A biblioteca [Tailwind CSS](https://tailwindcss.com/), por exemplo, busca restringir a quantidades suas escolhas que você precisa fazer por meio das suas classes utilitárias predefinidas. Dessa forma, você não precisa pensar se deveria aplicar um padding de 11, 12 ou 13 pixels ao botão de confirmar a compra.

No entanto, é importante se lembra que, quando se está em uma posição de tomada de decisão, delegar a escolha sempre será a pior opção, pois quem recomenda algo provavelmente não será responsabilizado se algo der errado, seja lá o que acontecer. Mas como fazer uma escolha certa? Bom, talvez não exista uma escolha certa, mas provavelmente haverão muitas escolhas erradas e quanto menos escolhas ruins existirem, melhor. Por isso, volte ao início e lembre-se das perguntas a fazer. Elas ajudarão a riscar as opções da lista. Uma outra dica é [escolher uma tecnologia chata](https://boringtechnology.club). E não, eu não estou sugerindo você adotar Cobol, Visual Basic ou Delphi para o seu próximo projeto, mas optar por um caminho mais estavel em um ecossistema mais maduro. Dessa forma, ao longo do tempo, você terá menos surpresas e haverá uma maior chance de lidar com elas sem maiores complicações.

Além disso, tenha em mente o seu contexto. Certa vez, vi um desenvolvedor justificar a sua escolha de usar Go, alegando ser uma linguagem simples, com uma baixa curva de aprendizago, e que já tinha tudo o que ele precisava por padrão. Tempos depois, vi outro desenvolvedor citar um momento traumático na startup em que trabalhava, pois um serviço crítico desenvolvido em Go quebrou em produção, e o único desenvolvedor que tinha familiaridade com a linguagem não estava disponível. Assim, o time que era especializado no ecossistema JavaScript teve que resolver como pôde. Essas perspectivas antagônicas se dão pelo contexto dos desenvolvedores. Enquanto alguns podem achar que subir um serviço em Go é mais prático do que com Node.js, para outros pode ser um pesadelo sem fim. Por isso, escolha uma tecnologia com a qual você e sua equipe se sintam confortáveis.

## O ciclo se fecha

Quando tecnologias como Angular, Backbone.js e React se popularizaram, o ecossistema JavaScript passou a trazer mais código e responsabilidades para o lado do cliente, sob o argumento de que isso iria melhorar a experiência do usuário. No entanto, essa estratégia acabou se tornando um problema, pois, por vezes, as aplicações inflaram seu tamanho com código desnecessário. Os desenvolvedores se tornaram cada vez mais dependentes de bibliotecas de terceiros, e os novos desenvolvedores deixaram de aprender como a plataforma para a qual desenvolvem funciona, aprendendo apenas o que a biblioteca ou framework da moda tem a oferecer.

Contudo, hoje o servidor e a web são muito mais poderosos do que décadas atrás, e alguns frameworks, como Svelte e Remix, passaram a trilhar um caminho diferente, dando foco ao que importa: a plataforma web e seus padrões. Com isso, o uso de formulários web com a `FormData` API, aliado à [melhoria progressiva](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), voltou a ser o recomendado para o desenvolvimento de aplicações modernas. Os server components, junto com as server functions, roubaram a cena como uma grande inovação, mas no fim, são uma [reinvenção de técnicas já existentes](https://youtu.be/uXCipjbcQfM?t=1641&si=SKrNflKHr4R-KR3B), e agora estamos devolvendo as responsabilidades que um dia pertenceram ao lado do servidor.

## Conclusão

É comum ouvir na área de desenvolvimento que não existe uma "bala de prata". No final das contas, o que realmente importa não é a ferramenta utilizada, mas o problema que se resolve. Por isso, é preciso ter cuidado ao seguir cegamente as sugestões de vídeos ou blog posts. Experimentar diferentes tecnologias é importante para criar um repertório e desenvolver um senso crítico sobre qual solução adotar para cada problema. No entanto, as principais linguagens e frameworks não apresentam paradigmas de desenvolvimento tão distintos. Foque nos fundamentos e entenda como as máquinas e os sistemas que você desenvolve operam e se comunicam. Assim, migrar de tecnologia se tornará algo trivial.
