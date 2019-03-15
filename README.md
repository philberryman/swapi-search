### Stars Wars - People Search

A unique, fun and interesting way of finding out about your favourite Star Wars character using the Star Wars API (SWAPI)

### To run

```
git clone ...
yarn install
yarn start
```

This should open a browser window with "Star Wars - People Search". The Force Awaits ...

Start typing a name of a Star Wars charachter (be as obscure as you want - they're all in there).

Click on a result from the autocompleted drop down will bring up the information about that charachter.

### To test

`yarn test --verbose`
`yarn coverage`

### Warnings in test

``Warning: An update to App inside a test was not wrapped in act(...).```

This is a known issue being dealt with by both the React team and the maintainers of React Testing Library.

React : https://github.com/facebook/react/issues/14769
React Testing Library : https://github.com/kentcdodds/react-testing-library/issues/281

As the warning does not stop tests from running and passing I've decided to ignore the warning and wait for future updates and hopefully a solution / fix.

### Technologies

React (16.8.4)
Downshift
Styled Components
Jest
React Testing Library
Prop Types
