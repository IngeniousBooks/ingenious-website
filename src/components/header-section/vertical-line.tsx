import styles from "./header.module.css";

const VerticalLine = () => (
  <svg
    id="b"
    className={styles["vertical"]}
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={60}
  >
    <g id="c">
      <path d="M.5,0v741" fill="#fff" stroke="#000" strokeMiterlimit="10" />
    </g>
  </svg>
);

export default VerticalLine;
