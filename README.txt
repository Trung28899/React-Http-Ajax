1. Tool used: 
- Jason Place Holder: 
This is the dummy server to get, post and delete data
https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts

- Axios: this is the main tool we used to 
request and get HTTP reponse for our application

$npm install axios
https://github.com/axios/axios

NOTE THAT: 
+, Remember to review the component lifecycle
creation and updation for this module
+, View index.js for global axios handling as well as
baseURL

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

3. Learnt from this module: 
- How to send a get() request: Blog.js
- How to send a post() request: NewPost.js
- How to send a DELETE request: FullPost.js

- How to handle request and reponse
globally. See in index.js > axios
- Using global axios instance > see in src/axios.js
and see how to use it in Blog.js

- And everything else in between: 
+, Rendering content from get(), post() and  DELETE to page
+, Handle reponse and promises
+, Handle error using catch