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

// Here is the interface for the search tweets
export interface SearchState {
  // this is the property that are declared to their type.
  searchTweet: string, 
  searchResult: Tweet[];
  // these are the states that will be changing 
  setSearchTweet: (search: string) => void,
  removeSearchTweet: (id: number) => void, 
}

export const useTweetStore = create<TweetState>()((set) => ({
  tweets: data,
  addTweet: (tweet) => set((state) => ({tweets: [...state.tweets, tweet]})),
  removeTweet: (id) => set((state) => ({ tweets: state.tweets.filter(tweet => tweet.id !== id)}))
}))

//  create your own store searchStore 
// future reference this is the state that will be updating e.g re-rendering
export const useSearchState = create<SearchState>()((set) =>({
  searchTweet: '',
  setSearchTweet: (search) => set(({searchTweet: search})),
  removeSearchTweet: () => set({searchTweet: ''}),
  searchResult: []
}) )

