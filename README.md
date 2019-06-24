# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

I assume that this question refers to what is happening under the hood when you are trying to go to a website. For example, when you go to https://www.techtonic.com/, your computer is searching through the DNS (Domain name system), which is connected to a corresponding IP address, for example: if you wanted to go to google.com you could either type in that url or you could go to 172.217.2.14 and get the same result. The purpose for using urls is to make going to websites easier. For me(the user), it would be almost impossible to remember an ip address for all the websites I wanted to go to. Next, It will check 4 seperate caches for the url, which makes data transfer times much faster. If it doesnt find it in any of the caches it will initiatie a DNS query to find the IP address of the server that hosts the website. When the browser receives the correct IP address it will connect with the corresponding server that matches IP address to transfer information back and forth. Once the connection is established, The browser will make a GET request to techtonic.com, if there was any login or information that we needed to send to the server required, we would use a POST route. For now though, the information is requested from the server, and the server (literally serves), you that information, and passes it back to the client for the end user to see. 

## From start to finish, how does data reach you to be rendered in the browser?

put your answer here

## What code is rendered in the browser?

put your answer here

## What is the server-side code’s main function?

put your answer here

## What is the client-side code’s main function?

put your answer here

## What is runtime?

put your answer here

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

put your answer here

## How many instances of the server-side code are available at any given time?

put your answer here

## How many instances of the databases connected to the server application are created?

put your answer here
