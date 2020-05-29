1. Tool used: 
- Jason Place Holder
https://jsonplaceholder.typicode.com/

used to GET posts data and render to the 
webpage 
https://jsonplaceholder.typicode.com/posts

- Axios: 
used for http client request

$npm install axios

https://github.com/axios/axios

- Remember to review the component lifecycle
creation and updation for this module

2. Review Asynchronous Javascript: 
- When we make a data request from the client like this: 
axios.get("https://jsonplaceholder.typicode.com/posts"); 

we can not assign it into a variable for usage. 
This is because the get() run asynchronously and take 
some time for processing. The compiler run the code synchronously
and may assign the return value of the get() function when 
it is not fully executed

- We have 2 solution for it and you can review this content
in the-complete-js course.
+, Use then() after the get method: 

axios.get("https://jsonplaceholder.typicode.com/posts").then((reponse) => {
      console.log(reponse);
});

+, or use async/await to assign variable
