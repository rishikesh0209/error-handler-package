# error-code-parser

[![npm version](https://badge.fury.io/js/error-code-parser.svg)](https://badge.fury.io/js/error-code-parser)

A utility npm package that parses error messages and extracts relevant information to generate a structured error object.


## Installation

```bash
npm install krrs-error-code-parser

```

## Usage

```bash

const errorCodeParser = require('error-code-parser');

const error = new Error('BAD_REQUEST Something not found');

const parsedError = errorCodeParser(error);

console.log(parsedError);

output: {
  code: 400,
  message: 'Something not found'
}
```

## Supported Error Codes
NOT_FOUND = 404
BAD_REQUEST, BAD_REQUEST_TO_IGNORE = 400
CONFLICT = 422
FORBIDDEN = 403
UNPROCESSIBLE = 422
default = 500
