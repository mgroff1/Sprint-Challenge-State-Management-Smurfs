




1. What problem does the context API help solve?
    A: The context api enables the sharing of data across all levels of the application, thus solving the probleme of prop drilling!

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
        Actions: A object that transfers an object or "state changes" to the reducer, will typically carry the payload.  

        Reducers: A function object that returns some data when triggered by the action. 

        Store:  The name says it all, an object that stores an object holding data, or "object that stores state"

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
        A: application state is a global state this is where redux becomes very useful in larger apps, componet state is as it sounds, state held by individual components.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
        A: the biggest benifit of it is that it allows you to write action creators that can return a function instead of just an action. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!
        A: I like redux at this point, I never used any libraries or frameworks when I taught myself to code with javascript, using redux feels more natural as it would relate. But it is still quite forein to my typing hands. 
