---
coverImageWidth: "1200"
coverImageHeight: "700"
datetime: 2023-09-30T03:42:51Z
tags:
  - DivSite
  - C++
author: DivaArvian
type: article
coverImage: https://res.cloudinary.com/noezectz/image/upload/v1654754125/SatNaing/terminal-screenshot_gu3kkc.png
coverImageAlt: Screenshot of DivSite?
title: What Is DivSite
description:
  Mobile Legends which has been modified in such a way as to make it easier for players to play the game with all the available features such as ESP, Mininap Icon, Auto Skill and others.
excerpt:
  Developing third party applications to make it easier for players to play Mobile Legends.
slug: what-is-divsite
featured: true
category: Software
---

Developing third party applications to make it easier for players to play Mobile Legends.

## Intro

Recently, I've developed and published my portfolio + a blog. I’m glad I got some good feedback for it. Today, I want to introduce my software i've made. It is developed using Java, and C++. I got this idea from my friends and YouTube.

## Tech Stack

This project is a third party application. For the frontend user-interface, I chose ImGui. Why?

- Ease of Use: ImGui is designed with a focus on user-friendliness. You can create graphical user interfaces with minimal code and without the need to understand complex concepts like views and continuous updates.
- Lightweight: ImGui is extremely lightweight and fast, making it suitable for various types of projects, including video games, high-performance applications, and development tools.
- Multi-Platform Support: ImGui can be used on various platforms such as Windows, macOS, Linux, iOS, Android, and even in web browsers through the use of Emscripten.
- Flexible Customization: You can customize the appearance and behavior of the user interface to suit your project's needs. ImGui provides many styles and themes as a starting point, and you can fully customize them.
- Immediate Mode Rendering: ImGui employs an immediate mode rendering approach, allowing you to draw UI elements whenever you need them. This makes development fast and intuitive.
- Strong Documentation: ImGui has excellent documentation and an active community. You can easily find tutorials, code examples, and community assistance for ImGui.
- Interactive: You can easily add interactive UI elements such as buttons, text boxes, lists, and more. ImGui also supports input from the mouse, keyboard, and even gamepads.
- Convenient Licensing: ImGui has a very permissive license (MIT License), allowing you to use it for free even in commercial projects without the need to pay royalties or additional fees.
- Active Maintenance: ImGui is regularly updated and actively maintained by developers and community contributors. This means you'll receive bug fixes and functional updates periodically.
- Support for Testing: ImGui can be used to facilitate testing and debugging by allowing you to easily add UI elements that enable you to manipulate your application or game directly.

This project doesn’t need very complex state management. I just use ContextAPI in this project for multiple theming and to avoid prop drilling.

Here’s a quick recap for the tech stack.

- Frontend: [ImGui](https://github.com/ocornut/imgui "ImGui Github")

## Features

Here are some features of the project.

### Extra Sensory Perception / ESP

 ESP is a term that refers to elements or abilities that provide players with additional insights or information that cannot be obtained through standard game mechanics. This can include things like seeing enemies through walls, knowing the positions of enemies on the map, or having access to additional information that should not normally be visible in the game. The use of ESP in games is often considered a form of cheating.

![ESP Feature](https://raw.githubusercontent.com/divarvian/DivSite/main/divsite.webp)

## Outro

This is a really fun project, and one special part of this project is I had to focus on logic rather than user-interface.

## Project Links

- Repo: [https://github.com/divarvian/DivSite](https://github.com/divarvian/DivSite "https://github.com/divarvian/DivSite")
