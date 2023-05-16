import { TweetState, useTweetStore } from "../../Store/store.ts";

const TweetSearchResults = () => {
  const { tweets, addTweet } = useTweetStore((state: TweetState) => state);

  const rows: JSX.Element[] = [];

  let isLastCategory: string | null = null;

  tweets.forEach((tweet) => {
    if (tweet.category !== isLastCategory) {
      rows.push(<h3 key={tweet.category}>{tweet.category}</h3>);
    }
    //toggle ?
    rows.push(
      <section
        key={tweet.id}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>{tweet.text}</p>
        <p>{tweet.reTweets}</p>
      </section>
    );
    isLastCategory = tweet.category;
  });

  return (
    <>
      {rows}
      <button
        onClick={() =>
          addTweet({
            id: 5,
            category: "Technology",
            reTweets: 88,
            isLocal: true,
            text: "Last tweet",
          })
        }
      >
        Add tweet
      </button>
    </>
  );
};

export default TweetSearchResults;
