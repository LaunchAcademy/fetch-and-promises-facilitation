Async Javascript
- fetch requests take time 
- imagine ordering a pizza, its gonna take at least 15mins. If we didn’t have async programming. We would have to order our pizza and then do nothing else for 15mins 
- WITH it, we can order our pizza (order => fetch) and then also read a book or play video games while we wait. maybe even clean up and decorate. 
- Our house is the "frontend", the pizza place is the backend or server.rb 
- we can decorate or make our web page fun while waiting for the pizza
- once the pizza arrives, we stop doing whatever else we were doing and chow down. 

Promises

- you don’t need to make a promise. You just need to know how to interact with one, and its probably easier than you think 
- promises love wrapping things that take a long time. Anytime we have to do something that would take a while (counting, parsing or retrieving) we can wrap it in a bubble 
- the data we get back from a fetch auto-wraps the stuff in a bubble
- promise is so handy, that it even returns another promise wrapped around whatever you explicitly return 


