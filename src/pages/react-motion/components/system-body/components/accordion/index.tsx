import { useState } from "react";
import { MagicMotion } from "react-magic-motion";

import { AccordionContainer } from "./style";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const trasition = { type: "spring", stiffness: 180, damping: 20, mass: 1.1 };
  return (
    <AccordionContainer>
      <MagicMotion transition={trasition}>
        <div className="accordion-inside">
          <button onClick={() => setIsOpen(!isOpen)}>
            Click me to see my content <InnerSVG isOpen={isOpen} />
          </button>
          <InnerAccordionContent isOpen={isOpen} />
        </div>
      </MagicMotion>
    </AccordionContainer>
  );
};

const InnerAccordionContent = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="accordion-content">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
        lobortis sem, vel blandit dolor ultrices nec. Donec dapibus tellus ut
        libero sagittis, a pharetra eros placerat. Aliquam erat volutpat. Nunc
        nec nisl ac turpis semper pharetra. Nullam pulvinar pellentesque mauris,
        sit amet tincidunt nisl convallis id.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
        lobortis sem, vel blandit dolor ultrices nec. Donec dapibus tellus ut
        libero sagittis, a pharetra eros placerat. Aliquam erat volutpat. Nunc
        nec nisl ac turpis semper pharetra. Nullam pulvinar pellentesque mauris,
        sit amet tincidunt nisl convallis id.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
        lobortis sem, vel blandit dolor ultrices nec. Donec dapibus tellus ut
        libero sagittis, a pharetra eros placerat. Aliquam erat volutpat. Nunc
        nec nisl ac turpis semper pharetra. Nullam pulvinar pellentesque mauris,
        sit amet tincidunt nisl convallis id.
      </div>
    </div>
  );
};

const InnerSVG = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      key="exclude"
      style={{
        transform: `rotate(${isOpen ? 180 : 0}deg)`,
        transition: "320ms ease-in-out",
      }}
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 10L15.6714 21L27.5 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
