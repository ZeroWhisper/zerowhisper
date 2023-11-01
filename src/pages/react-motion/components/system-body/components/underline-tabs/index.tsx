import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

import { UnderlineTabsContainer } from "./style";

const underlineTabs = ["Recipes 🧑‍🍳", "Notes 📝", "Programming 🧑‍💻"];

export const UnderlineTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const tabsComponents = underlineTabs.map((text, i) => {
    return (
      <button
        type="button"
        key={`tab-${text}`}
        onClick={() => setSelectedIndex(i)}
      >
        {text}

        {selectedIndex === i && (
          <div className="bar-animation">
            <MagicTabSelect
              id="underline"
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <div className="black-bg" />
              {/* <div
                style={{
                  width: "100%",
                  height: "0.25rem",
                  backgroundColor: "black",
                  position: "absolute",
                }}
              /> */}
            </MagicTabSelect>
          </div>
        )}
      </button>
    );
  });

  return <UnderlineTabsContainer>{tabsComponents}</UnderlineTabsContainer>;
};
