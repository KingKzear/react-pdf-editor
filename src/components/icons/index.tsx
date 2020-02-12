import * as React from "react";
import { Colors } from "../../Colors";

interface IIconFill {
  fill: keyof typeof Colors;
}

export const CheckBox = ({ fill }: IIconFill) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.684 0.770466C13.0869 1.1482 13.1073 1.78103 12.7296 2.18394L5.2296 10.1839C5.02747 10.3995 4.74034 10.5147 4.44526 10.4985C4.15018 10.4823 3.87737 10.3364 3.70006 10.1L0.700059 6.1C0.368688 5.65818 0.458231 5.03137 0.900059 4.7C1.34189 4.36863 1.96869 4.45818 2.30006 4.9L4.58529 7.94698L11.2705 0.816062C11.6483 0.41315 12.2811 0.392736 12.684 0.770466Z"
      fill={Colors[fill]}
    />
  </svg>
);

export const LogoDark = () => (
  <svg width="78" height="29" viewBox="0 0 78 29" fill="none">
    <path d="M29.678 7.07007H24.4064V21.9908H29.678V7.07007Z" fill="#1D1D1B" />
    <path
      d="M29.678 0.0197754H24.4064V4.59584H29.678V0.0197754Z"
      fill="#E20613"
    />
    <path
      d="M56.1773 0.0197754H35.8986L32.2703 4.59596H52.5488L56.1773 0.0197754Z"
      fill="#1D1D1B"
    />
    <path
      d="M77.9997 24.4239L36.8535 24.465L50.5957 7.07007H43.9404L26.552 29H74.3714L77.9997 24.4239Z"
      fill="#1D1D1B"
    />
    <path
      d="M71.3464 7.07006C72.1586 8.20046 72.6085 9.30956 72.6085 10.9101C72.6085 14.6632 70.0923 17.3477 66.1786 17.3477C62.2649 17.3477 59.7489 14.6631 59.7489 10.9101C59.7489 9.30968 60.1988 8.20046 61.011 7.07006H55.1299C54.6526 8.34231 54.3975 9.41441 54.3975 10.9101C54.3975 17.3607 59.19 21.8828 66.1787 21.8828C73.1276 21.8828 78 17.3607 78 10.9101C78 9.41453 77.7405 8.34243 77.2571 7.07006C76.9181 6.1774 76.4688 5.34827 75.9203 4.59584C73.8587 1.76774 70.4024 0.0197754 66.1786 0.0197754C61.9306 0.0197754 58.4944 1.76774 56.4521 4.59584H66.4093C67.1161 4.59584 67.8217 4.69999 68.487 4.93365C69.675 5.35107 70.6457 6.09524 71.3464 7.07006Z"
      fill="#1D1D1B"
    />
    <path
      d="M21.6313 0H11.2766C8.39749 0.147089 5.82946 1.1354 3.87388 2.73791C3.21615 3.2767 2.59539 3.91742 2.0878 4.59596L21.6456 4.587L21.6313 0Z"
      fill="#1D1D1B"
    />
    <path
      d="M11.1049 14.1269L16.3738 14.1328V17.3487L12.0607 17.3478C8.147 17.3478 5.39139 14.7412 5.39139 10.91C5.39139 9.28525 5.87854 8.18452 6.73157 7.06995H0.744743C0.262592 8.32661 0 9.39405 0 10.91C0 17.6734 5.41862 22.0264 12.2076 22.0264L21.6456 21.991V9.87163H14.4789L11.1049 14.1269Z"
      fill="#1D1D1B"
    />
  </svg>
);
export const Logo = () => (
  <svg width="78" height="29" viewBox="0 0 78 29" fill="none">
    <path d="M29.678 7.07007H24.4064V21.9908H29.678V7.07007Z" fill="#fff" />
    <path
      d="M29.678 0.0197754H24.4064V4.59584H29.678V0.0197754Z"
      fill="#E20613"
    />
    <path
      d="M56.1773 0.0197754H35.8986L32.2703 4.59596H52.5488L56.1773 0.0197754Z"
      fill="#fff"
    />
    <path
      d="M77.9997 24.4239L36.8535 24.465L50.5957 7.07007H43.9404L26.552 29H74.3714L77.9997 24.4239Z"
      fill="#fff"
    />
    <path
      d="M71.3464 7.07006C72.1586 8.20046 72.6085 9.30956 72.6085 10.9101C72.6085 14.6632 70.0923 17.3477 66.1786 17.3477C62.2649 17.3477 59.7489 14.6631 59.7489 10.9101C59.7489 9.30968 60.1988 8.20046 61.011 7.07006H55.1299C54.6526 8.34231 54.3975 9.41441 54.3975 10.9101C54.3975 17.3607 59.19 21.8828 66.1787 21.8828C73.1276 21.8828 78 17.3607 78 10.9101C78 9.41453 77.7405 8.34243 77.2571 7.07006C76.9181 6.1774 76.4688 5.34827 75.9203 4.59584C73.8587 1.76774 70.4024 0.0197754 66.1786 0.0197754C61.9306 0.0197754 58.4944 1.76774 56.4521 4.59584H66.4093C67.1161 4.59584 67.8217 4.69999 68.487 4.93365C69.675 5.35107 70.6457 6.09524 71.3464 7.07006Z"
      fill="#fff"
    />
    <path
      d="M21.6313 0H11.2766C8.39749 0.147089 5.82946 1.1354 3.87388 2.73791C3.21615 3.2767 2.59539 3.91742 2.0878 4.59596L21.6456 4.587L21.6313 0Z"
      fill="#fff"
    />
    <path
      d="M11.1049 14.1269L16.3738 14.1328V17.3487L12.0607 17.3478C8.147 17.3478 5.39139 14.7412 5.39139 10.91C5.39139 9.28525 5.87854 8.18452 6.73157 7.06995H0.744743C0.262592 8.32661 0 9.39405 0 10.91C0 17.6734 5.41862 22.0264 12.2076 22.0264L21.6456 21.991V9.87163H14.4789L11.1049 14.1269Z"
      fill="#fff"
    />
  </svg>
);

export const addColumn = () => (
  <svg
    style={{
      height: 24,
      width: 24
    }}
    focusable={"false"}
    viewBox={"0 0 24 24"}
  >
    <path d="M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z M20.5,17  c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0  V9z"></path>
  </svg>
);

export const addBlock = () => (
  <svg
    style={{
      height: 24,
      width: 24
    }}
    focusable={"false"}
    viewBox={"0 0 24 24"}
  >
    <path d="M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M16,6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16V6.5z M9.5,6.5h5V9h-5V6.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.5  v-2H8V17.5z M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z"></path>
  </svg>
);
