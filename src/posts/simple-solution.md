---
title: Simple Solutions are often the best
slug: simple-solution
author: Jon Ellwood
subject: How I used Netlify to avoid walking
date: 06/14/2021
exerpt: A $12 domain saved us around $1440 per year - but more importantly saved me from using stairs!

---

# {title}

## {subject}

<img src="https://res.cloudinary.com/drwfft7zs/image/upload/v1628773478/jonellwood%20dot%20dev/FEWD_yzodhk.png" alt="HTML Logo" width="15%" style="float: left; margin-right: 10px;">

The organization I work for has a television in the lobby for the purposes of a “lobby display”. That was pretty much all the direction I was given.

At the time it was assigned to me we were paying a fantastic company around $120 per month for a hosted service with a few widgets to display information such as local weather, photo slide shows, and good ‘ol fashioned scrolling text.

After realizing this was just a website being displayed on a large monitor, I took five W3C classes on HTML, JavaScript, and CSS and earned their Certified Frontend Web Developer certificate. I then wrote a simple page that displayed relevant information and dropped in some scripts for a rss feeds and weather. (Thanks to StuckOverflow).

This solution worked quite well, but every time I updated the code I had to then place it on a USB drive and walk “all the way” down stairs to where the machine running it was housed. (It ~might~ be 15 stairs at best - not a huge effort - but that doesn’t bode well for my story so we’ll act like it is upstairs both ways.)

After several months of pain and torturous stair climbing it dawned on me how easy it would be to deploy this site to a domain. Pushing the code on GitHub and deploying to Netlify via webhook means I can now avoid those terrible stairs and keep my display up to date!

UPDATED: Wanting to learn more about using API's I wrote a function for the display that will get the current date, parse out the month and day to variables and put them in the API's URL. Then the data comes back and IF there is a Holiday on that day it will display across the screen "Today is `{date}` which means it is `{holiday}`". Otherwise it displays nothing. Fun way to spend an afternoon writing this little feature.

Additionally, any other lobby display in the organization can also easily access this resource with just an internet connection! A $12 domain saved us around $1440 per year - but more importantly saved me from those stairs!

My next step might be to use a smart TV with a browser to access the display site and remove the old Linux box from the equation 🤔…..

You can see whatever is in the lobby at the moment 👉 <a href="https://altardsugarskull.com">here</a> (the domain name was purchased on spec and wasn’t used so it was just laying around doing nothing - don’t judge)
