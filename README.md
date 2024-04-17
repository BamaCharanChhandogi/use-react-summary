# use React Summary

This is a React component that allows you to summarize text using the Google Generative AI API. It provides a custom React hook `useSummary` that handles the text summarization process and returns the summarized text in Markdown format.

## Installation

You can install this package via npm:
```
npm install use-react-summary
```

## Usage

Import the `useSummary` hook in your React component:

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

The `useSummary` hook accepts an object with the following properties:

- `text` (string, required): The text you want to summarize.
- `words` (number, optional): The maximum number of words you want in the summary.

The hook returns an object with the following properties:

- `summarizeText` (ReactElement): A React element that renders the summarized text in Markdown format.
- `isLoading` (boolean): Indicates whether the summarization process is in progress.
- `error` (string | null): If an error occurs during the summarization process, this property will contain the error message. Otherwise, it will be `null`.

**Requirements**

This component requires the following dependencies:

- `react`
- `react-markdown`
- `@google/generative-ai`

These dependencies are automatically installed when you install the package via npm.

**License**
-----------------
This project is licensed under the [LICENSE](LICENSE).

This README file covers the following sections:

- **Installation**: Provides instructions on how to install the package via npm.
- **Usage**: Explains how to import and use the `useTest` hook in a React component, including the properties it accepts and returns.
- **Requirements**: Lists the dependencies required by the component.
- **License**: Mentions that the project is licensed under the MIT License.

Feel free to modify or add any additional sections to the README file as needed.