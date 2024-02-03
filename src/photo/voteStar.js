const VoteStar = (props) => {
  const stars = [];

  for (let i = 0; i < props.n; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        style={{ marginRight: "2px" }}>
        <path
          d="M5.95333 0.311157L7.7929 4.03794L11.9067 4.63923L8.92999 7.53849L9.63248 11.6344L5.95333 9.69955L2.27417 11.6344L2.97666 7.53849L0 4.63923L4.11375 4.03794L5.95333 0.311157Z"
          fill="#FF971D"
        />
      </svg>
    );
  }
  for (let i = 0; i < 5 - props.n; i++) {
    stars.push(
      <svg
        key={i + 5}
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        style={{ marginRight: "2px" }}>
        <path
          d="M6.57991 0.311157L8.41949 4.03794L12.5332 4.63923L9.55658 7.53849L10.2591 11.6344L6.57991 9.69955L2.90076 11.6344L3.60325 7.53849L0.626587 4.63923L4.74034 4.03794L6.57991 0.311157Z"
          fill="#DEDEDE"
        />
      </svg>
    );
  }

  return <>{stars}</>;
};

export default VoteStar;
