### Stars Wars - People Search

A unique, fun and interesting way of finding out about your favourite Star Wars character using the Star Wars API (SWAPI)

### To Run

Clone the repo with either:

SSH:

```
git@github.com:philberryman/swapi-search.git
```

or HTTPS:

```
https://github.com/philberryman/swapi-search.git
```

Install and run using Yarn

```
yarn install
yarn start
```

This should open a browser window with "Star Wars - People Search". The Force Awaits ...

Start typing a name of a Star Wars charachter (be as obscure as you want - they're all in there).

Clicking on a result from the autocompleted drop down will bring up the information about that charachter.

### To Test

Run tests
`yarn test --verbose`

View coverage report
`yarn coverage`

### Warnings In Test

`Warning: An update to App inside a test was not wrapped in act(...).`

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

### Future Improvements

- Creating a GraphQL backend would reduce the amount of front-end API requests needed.
- Styling is a long way from perfect. Info cards are falling out of the yellow border created by the Wrapper component.
- Some odd behaviour is sometimes caused by the order responses come back from the API. Not all responses are being cached either for some reason.
- Better test coverage. Some of the tests are pretty low on detail (only testing a single property for each Film, Person, HomeWorld, Vehicle). Only one piece of the API has been mocked (for search).
- The warnings mentioned above when tests are run.It seems like these aren't a real problem and would probably not exist if Hooks weren't being used (although more investigation is probably needed here).
