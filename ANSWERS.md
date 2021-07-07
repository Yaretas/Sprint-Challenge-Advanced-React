- [ ] Why would you use class component over function components (removing hooks from the question)?
- Honestly, I would use class component unless it was requested at the work place or if I need to create a lifecycle method that would be more complicated to create using hooks. Reason this being is functional components are a efficient way to create component, and it improves code reuse and composition and mostly it keeps it dry, by eliminating repetitive lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.
- ComponentDidMount() method runs after the component output has been rendered to the DOM.
- ComponentWillMount is executed just before the React Component is about to mount on the DOM.
- ComponentWillUpdate is executed only after the shouldComponentUpdate returns true. 

- [ ] What is the purpose of a custom hook?
- The purpose is to take an idea of the repo that we want to fetch a similar API will return an array with the first element being the loading state and the second element being the Repo state. 

- [ ] Why is it important to test our apps?
Automated testing minimizes the risk of bugs finding their way into production code and allows us to trust the code.