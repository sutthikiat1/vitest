function ButtonView({ onClick, text }) {
  return <button onClick={() => onClick()}>{text}</button>;
}

export default ButtonView;
