 # Currency Converter App

This is a simple currency converter app built with React. It allows users to convert between different currencies and displays the converted amount.

## Getting Started

To get started, clone the repository and install the dependencies:

```
git clone https://github.com/your-username/currency-converter-app
cd currency-converter-app
npm install
```

## Running the App

To run the app, simply run the following command:

```
npm start
```

The app will then be available at http://localhost:3000.

## Code Overview

The app consists of a single React component, `InputBody`, which is responsible for handling the user interface and converting the currency.

The `InputBody` component has several states:

* `amount`: The amount of currency to be converted.
* `from`: The currency to be converted from.
* `to`: The currency to be converted to.
* `convertAmount`: The converted amount.
* `data`: The currency exchange rates.

The `InputBody` component also has several functions:

* `swap()`: Swaps the `from` and `to` currencies.
* `convert()`: Converts the currency using the exchange rates.

## User Interface

The user interface of the app consists of two input boxes, one for the amount to be converted and one for the currency to be converted from. There is also a button to swap the currencies and a button to convert the currency.

## Converting Currency

When the user clicks the "Convert" button, the `convert()` function is called. This function uses the exchange rates to convert the currency. The converted amount is then displayed in the "To" input box.

## Conclusion

This is a simple currency converter app that demonstrates how to use React to build a user interface and convert currency. The app is easy to use and understand, and it can be easily customized to add additional features.

 ![image](https://github.com/Shivraj10t/01React/assets/86354254/b0233bd3-aad0-4f95-bbd4-70d6457a6b36)
