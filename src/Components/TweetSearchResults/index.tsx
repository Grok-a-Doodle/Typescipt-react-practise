import { TweetState, useTweetStore } from "../../Store/store.ts";

const TweetSearchResults = () => {
  const { tweets, addTweet, removeTweet } = useTweetStore(
    (state: TweetState) => state
  );

  // const refactored = Object.entries(
  //   tweets.reduce((acc, curr) => {
  //     console.log({ acc, curr });
  //     if (!acc[curr.category]) {
  //       acc[curr.category] = [];
  //     }

  //     acc[curr.category] = [...acc[curr.category], curr];

  //     return acc;
  //   }, {})
  // );
  // console.log("refactored: ", refactored);
  // const rows: Array<JSX.Element> = [];
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
      {/* {refactored.map(([key, arr]) => {
        return (
          <>
            <h3>{key}</h3>
            {arr.map((tweet) => {
              return (
                <section
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{tweet.text}</p>
                  <p>{tweet.reTweets}</p>
                </section>
              );
            })}
          </>
        );
      })} */}
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
