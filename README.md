# Get Ordinal Suffix
This is a simple JavaScript function that returns the ordinal suffix for a given number.

#### What's an ordinal suffix?
An ordinal suffix is the group of characters appended to the end of a number in a written language (in this case, English) to describe their order.
For example, 1<sup>st</sup>, 2<sup>nd</sup>, 3<sup>rd</sup>, etc.

## Description
* This function serves as an automatic method for finding the ordinal suffix for any given number.
* The function accepts a single parameter, the number needing the ordinal suffix. It then returns the ordinal suffix in string format.
  - 0 (zero) is sent back an empty string
  - All numbers ending in 1 are sent back "st"
  - All numbers ending in 2 are sent back "nd"
  - All numbers ending in 3 are sent back "rd"
  - All numbers ending in 11, 12 or 13 are sent back "th"
  - All numbers ending in 4, 5, 6, 7, 8, 9 and 0 (ending in 0, but greater than 0, like 30, 100, 150, 1000, etc.) are sent back "th"
* The function will verify that a valid number has been passed to it before processing, however it will also accept strings that can be interpreted as valid numbers.
* Invalid numbers sent to the function will be returned with an error message: <strong>" Error found: Parameter is not a valid number"</strong>
* There is no limit to the size of the number that can sent (within reason).
* Decimal numbers can also be passed to the function. Although there are academic disputes as to whether decimal numbers should be given ordinal suffixes, this      function assumes that the calling programme knows what it wants, and so produces an ordinal suffix if a decimal number is sent to it. The suffix is based on the decimal part of the number only.

## Technologies
Good old plain vanilla JavaScript.

## Installation
* Simply download the <strong>numberOrdinalSuffix.js</strong> file into your js project folder and link to it in your HTML document:
    <pre><code><script src="../numberOrdinalSuffix.js"></script></code></pre>
* Ensure that this script tag is placed before any script that attempts to access the number ordinal suffix function.

## How to Use
* When you have a number that needs an ordinal suffix, simply call the function <strong>getOrdinalSuffix.forNumber(parm1)</strong> and send the number as parameter 1
* The value returned will be the ordinal suffix for the sent number
* If the parameter sent to the function is not a valid number, an error message will be returned: <strong>" Error found: Parameter is not a valid number"</strong>.
* The function accepts any valid number of any size, as well as strings that can be interpreted as valid numbers, like "123".

<pre><code>
<script>
  var myNumber = 123;
  var ordinalSuffix = getOrdinalSuffix.forNumber(myNumber);
  console.log(myNumber + ordinalSuffix);
</script>
</code></pre>

## Contributors
* Michael van Es
* If you have suggestions for how this function can be improved, or would like to report a bug, please open an issue. All contributions are welcome!

## License &amp; Copyright
&copy; MIT License

> A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
