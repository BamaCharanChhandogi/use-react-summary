# use React Summary

![npm version](https://img.shields.io/npm/v/use-react-summary.svg)
![downloads](https://img.shields.io/npm/dm/use-react-summary.svg)
![license](https://img.shields.io/npm/l/use-react-summary.svg)

use-react-summary is a powerful React hook that leverages Google Generative AI to provide real-time text summarization. Whether you’re building a content-heavy application or simply need to condense information, this hook simplifies the integration of AI-driven summarization into your React components

## Features
- **AI-Powered Summarization:** Automatically summarize large blocks of text using advanced AI models from Google Generative AI.
- **Customizable Output:** Specify the desired summary length with the words parameter for greater control over the output.
- **Seamless Markdown Integration:** Outputs the summarized text in Markdown format, making it easy to style and render within your React app.
- **Error Handling:** Built-in error detection and loading states to enhance the user experience.
## Installation

Install the package via npm:
```
npm install use-react-summary
```

## Live Demo 
### [Try the `useSummary` Hook Demo](https://use-react-summary-demo-site.vercel.app/)

## Usage

To use the `useSummary` hook, follow these steps:

```jsx
import React from 'react';
import {useSummary} from 'use-react-summary';

const MyComponent = () => {
  const text = `This is the text you want to summarize.`;
  const { summarizeText, isLoading, error } = useSummary({ text, words: 100 });

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {summarizeText}
    </div>
  );
};
```

### Hook Parameters

- `text (string, required):` The text you want to summarize.
- `words (number, optional):` The maximum number of words you want in the summary.

### Returned Values

- `summarizeText (ReactElement):` A React element that renders the summarized text in Markdown format.
- `isLoading (boolean):` Indicates whether the summarization process is in progress.
- `error (string | null):` If an error occurs during the summarization process, this property will contain the error message. Otherwise, it will be `null`.

**Requirements**

This hook requires the following dependencies

- `react`
- `react-markdown`
- `@google/generative-ai`

These will be installed automatically when you install the package.

## Contribute

Contributions are welcome! If you have suggestions, feature requests, or want to report a bug, feel free to open an issue or submit a pull request.

**License**
-----------------
This project is licensed under the [LICENSE](LICENSE).

## Author
[Bama Charan Chhandogi](https://www.linkedin.com/in/bamacharanchhandogi/)
<hr>
Made with ❤️ for the React community