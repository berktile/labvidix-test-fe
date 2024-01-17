import React from "react";
import styles from "./styles.module.scss";

export enum Status {
  Loading = "loading",
  Success = "success",
  Error = "error",
}

const ErrorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={78}
    viewBox="0 0 78 78"
    fill="none"
    {...props}
  >
    <circle cx={39} cy={39} r={36} stroke="#DD5144" strokeWidth={6} />
    <path
      d="M49 29L28 50"
      stroke="#DD5144"
      strokeWidth={6}
      strokeLinecap="round"
    />
    <path
      d="M28 29L49 50"
      stroke="#DD5144"
      strokeWidth={6}
      strokeLinecap="round"
    />
  </svg>
);

const LoadingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    viewBox="0 0 96 96"
    fill="none"
    {...props}
  >
    <g id="mingcute:loading-3-line" clipPath="url(#clip0_90_2982)">
      <g id="Group">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 48 48"
          to="360 48 48"
          dur="1s"
          repeatCount="indefinite"
        />
        <path
          id="Vector"
          opacity={0.1}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 16C39.5131 16 31.3737 19.3714 25.3726 25.3726C19.3714 31.3737 16 39.5131 16 48C16 56.4869 19.3714 64.6262 25.3726 70.6274C31.3737 76.6286 39.5131 80 48 80C56.4869 80 64.6262 76.6286 70.6274 70.6274C76.6286 64.6262 80 56.4869 80 48C80 39.5131 76.6286 31.3737 70.6274 25.3726C64.6262 19.3714 56.4869 16 48 16ZM8 48C8 25.908 25.908 8 48 8C70.092 8 88 25.908 88 48C88 70.092 70.092 88 48 88C25.908 88 8 70.092 8 48Z"
          fill="#3858FF"
        />
        <path
          id="Vector_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.9999 16.0001C39.7495 15.9826 31.8146 19.1692 25.8679 24.8881C25.4886 25.2516 25.0415 25.5368 24.552 25.7275C24.0625 25.9182 23.5403 26.0106 23.0151 25.9995C22.4898 25.9883 21.972 25.8738 21.491 25.6625C21.01 25.4513 20.5754 25.1473 20.2119 24.7681C19.8484 24.3888 19.5632 23.9417 19.3725 23.4522C19.1818 22.9627 19.0894 22.4404 19.1005 21.9152C19.1117 21.39 19.2261 20.8721 19.4374 20.3912C19.6487 19.9102 19.9526 19.4756 20.3319 19.1121C27.7682 11.9658 37.6865 7.98242 47.9999 8.00006C49.0608 8.00006 50.0782 8.42149 50.8283 9.17163C51.5785 9.92178 51.9999 10.9392 51.9999 12.0001C51.9999 13.0609 51.5785 14.0783 50.8283 14.8285C50.0782 15.5786 49.0608 16.0001 47.9999 16.0001Z"
          fill="#3858FF"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_90_2982">
        <rect width={96} height={96} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const SuccessIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    viewBox="0 0 96 96"
    fill="none"
    {...props}
  >
    <g id="CheckCircle">
      <path
        id="Vector"
        d="M65.1225 36.8775C65.4014 37.1561 65.6227 37.487 65.7737 37.8512C65.9247 38.2154 66.0024 38.6058 66.0024 39C66.0024 39.3942 65.9247 39.7846 65.7737 40.1488C65.6227 40.513 65.4014 40.8439 65.1225 41.1225L44.1225 62.1225C43.8439 62.4014 43.513 62.6227 43.1488 62.7737C42.7846 62.9247 42.3943 63.0024 42 63.0024C41.6058 63.0024 41.2154 62.9247 40.8512 62.7737C40.487 62.6227 40.1561 62.4014 39.8775 62.1225L30.8775 53.1225C30.3146 52.5596 29.9983 51.7961 29.9983 51C29.9984 50.2039 30.3146 49.4404 30.8775 48.8775C31.4404 48.3146 32.2039 47.9983 33 47.9983C33.7961 47.9983 34.5596 48.3146 35.1225 48.8775L42 55.7588L60.8775 36.8775C61.1561 36.5986 61.487 36.3773 61.8512 36.2263C62.2154 36.0753 62.6058 35.9976 63 35.9976C63.3943 35.9976 63.7846 36.0753 64.1488 36.2263C64.513 36.3773 64.8439 36.5986 65.1225 36.8775ZM87 48C87 55.7135 84.7127 63.2537 80.4273 69.6672C76.142 76.0808 70.051 81.0795 62.9247 84.0313C55.7984 86.9831 47.9568 87.7554 40.3915 86.2506C32.8262 84.7458 25.8771 81.0314 20.4229 75.5772C14.9686 70.1229 11.2542 63.1738 9.74939 55.6085C8.24457 48.0433 9.0169 40.2017 11.9687 33.0753C14.9205 25.949 19.9193 19.8581 26.3328 15.5727C32.7463 11.2873 40.2865 9 48 9C58.3401 9.01092 68.2536 13.1233 75.5651 20.4349C82.8767 27.7464 86.9891 37.6599 87 48ZM81 48C81 41.4732 79.0646 35.093 75.4385 29.6662C71.8124 24.2394 66.6585 20.0097 60.6286 17.512C54.5986 15.0143 47.9634 14.3608 41.562 15.6341C35.1607 16.9074 29.2806 20.0503 24.6655 24.6655C20.0504 29.2806 16.9074 35.1606 15.6341 41.562C14.3608 47.9634 15.0143 54.5986 17.512 60.6286C20.0097 66.6585 24.2394 71.8124 29.6662 75.4385C35.093 79.0646 41.4732 81 48 81C56.7491 80.9901 65.137 77.5101 71.3236 71.3236C77.5101 65.137 80.9901 56.7491 81 48Z"
        fill="#5CB85C"
      />
    </g>
  </svg>
);

interface StatusMessageProps {
  status: Status;
}
const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  let content = null;
  let message = null;

  switch (status) {
    case Status.Loading:
      content = <LoadingIcon />;
      message = "Files extracting...";
      break;
    case Status.Success:
      content = <SuccessIcon />;
      message = "Extraction completed successfully!";
      break;

    default:
      content = <ErrorIcon />;
      message = "Extraction failed";
  }

  return (
    <section className={styles.extractingStatusWrapper}>
      <div className={styles.spinner}>{content}</div>
      <p>{message}</p>
    </section>
  );
};

export default StatusMessage;
