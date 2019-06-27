# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

I assume that this question refers to what is happening under the hood when you are trying to go to a website. For example, when you go to https://www.techtonic.com/, your computer is searching through the DNS (Domain name system), which is connected to a corresponding IP address, for example: if you wanted to go to google.com you could either type in that url or you could go to 172.217.2.14 and get the same result. The purpose for using urls is to make going to websites easier. For me(the user), it would be almost impossible to remember an ip address for all the websites I wanted to go to. Next, It will check 4 seperate caches for the url, which makes data transfer times much faster. If it doesnt find it in any of the caches it will initiatie a DNS query to find the IP address of the server that hosts the website. When the browser receives the correct IP address it will connect with the corresponding server that matches IP address to transfer information back and forth. Once the connection is established, The browser will make a GET request to techtonic.com, if there was any login or information that we needed to send to the server required, we would use a POST route. For now though, the information is requested from the server, and the server (literally serves), you that information, and passes it back to the client for the end user to see. 

## From start to finish, how does data reach you to be rendered in the browser?
The research that I've done for this question has taken me the longest of any question so far. Most resources seem to have scattered information about what each individual part in the process is doing. The information i found on frontendbabel.com seemed to have the most understandable timeline of things happeneing when rendereing to a browser. I tried not to copy word-for-word what the author that did a great job explaining this typed, but I also didnt want to stray to far from the main idea of each step. 
.
.
Firstly, The DOM (Document Object Model) is formed from the HTML that is received from a server. Styles are loaded and parsed, forming the CSSOM (CSS Object Model).A rendering tree is created, which is a set of objects to be rendered. The render tree represents the DOM structure, exdluding elements such as <head> that are invisible. The render tree describes the visual representation of a DOM. For each render tree element, its coordinates are calculated, which is called "layout". Browsers use a flow method which only required one pass to layout all the elements (tables require more than one pass). Finally, this gets actually displayed in a browser window for the end user to see.

sources: frontendbabel

## What code is rendered in the browser?

Client-side code: Javascript, HTML, CSS are the big three that are rendered in the browser by processing the code it receives from the server. Almost every website is a combination of these. Javascript is very versatile because it has access to a ton of frameworks & libraries such as jQuery, Bootstrap, Express, etc that make it even better. One of my favorite client-side libraries is React. 

sources: fasthosts.co , techterms, upwork

## What is the server-side code’s main function?

The main purpose of the server-side code is to process the requests that comes from the client(user/browser) and send back the correct information. It provides the communication between the front-end and the back-end and makes sure that data is sent back and forth by interacting and querying the database. Along with creating data and displaying the data, The server-side code is also used for updating, and deleting it (often referred to as CRUD- create, read, update, destroy). In practical applications, Companies use server-side programming to store account information and allow only authorized users to view and make transactions. Server-side scripting allows efficient storage and delivery of information to save money and space, by storing data in databases rather than having a seperate page for each product or item that a company may have to display. 


sources: csharpcorner, mozilla docs

## What is the client-side code’s main function?

The main function of client-side code is to process the code received from the server. Once the code is loaded from the server, the browser essentially does everything else and renders it to the page. Client-side code is written in some sort of scripting language like Javascript or Typescript and interact with the elements in the HTML page such as buttons, images or text.

## What is runtime?

Runtime is the time when your program is running. It begins when the code is executed, and ends when the code is quit. From what I understand, runtime is the software that is happening while your program is running(usually under the hood) and is uses memory in the RAM. Runtime is usually what is doing the thing you are looking for it to do. For example, in React 360 you have 1. The react application, and 2. the code that turns your react componenets into 3D elements. Number 2 is the part that is actually turning that chunk of code into something useful. AKA DOING THE THING.

sources: stackoverflow, techterms.com, wiki

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Im terribly confused with this question! Would it be possible to get a push in the right direction?.. I tried looking up many different combinations of client-side assets and what that actually means but to no avail. Does this have to do specificlaly with going to Techtonic.com? I would be happy to answer this question with a little further explanation. 

## How many instances of the server-side code are available at any given time?

There is no limit to the number of server-side technologies that you may include in any given project. In many instances, one language is not good for everything so you sometimes have to use a combination of different back-end programming languages. Although mixing languages, and gettting them to communicate properly is extremely difficult, companies like Google are very well known for using multiple technologies in their programs because they have huge development teams. According to my research, this can be done in three ways: 1. Seperate Processes, 2. Calling libraries that are written in a different language, 3. Embedding the language into the executable. 

soures: quora

## How many instances of the databases connected to the server application are created?

You can run multiple instances of the Database Engine on a computer. An instance of the database operates as a service that handles all requests to work with the data in any of the databases managed by that instance. Each instance manages several system databases and one or more user databases.

sources: microsoft docs