"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { PropsWithChildren } from "react";
import Question from "./Question";

const components = {
  Question: Question,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

const StoryblokProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return children;
};

export default StoryblokProvider;
