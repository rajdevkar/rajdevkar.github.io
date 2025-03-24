import { WorkCardType } from "@/types";

const workItems: WorkCardType[] = [
  {
    title: "Gradients",
    description:
      "No need to remember that complicated gradient syntax — create silky-smooth gradients with just a few utility classes.",
    icon: (
      <svg
        className="text-gray-950 [--site-background:var(--color-white)] dark:text-white dark:[--site-background:var(--color-gray-950)]"
        width="112"
        height="72"
        viewBox="0 0 112 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_408_5730)">
          <path
            d="M51.2301 6.00001L5.33071 32.5C4.1443 33.185 3.54647 34.0811 3.53722 34.9788V38C3.53721 38.9048 4.13508 39.8097 5.33082 40.5L51.2302 67C53.6216 68.3807 57.4989 68.3807 59.8904 67L105.79 40.5C106.985 39.8097 107.583 38.9048 107.583 38L107.583 35C107.583 34.0952 106.985 33.1904 105.79 32.5L59.8903 6.00001C57.4988 4.6193 53.6215 4.6193 51.2301 6.00001Z"
            fill="var(--site-background)"
          />
          <path
            d="M54.6946 61.9999C55.1729 62.276 55.9484 62.276 56.4267 61.9999L100.594 36.4999L56.4267 10.9999C55.9484 10.7238 55.1729 10.7237 54.6946 10.9999L10.5273 36.4999L54.6946 61.9999Z"
            fill="url(#paint0_linear_408_5730)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_408_5730"
            x1="10.501"
            y1="36"
            x2="55.5607"
            y2="62.207"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0.75" />
            <stop offset="1" stopColor="var(--site-background)" />
          </linearGradient>
        </defs>
      </svg>
    ),
    image: "/images/work/gradients-demo.jpg",
  },
  {
    title: "3D Transforms",
    description:
      "Sometimes two dimensions aren't enough. Scale, rotate, and translate any element in 3D space to add a touch of depth.",
    icon: (
      <svg
        className="text-gray-950 dark:text-white"
        width="112"
        height="72"
        viewBox="0 0 112 72"
        fill="none"
      >
        <path
          d="M56 16L16 40L56 64L96 40L56 16Z"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <path
          d="M56 16L16 40L56 64L96 40L56 16Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M56 24L24 43L56 62L88 43L56 24Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
    ),
    image: "/images/work/3d-transforms.jpg",
  },
  {
    title: "CSS Variables",
    description:
      "Customizing your theme is as simple as creating a few CSS variables.",
    icon: (
      <svg
        className="text-gray-950 dark:text-white"
        width="112"
        height="72"
        viewBox="0 0 112 72"
        fill="none"
      >
        <path d="M4 12H108V60H4V12Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M4 12H108V60H4V12Z" stroke="currentColor" strokeWidth="2" />
        <path
          d="M28 36L84 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 44L68 44"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 28L76 28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    image: "/images/work/css-vars.jpg",
  },
  {
    title: "P3 Colors",
    description:
      "The color palette now uses more vibrant wide gamut colors without you needing to understand what any of that even means.",
    icon: (
      <svg
        className="text-gray-950 dark:text-white"
        width="112"
        height="72"
        viewBox="0 0 112 72"
        fill="none"
      >
        <circle cx="56" cy="36" r="24" fill="currentColor" fillOpacity="0.1" />
        <circle cx="56" cy="36" r="24" stroke="currentColor" strokeWidth="2" />
        <path d="M56 24V48" stroke="currentColor" strokeWidth="2" />
        <path d="M44 36H68" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    image: "/images/work/p3-colors.jpg",
  },
];

export default workItems;
