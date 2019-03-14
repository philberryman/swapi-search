### Warnings in test

``Warning: An update to App inside a test was not wrapped in act(...).```

This is a known issue being dealt with by both the React team and the mainters of React Testing Library.

React : https://github.com/facebook/react/issues/14769
React Testing Library : https://github.com/kentcdodds/react-testing-library/issues/281

As the warning does not stop tests from running and passing I've decided to ignore the warning and wait for future updates and hopefully a solution / fix.
