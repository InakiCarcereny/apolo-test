import React from "react";
import type { SVGProps } from "react";

export function Galaxy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M342.5 17.9c-3.1 11.63-2.2 21.56-23.8 25.11c20.3-2.7 22.3 9.58 24.8 21.49c-2.8 1.94-5.5 4.11-8.1 6.49c-21.9 20.84-33 41.11-49 61.61c-6.3 1.2 5.3-53.52 31.1-79.87C225.1 40.92 207.6 268.4 236.4 275c-51.7 18.4-72.6-98.3-59.4-157.3c-37.1 3.9-62 39.8-67.9 60c2.8 27.1 6.1 55.1 38.7 80.9c-32.1 3.6-42-27.8-55.31-54C13.9 309.5 198.4 311.4 228.5 299.1c-93 70.5-149.62 52.3-196.77 39c-40.48 85.1 61.46 56 107.57 35.7c-18.4 30.7-72.25 37.6-88.92 41c61.62 51.3 174.42-67 200.02-106.5c2.5 65.7-74.3 134.4-122.8 171.7c43.6 2.2 83.2-17.9 102.4-55.5c0 10.1-4.1 22.6-9.6 35.8c15-2.1 39.6-6.2 48.8-24.2c25-54.1 37.8-93.1 15.3-138.2c29.9 33.5 63.6 65.3 58.4 114.5c26.9-15.6 48.8-33.6 24.7-60.1c14.1 1.4 23.6 7.7 32.8 13.7c13.9-2.8 34.4-19.9 33.7-33c-31.6-29.8-83.4-43.7-133.8-55.9c72.1-19.8 136.9-10.1 175.6 5.6c5-11.7 9.4-29.6 5.9-41.9c-16.4-9.7-62.7-7.8-83.3-5.6c17.7-15.7 56.8-21.1 81.3-21.2c-2-67.7-162.6 27.8-182.2 42.8c32.7-59.1 123.2-112.7 178.7-121.1c-13.2-31.1-37.2-34-64.3-22.4c2.4-9.5 6.7-17.49 23.4-15.29c-21.6-3.51-20.7-13.44-23.8-25.07c-2.4 13.55-4.1 17.11-19.4 26.67c14.3-2.17 16.4 6.69 17.4 14.69c-53.5 24.4-117.8 102.8-135.1 132.5c-22.1-24 51-121.5 107.7-187.46c-3.1-9.48-21.8-6.31-38.2 4.81c1.1-8.63.7-22.16 17.9-19.54c-15.3-9.6-17-13.16-19.4-26.71m-166.3.3c5.4 10.73 12.7 17.53-1 34.56c13.8-16.07 23.7-7.13 33.9.22c-4.6-7.19-16.3-17.67-.7-27.86c-17.8 3.09-21.4 1.57-32.2-6.92M47.71 26.61c-3.08 11.63-2.13 21.56-23.76 25.05c21.02-2.74 22.39 10.55 25.06 22.81c1.43-8.43-.28-23.97 18.14-21.16c-15.27-9.59-16.98-13.15-19.44-26.7m419.39 5.5c1.6 10.83 1.3 13.93-7.8 25.07c13.1-6.8 15.9 5.39 19.1 11.38c-1.2-9.97-3.4-20.36 13.1-23.64c-17.2 2.87-19.1-4.85-24.4-12.81M125.3 84.28c-.6 18.02-12 17.32-22.7 17.92c7 2.4 20.3 3 15.3 18.2c10.2-11.6 13.3-12.5 25.2-12.6c-9.4-4.3-17.8-4.9-17.8-23.52M71.21 153.9c-8.61 8.5-12.85 17.5-33.24 9.6c19.47 8.3 13.98 20.4 10.08 32.4c5.46-6.6 11.9-20.9 26.35-9.1c-8.38-16-8.02-19.9-3.19-32.9M453.9 282.7c-2.4 8.9-1.7 16.5-18.2 19.2c16-2.1 17.1 8.1 19.2 17.5c1.1-6.5-.2-18.4 13.8-16.3c-11.7-7.3-13-10-14.8-20.4M69.25 293.8c-12.82 12.7-16.72 13.5-30.41 12.7c10.55 5.7 20.39 7.1 18.72 29c2.3-21.1 15.46-19.4 28.05-19.1c-7.83-3.3-23.4-5.3-16.36-22.6m394.55 50.7c3.1 11.6 8.9 19.7-8 33.6c16.8-12.9 24.6-2.2 33.2 7.1c-3.1-8-12.4-20.6 4.9-27.4c-18-.5-21.3-2.8-30.1-13.3m-139.2 72.1c-2.7 12.3-4.1 25.5-25.1 22.8c21.6 3.5 20.7 13.4 23.8 25c2.4-13.5 4.1-17.1 19.4-26.6c-18.4 2.8-16.7-12.8-18.1-21.2M83.9 438.2c-2.83 16-4.84 20.2-22.86 31.5c21.68-3.3 19.67 15.1 21.33 25c3.19-14.5 4.84-30.1 29.63-26.9c-25.5-4.2-24.43-15.9-28.1-29.6m366.2 11.4c-7.3 9.6-10.2 19.1-31.5 14.2c20.4 5.4 16.8 18.1 14.6 30.6c4.5-7.3 8.8-22.4 24.8-12.8c-10.6-14.6-10.8-18.6-7.9-32"
      ></path>
    </svg>
  );
}