---
path: "/map-by-hand"
date: "2018-05-16"
title: "Building the JavaScript map Function"
live: true
---

Today we're going to work to understand JavaScript's map function by building it ourselves.

## Building a simple tool to make apartment hunting easier
I've been working on a simple web app designed to make apartment hunting "remotely" a bit easier--specifically when your future roommate is out of the state or otherwise not able to look at apartments in-person.

```javascript
const a = [1,2,3];
console.log(a);
```

Right now, Coby and I have a shared Google Sheet that we add apartments to. The data we 'tend' to care about is the location, price, and number of bedroom and bathrooms. We put this into the Google Sheet so that...we have a synced and editable for apartments we're both interested in. It's simple, and it works.
That being said, the system isn't perfect. There are some things that I'd like improve, which makes this the perfect opportunity to try out the web technologies I've been learning.
## Problem
The problem that we have with using the spreadsheet is that for each potential apartment, we need to enter the same standard pieces of information:

 - Name of the complex
 - Leasing office number (to schedule a tour or ask about current availability)
 - Address
 - Neighborhood it's located in

Since we've only been looking at apartments on the site apartments.com, that information is always in the same place --- both on the site and in the markup. Sounds like the *perfect* candidate for some scraping.
## Idea: Loft -- A simple tool to keep track of apartments
I'm calling this web app Loft --- not because it needs a name, but because naming things is fun.

The main goal of Loft is to duplicate the functionality of our apartments spreadsheet but extend it to be more useful for our particular use case. Specifically, I want the application to accept the URL of an apartment and then retrieve and display the details of the apartment that I mentioned above.
## The tools

## Defining our scope
Useful, yes. but our current Google spreadsheet is useful. Realistically to tool I'm building here will save me much less time than it will take to build. But What we're building here should go a step beyond that.

In other words, I'd much rather finish a small application, that does exactly what I want it to, than to have another unfinished app that w

**What does it do?**

 - Lets us add or remove apartments
	 - Adding an apartment by URL should get the important data we want and display it
 - Shows us the same information if we leave the app and come back
	 - In other words, the data should persist
 - Accept and store comments about each apartment

What we don't want: The perfect replacement for every apartment finding website ever
