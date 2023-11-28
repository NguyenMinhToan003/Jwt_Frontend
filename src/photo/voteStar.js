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
        fill="none">
        <path
          d="M5.95333 0.311157L7.7929 4.03794L11.9067 4.63923L8.92999 7.53849L9.63248 11.6344L5.95333 9.69955L2.27417 11.6344L2.97666 7.53849L0 4.63923L4.11375 4.03794L5.95333 0.311157Z"
          fill="#FF971D"
        />
      </svg>
    );
  }

  return <>{stars}</>;
};

export default VoteStar;
