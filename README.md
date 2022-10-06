- [Live](https://cointrace.netlify.app/ "Live View")

## About the project

Cointrace is a crypto exchange project(coinbase, binance, etc..). It uses heavy API data manipulation to simulate a real cryptocurrency exchange website.

## Available Commands

The command for running the project:

### `npm start`

## Built With

- JavaScript
- React
- HTML
- CSS
- MUI

## What i learned from this project

Core principles learned:
- JSX/React hooks
- Material UI
- APIs(deepened my knowledge)

## Known problems/bugs

The main problem with this project is the limitations of coingecko.com API - it has a max number of possible API calls per minute, therefore if there is a lot of
data to be retrieved(for example, a big variety of coins is purchased, so there needs to be a lot of calls to the API to load their prices, 24h change, etc.),
there may be thrown errors.
