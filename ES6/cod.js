// # Practical Mental Model 11 Feb 2025

// Write a function that formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes, and seconds.

// It is much easier to understand with an example:

// ```jsx
// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// ```

// **For the purpose of this Exercise, a year is 365 days and a day is 24 hours.**

// Note that spaces are important.

// ### **Detailed rules**

// The resulting expression is made of components like `4 seconds`, `1 year`, etc. In general, a positive integer and one of the valid units of time, are separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (`", "`) except for the last component, which is separated by `" and "`, just like it would be written in English.

// A more significant unit of time will occur before a least significant one. Therefore, `1 second and 1 year` is not correct, but `1 year and 1 second` is.

// Different components have different units of time. So there are no repeated units like in `5 seconds and 1 second`.

// A component will not appear at all if its value happens to be zero. Hence, `1 minute and 0 seconds` is not valid, but it should be just `1 minute`.

// A unit of time must be used "as much as possible". It means that the function should not return `61 seconds`, but `1 minute and 1 second` instead. Formally, the duration specified by a component must not be greater than any valid more significant unit of time.

// # Test Cases

// ```jsx
//     dotest(1, "1 second");
//     dotest(62, "1 minute and 2 seconds");
//     dotest(120, "2 minutes");
//     dotest(3600, "1 hour");
//     dotest(3662, "1 hour, 1 minute and 2 seconds");

//     dotest(15731080, "182 days, 1 hour, 44 minutes and 40 seconds");
//     dotest(132030240, "4 years, 68 days, 3 hours and 4 minutes");
//     dotest(205851834, "6 years, 192 days, 13 hours, 3 minutes and 54 seconds");
//     dotest(253374061, "8 years, 12 days, 13 hours, 41 minutes and 1 second");
//     dotest(242062374, "7 years, 246 days, 15 hours, 32 minutes and 54 seconds");
//     dotest(101956166, "3 years, 85 days, 1 hour, 9 minutes and 26 seconds");
//     dotest(33243586, "1 year, 19 days, 18 hours, 19 minutes and 46 seconds");
// ```
