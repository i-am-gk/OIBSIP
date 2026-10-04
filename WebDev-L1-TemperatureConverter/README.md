# Temperature Converter Website

Author: Ghani Abdul Rehman Khan  
Internship Track: Oasis Infobyte Web Development & Designing  
Task: Level 1, Task 3 - Temperature Converter Website

## Objective

Build a polished temperature converter that accepts Celsius, Fahrenheit or Kelvin input, validates it carefully and displays all three converted temperatures.

## Features

- Clearly labelled temperature input accepting positive, negative and decimal numbers.
- Unit dropdown for Celsius, Fahrenheit and Kelvin.
- Convert button and Enter-key form submission.
- Result cards for Celsius, Fahrenheit and Kelvin.
- Friendly errors for empty input, invalid or non-finite input and values below absolute zero.
- Live validation after interaction while typing or changing units.
- Outdated results clear whenever input or unit changes.
- Reset button clears input, errors and results, restores Celsius and focuses the input.
- Formula explanation panel.
- Accessible error/result announcements, visible focus and responsive layout.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks, backend, package installation or build tools are used.

## Folder Structure

```text
WebDev-L1-TemperatureConverter/
  index.html
  style.css
  script.js
  README.md
  screenshots/
```

## How to Run

Open `index.html` directly in a web browser.

## Conversion Formulas

The converter uses Celsius as the intermediate value.

- Fahrenheit to Celsius: `(F - 32) x 5/9`
- Kelvin to Celsius: `K - 273.15`
- Celsius to Fahrenheit: `C x 9/5 + 32`
- Celsius to Kelvin: `C + 273.15`

## Absolute-Zero Limits

- Celsius: `-273.15°C`
- Fahrenheit: `-459.67°F`
- Kelvin: `0 K`

Exact absolute zero is valid. Values below the selected unit's limit show an error.

## Task 3 Requirement Checklist

| Official requirement | Implementation |
| --- | --- |
| Temperature input accepts positive, negative and decimal numbers | Text input with strict JavaScript numeric validation. |
| Input-unit dropdown with Celsius, Fahrenheit and Kelvin | `select` element includes all three units. |
| Convert button and Enter submission | Form submit handler powers button clicks and Enter key. |
| Display all three resulting temperatures | Results section has separate cards for °C, °F and K. |
| Friendly errors for empty, invalid, non-finite and below absolute zero | `validateTemperature()` and `parseStrictNumber()` return user-friendly messages. |
| Validate while typing/changing unit after interaction | Input and change listeners validate after the user interacts. |
| Clear outdated results on input/unit change and hide invalid submissions | `handleInputChange()` and submit flow clear/hide results. |
| Reset button restores default state and focuses input | Reset handler clears state, restores Celsius through form reset and focuses input. |
| Short formula explanation | Formula panel is included below the converter. |
| Footer credit | Footer includes developer name and Oasis Infobyte Task 3 credit. |
| HTML5, CSS3 and vanilla JavaScript only | Uses `index.html`, `style.css` and `script.js` only. |
| Accessible responsive design | Semantic HTML, labels, live regions, focus styles, Grid/Flexbox and mobile media queries are included. |

## Verification Results

JavaScript calculation and event-handler verification was performed with Node using the actual functions from `script.js`.

Passed checks:

- `0°C -> 32°F and 273.15 K`
- `100°C -> 212°F and 373.15 K`
- `32°F -> 0°C and 273.15 K`
- `-40°C -> -40°F and 233.15 K`
- `273.15 K -> 0°C and 32°F`
- `-273.15°C`, `-459.67°F` and `0 K` are valid absolute-zero inputs.
- Values below each absolute-zero limit show an error.
- Empty input, invalid text such as `12abc` and non-finite input such as `1e309` show errors.
- Decimal input converts correctly.
- Negative zero is displayed as `0.00`.
- Enter/form submission updates the result cards.
- Reset clears input, errors and results, restores Celsius and focuses the input.

Browser screenshots were captured with local Chrome/Edge headless. Tablet and desktop captures rendered correctly. The 375px mobile headless capture was attempted, but the browser cropped a wider layout instead of honoring the requested narrow viewport, so mobile layout should still be checked manually in a normal browser.

Captured screenshots:

- `screenshots/tablet-768.png`
- `screenshots/desktop-1440.png`

Remaining manual browser checks:

- Open `index.html` and resize near 375px width.
- Confirm there is no horizontal scrolling or overlapping content on mobile.
- Confirm visible keyboard focus in the browser.
- Confirm errors and results are announced as expected by assistive technology.
