(function () {
  "use strict";

  const ABSOLUTE_ZERO = {
    celsius: -273.15,
    fahrenheit: -459.67,
    kelvin: 0
  };

  const UNIT_LABELS = {
    celsius: "Celsius",
    fahrenheit: "Fahrenheit",
    kelvin: "Kelvin"
  };

  const form = document.getElementById("converter-form");
  const input = document.getElementById("temperature-input");
  const unitSelect = document.getElementById("unit-select");
  const errorMessage = document.getElementById("error-message");
  const resetButton = document.getElementById("reset-button");
  const results = document.getElementById("results");
  const celsiusResult = document.getElementById("celsius-result");
  const fahrenheitResult = document.getElementById("fahrenheit-result");
  const kelvinResult = document.getElementById("kelvin-result");

  let hasInteracted = false;

  function parseStrictNumber(value) {
    const trimmed = value.trim();
    const numberPattern = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;

    if (trimmed === "") {
      return { valid: false, reason: "empty" };
    }

    if (!numberPattern.test(trimmed)) {
      return { valid: false, reason: "invalid" };
    }

    const numericValue = Number(trimmed);

    if (!Number.isFinite(numericValue)) {
      return { valid: false, reason: "invalid" };
    }

    return { valid: true, value: numericValue };
  }

  function validateTemperature(rawValue, unit) {
    const parsed = parseStrictNumber(rawValue);

    if (!parsed.valid) {
      if (parsed.reason === "empty") {
        return { valid: false, message: "Please enter a temperature value." };
      }

      return { valid: false, message: "Enter a complete finite number, such as -40, 0 or 98.6." };
    }

    const minimum = ABSOLUTE_ZERO[unit];

    if (parsed.value < minimum) {
      return {
        valid: false,
        message: `${UNIT_LABELS[unit]} cannot be below absolute zero (${formatLimit(minimum, unit)}).`
      };
    }

    return { valid: true, value: parsed.value };
  }

  function formatLimit(value, unit) {
    if (unit === "kelvin") {
      return "0 K";
    }

    return `${value.toFixed(2)}${unit === "celsius" ? "°C" : "°F"}`;
  }

  function toCelsius(value, unit) {
    if (unit === "fahrenheit") {
      return (value - 32) * 5 / 9;
    }

    if (unit === "kelvin") {
      return value - 273.15;
    }

    return value;
  }

  function convertTemperature(value, unit) {
    const celsius = toCelsius(value, unit);
    const fahrenheit = celsius * 9 / 5 + 32;
    const kelvin = celsius + 273.15;

    if (![celsius, fahrenheit, kelvin].every(Number.isFinite)) {
      return { valid: false, message: "The conversion result is too large to display. Please enter a smaller finite number." };
    }

    return {
      valid: true,
      values: {
        celsius,
        fahrenheit,
        kelvin
      }
    };
  }

  function formatTemperature(value) {
    const rounded = Number(value.toFixed(2));
    return Object.is(rounded, -0) ? "0.00" : rounded.toFixed(2);
  }

  function showError(message) {
    errorMessage.textContent = message;
    input.setAttribute("aria-invalid", "true");
  }

  function clearError() {
    errorMessage.textContent = "";
    input.removeAttribute("aria-invalid");
  }

  function clearResults() {
    results.hidden = true;
    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";
  }

  function showResults(values) {
    celsiusResult.textContent = formatTemperature(values.celsius);
    fahrenheitResult.textContent = formatTemperature(values.fahrenheit);
    kelvinResult.textContent = formatTemperature(values.kelvin);
    results.hidden = false;
  }

  function validateCurrentInput() {
    const validation = validateTemperature(input.value, unitSelect.value);

    if (!validation.valid) {
      showError(validation.message);
      return null;
    }

    clearError();
    return validation.value;
  }

  function handleInputChange() {
    clearResults();

    if (!hasInteracted) {
      return;
    }

    validateCurrentInput();
  }

  function handleSubmit(event) {
    event.preventDefault();
    hasInteracted = true;
    clearResults();

    const validValue = validateCurrentInput();

    if (validValue === null) {
      return;
    }

    const conversion = convertTemperature(validValue, unitSelect.value);

    if (!conversion.valid) {
      showError(conversion.message);
      return;
    }

    clearError();
    showResults(conversion.values);
  }

  function handleReset() {
    form.reset();
    hasInteracted = false;
    clearError();
    clearResults();
    input.focus();
  }

  input.addEventListener("input", function () {
    hasInteracted = true;
    handleInputChange();
  });

  unitSelect.addEventListener("change", function () {
    hasInteracted = true;
    handleInputChange();
  });

  form.addEventListener("submit", handleSubmit);
  resetButton.addEventListener("click", handleReset);

  window.temperatureConverter = {
    parseStrictNumber,
    validateTemperature,
    convertTemperature,
    formatTemperature
  };
}());
