---

title: Your stack doesn't matter!
description: Learn the foundations, not the implementation details.
date: 2024-11-02T00:00:00-03:00
draft: false
tags:
  - coding
---

You've probably seen a video from a tech creator sharing their new favorite tech stack. This dream stack boasts high performance, productivity gains and the use of the latest technologies, whatever that may means. Some go even further and sell it as a starter   pack, containing a sample project, that bears no resemble to a real-world application running in production. These starter packs often come bundled with third-party services, such as e-mails sending, payment processing, and hosting providers, all with the promise that this tech stack will speed up your next project development and make you a successful indie hacker. 

Creators tend to captivate the attention of new developers who, after quickly seeing the results on screen achieved by adopting these technologies, become excited to create a new project or even apply them at work. However, a quertion araises: when these technologies no longger meets their needs or more complex problems araise, who will solve them? Is there someone the junior developer can turn on? And if there isn't, will they know how to handle the situation?

## Questions

Before starting a project, even a small one, it's always important to ask a few questions. What is the scope of the project, and what is the size of the development team? Is it a system that will have just a few thousand users, or does it need to handle a heavy workload over long periods? Will there be a need for a database service with replicas for more complex queries? Is there a DevOps team to manage an on-premise infrastructured, or will the developers themselves have to take care of the application's delivery pipeline?

Notice that none of theses question have yet raised the issue of wich programing language, framework or third-party service should be used. This is not the time for that! These questions are far more fundamental than implementation details and will determine what kind of legacy system this project will become. Because, in the end, whether you like it or not, that is the fate of every system running in production.

## A universe of possibilities

A few years ago, while editing a video for an internship task, I asked a college for help and said, "But is this the right way to do it?". He looked at me and asked back, "What would the _the right way_ to do something be?" Then, he advised me to focus on the output of the edit. If the goal was achieved, that was enough. I carry it with me—not as a rule, but as a reminder not to get stuck overthinking. When whatching a video on YouTube, I don't usually wonder whether it was edited with After Effect, DaVinci or CapCut; just focus on the content. So why should it be any different with software?

If you look the surveys in the tech field, such as the Stack Overflow [Developer Survey](https://survey.stackoverflow.com), you'll see the number of laguages, frameworks, databases and tools available for use. It would be counterproductive to try to learn them all. Even in surveys with a more specific audience, such as the [State of JavaScript](https://stateofjs.com/en-US), the number of libraries and metaframeworks available is large. The JavaScript ecosystem is an example of how exhausting it can be to try learn everything and keep up with the latest updates. This is one of the reasons I don't like these starter packs or stacks for indie hacking. There is always a new and better library to solve the same problem. Recommendations are constantly changing, until you no longer remember how you ended up in this rabbit hole.

## Choices and constraints

In an environment of constant changes and an excess of options, it's pretty common to find yourself paralyzed while analyzing  available alternatives. And it may seem paradoxical, but [having many choices isn't necessarily a good thing](https://www.youtube.com/watch?v=VO6XEQIsCoM). The [Tailwind CSS](https://tailwindcss.com/) library, for example, seeks to restrict the number of chices you need to make through its predefined utility classes. That way, you don't need to think about whether you should apply a padding of 11, 12 ou 13 pixels to the purchase confirmation button.

However, it's important to remember that when your're in a decision making position, delegating the choice will always be the worst option, because the person recommending something probably won't be held accontable if somethin goes wrong, whatever happens. So how do you make the right choice? Well, maybe there isn't a _right_ choice, but there will probably be plenty of wrong onse, and the fewer bad choices you have, the better. So, go back to the basics and remember the questions you should ask. They'll help you eliminate the options from the list. Another tip is choose a [boring technology](https://boringtechnology.club). And no, I'm not suggesting you to adopt Cobol, Visual Basic or Delphi for your next project, but rather choose a more stable path within a more mature ecosystem. That way, over time, you'll have fewer surprises and a better chance of dealing with them without to many complications. 

Also, keep your context in mind. Once, I saw a developer justify his choice to use Go, claiming it was a simple language, with a low lerning curve and that it already had everything he needed by default. Some time latter, I saw another developer mention a traumatic moment at the startup he was working at, as a critical service developed with Go broke in production, and the only developer familiar with the language wasn't available. So, the team, wich was specialized in the JavaScript ecosystem, had to solve it as best they could. These antagonistic perspectives arise because from the developers context. While some may find that deploying a service in Go is more pratical than with Node.js, for others, it could be an endless nightmare. Therefore, choose a technology you and your team fell confortable with.

## The cycle closes

When technologies like Angular, Backbone.js and React became popular, the JavaScript ecosystem bringing more code and responsabilities to the client side, under the argurment that this would improvce user experience. However, this strategy eventually became a problem, as applications sometimes grew in size with unecessary code. Developers became increasingly dependent on thid-party libraries, and new developers stopped learning how the platform they were developing for actually works, learning only what the trendy library or framework had to offer.

However, today the server and the web are much more powerful than they ware decades ago, and some frameworks, such as Svelte and Remix, have taken a different path, focusing on what really matter: the web platform and its standards. As a result, the use of web forms with the `FormData` API, combined with [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), has once again become the recommended approach for modern application development. Server components, along with server functions, stolen the spotlight as a major inovation, but in the end, they are a [reinvention of existing techniques](https://youtu.be/uXCipjbcQfM?t=1641&si=SKrNflKHr4R-KR3B), and now we're returning the responsabilities that once belonged to the server side. 

## Conclusion

It's common to hear in the development field that is no "silver bullet". In the end, what really matter is not the tool used but the problem beeing solved. That's why it's important to be cautious when blindly following suggestions from videos or blog posts. Experimenting with different technologies is essential to building a background and develop a critical thinking about which solution to adopt for each problem. However, the main stream languages and frameworks don't present such different development paradigms. Focus on the foundations and understand how the machines and systems you develop operate and comunicate. This way, switching technologies will become trivial.
