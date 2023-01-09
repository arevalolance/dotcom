import CardContainer from "components/CardContainer";
import { useState } from "react";
import styles from "./tool.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import { Icon } from "@iconify/react";

const grid = [
  [
    "akar-icons:nextjs-fill",
    "logos:sanity",
    "logos:vercel-icon",
    "logos:tailwindcss-icon",
    "logos:planetscale",
  ],
  [
    "simple-icons:obsidian",
    "logos:framer",
    "simple-icons:notion",
    "typcn:html5",
    "simple-icons:css3",
  ],
  [
    "logos:java",
    "ion:logo-javascript",
    "fa6-brands:golang",
    "logos:mysql",
    "logos:python",
  ],
];

const links = [
  {
    name: "akar-icons:nextjs-fill",
    link: "https://nextjs.org/",
  },
  {
    name: "logos:sanity",
    link: "https://www.sanity.io/",
  },
  {
    name: "logos:vercel-icon",
    link: "https://vercel.com/",
  },
  {
    name: "logos:tailwindcss-icon",
    link: "https://tailwindcss.com/",
  },
  {
    name: "logos:planetscale",
    link: "https://www.planetscale.com/",
  },
  {
    name: "simple-icons:obsidian",
    link: "https://obsidian.md/",
  },
  {
    name: "logos:framer",
    link: "https://www.framer.com/motion/",
  },
  {
    name: "simple-icons:notion",
    link: "https://www.notion.so/",
  },
  {
    name: "typcn:html5",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "simple-icons:css3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "logos:java",
    link: "https://www.java.com/en/",
  },
  {
    name: "ion:logo-javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "fa6-brands:golang",
    link: "https://golang.org/",
  },
  {
    name: "logos:mysql",
    link: "https://www.mysql.com/",
  },
  {
    name: "logos:python",
    link: "https://www.python.org/",
  },
];

const size = 60;
const gap = 10;

const Square = ({
  active,
  setActive,
  colIndex,
  rowIndex,
  x,
  y,
  icon,
  currentActive,
  setCurrentActive,
}) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  // TODO: onHover change the color of the icon to its original color
  return (
    <motion.div
      drag
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() =>
        icon === currentActive
          ? window.open(links.filter((e) => e.name === icon)[0].link, "_blank")
          : setCurrentActive(icon)
      }
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 1000, bounceDamping: 100 }}
      dragElastic={0.3}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        borderWidth: "5px",
        borderColor: currentActive === icon ? "#4a4a4a" : "transparent",
        background: `#171717`,
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        borderRadius: "10px",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        cursor: "pointer",
      }}
    >
      <Icon
        className={`${styles.icon} m-auto h-full w-full fill-[#dedede] p-2 text-[#dedede]`}
        icon={icon}
      />
    </motion.div>
  );
};
const ToolSection = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [currentActive, setCurrentActive] = useState<string>("");

  return (
    <CardContainer className="mx-auto flex w-11/12 flex-col items-center justify-center overflow-hidden py-0 px-0 md:h-[266px] md:w-[400px]">
      <div className={styles.app}>
        <motion.div style={{ width: "100%", height: "100%" }}>
          <motion.div
            style={{
              display: "flex",
              width: (size + gap) * 5 - gap,
              height: (size + gap) * 3 - gap,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "relative",
              perspective: 500,
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((item, colIndex) => (
                <Square
                  x={x}
                  y={y}
                  active={active}
                  setActive={setActive}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  key={rowIndex + colIndex}
                  icon={item}
                  currentActive={currentActive}
                  setCurrentActive={setCurrentActive}
                />
              ))
            )}
          </motion.div>
        </motion.div>
      </div>

      <span className="font-chubbo text-xs font-medium text-text-secondary">
        Drag = Fun | Double Click = Access
      </span>
    </CardContainer>
  );
};

export default ToolSection;
