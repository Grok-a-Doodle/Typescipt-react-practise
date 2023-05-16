import { create } from 'zustand'
import { data } from "../lib/data.js";

export interface Tweet {
  id: number;
  category: string;
  reTweets: number;
  isLocal: boolean;
  text: string;
}

export interface TweetState {
  tweets: Tweet[];
  addTweet: (tweet: Tweet) => void;
  removeTweet: (id: number) => void;
}

export const useTweetStore = create<TweetState>()((set) => ({
  tweets: data,
  addTweet: (tweet) => set((state) => ({tweets: [...state.tweets, tweet]})),
  removeTweet: (id) => set((state) => ({ tweets: state.tweets.filter(tweet => tweet.id !== id)}))
}))

