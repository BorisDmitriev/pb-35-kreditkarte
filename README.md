# Project
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

# Credit Card Validation

You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called  `validateCreditCard`  that returns  `true`  or  `false` messages.

Here are the rules for a valid number:

-   Number must be 16 digits
-   Input must be numbers only
-   Number must consist of at least two different digits (all of the digits cannot be the same one)
-   The final digit must be even
-   The sum of all the digits must be greater than 16

The following credit card numbers are valid and return a message as an `object` as below::

-   `9999777788880000` { valid: true, number: {card number} };
-   `6666666666661666` { valid: true, number: {card number} };

The following credit card numbers are invalid and return a message as an `object` as below:

-   `a92332119c011112`  {valid: false, number: {card number}, error: 'invalid characters'}
-   `4444444444444444`  {valid: false, number: {card number}, error: 'need more than 1 unique digit'}
-   `1111111111111110`  {valid: false, number: {card number}, error: 'sum less than 16'}
-   `6666666666666661`  { valid: false, number:{card number}, error: 'the last digit is odd' }
-   `2234-2311-5544-111`  { valid: false, number: {card number}, error: 'not 16 digits' }


A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are also valid:

-   `9999-7777-8888-0000`
-   `6666-6666-6666-1666`

Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

----------

**Bonus**  Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the  [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)  for inspiration.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### `validateCreditCard`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Validates for 16 digits |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Validates whether number consists of at least two different digits |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Validates whether last digit is even |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Validates whether sum of all digits is greater than 16 |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-CreditCard-Validation-Project)


[//]: # (autograding info end)