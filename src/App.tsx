import TweetSearchResults from "./Components/TweetSearchResults";

const App = () => {
  return (
    <main
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TweetSearchResults />
    </main>
  );
};

export default App;
