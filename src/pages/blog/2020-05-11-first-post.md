---
templateKey: blog-post
title: First Post
date: 2020-05-11T09:09:16.466Z
description: "What I keep hearing these days is:"
featuredpost: false
featuredimage: /img/01_fine.jpg
tags:
  - "#first"
  - "#second"
  - "#tag"
---
But what if someone does not only care about the confidentiality of a Zoom-session but also about the integrity of his or her own endpoint device? It’s not only the spoken word of a group within a Zoom session that is at stake – it is also the integrity and confidentiality of everything a conference participant has stored on their computer.

Thus, I spent two evenings (I think around 5-6h in total), looking at Zoom for Windows (*Version 4.6.11 (20559.0413)*). Statically only – I did not perform a runtime analysis. In this report I summarize what I have seen. I’m pretty confident that this is only the tip of the iceberg. Just imagine what could be possible for a security analyst with time and a budget… I explicitly did not look for everything that is related to the disclosure of sensitive information to 3rd-party (e. g.[leaking information to Facebook](https://www.theverge.com/2020/4/1/21202584/zoom-security-privacy-issues-video-conferencing-software-coronavirus-demand-response)).

This report is very superficial and does not go into detail. This is because I did this in my spare-time and I do not intend to spend more time on this. My goal is to point out the overall code quality and secure programming guidelines, as well as existing or missing software maintenance (which is necessary especially when using lots of 3rd-party libraries).

### Ancient 32-Bit application

Seriously? Why?! Windows is shipped with 64-Bit support and various security enhancements for 64-Bit CPUs since Windows 7. That was 2009, eleven years ago. These days, even Windows 7 is End-of-Life. 2020 Zoom still ships (only) 32-Bit applications on Windows.