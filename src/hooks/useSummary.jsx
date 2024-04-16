import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const useSummary = ({ text, words }) => {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const MODEL_NAME = 'gemini-1.0-pro';
  const API_KEY ='AIzaSyD8Jgd-lGnC0883Z3lL6qFiz6iz7i7-VC0';

  useEffect(() => {
    if (text === "") {
      console.log("No text to summarize");
      return;
    }
    let word;
    if (words) {
      word += `within ${words} words`;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      // Configuration for text generation
      const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      };

      // Safety settings for the model
      const safetySettings = [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ];

      // Start a chat with the model
      const chat = model.startChat({
        generationConfig,
        safetySettings,
      });

      try {
        // Send the text for summarization
        const result = await chat.sendMessage(
          `please summarize this text ${word}: ${text}`
        );
        const response = result.response;
        setSummary(response.text());
      } catch (error) {
        setError("Error summarizing text");
        console.error("Error summarizing text:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [text, words]);
  const summarizeText = <ReactMarkdown>{summary}</ReactMarkdown>;
  return { summarizeText, isLoading, error };
};

export default useSummary;