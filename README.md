# simple-mod

`simple-mod` is a lightweight NPM package for performing modular arithmetic without using the `%` operator. This package handles modular calculations gracefully, including negative numbers, and provides consistent results.

---

## Installation

Install the package via NPM:

```bash
npm install simple-mod
```

```Javascript
const { mod } = require('simple-mod');
```

## Example Usage
```Javascript
const { mod } = require('simple-mod');

console.log(mod(10, 3));   // Output: 1
console.log(mod(-10, 3));  // Output: 2
console.log(mod(10, -3));  // Output: -2
console.log(mod(-10, -3)); // Output: -1
```

## Why Use simple-mod?

- No % Operator: Avoids the computational cost of % in performance-critical scenarios.
- Handles Negatives: Ensures consistent behavior for negative numbers.
- Lightweight: Designed to be fast and simple, with no dependencies.

## Development

###Testing
To run tests:

```bash
npm test
```

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

- Fork the repository.
- Clone your fork: git clone https://github.com/your-username/simple-mod.
- Create a feature branch: git checkout -b my-feature.
- Commit your changes: git commit -m 'Add my feature'.
- Push your branch: git push origin my-feature.
- Open a pull request.

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software under the terms of the MIT License.
