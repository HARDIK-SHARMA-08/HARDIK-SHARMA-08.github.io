import React, { Suspense } from "react";
const StoriesLazy = React.lazy(() => import("react-insta-stories"));

export const Stories = () => {
  const stories2 = [
    {
      content: () => {
        return (
          <div style={contentStyle}>
            <h1>The new version is here.</h1>
            <p>This is the new story.</p>
            <p>Now render React components right into your stories.</p>
            <p>Or here, an image!</p>
            <br />

            <h3>Perfect. But there`s more! →</h3>
          </div>
        );
      },
    },
    {
      content: () => {
        return (
          <Suspense>
            <div style={{ background: "snow", padding: 20, height: "100%" }}>
              <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
              <h1 style={{ marginTop: 5 }}>
                We have our good old image and video stories, just the same.
              </h1>
            </div>
          </Suspense>
        );
      },

      duration: 5000,
    },

    {
      url: "https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      preloadResource: false,
    },
  ];

  const contentStyle = {
    background: "#333",
    width: "100%",
    padding: 20,
    color: "white",
    height: "100%",
  };

  return (
    <div className="cursor-ew-resize">
      {" "}
      <StoriesLazy
        preloadCount={3}
        loop
        keyboardNavigation
        defaultInterval={8000}
        stories={stories2}
      />
    </div>
  );
};
