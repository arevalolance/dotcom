const Divider = (props: {
  thickness?: "light" | "medium" | "heavy";
  color?: "light" | "dark";
  className?: string;
}) => {
  let thickness;
  switch (props.thickness) {
    case "light":
      thickness = "1";
      break;
    case "medium":
      thickness = "2";
      break;
    case "heavy":
      thickness = "4";
      break;
    default:
      thickness = "2";
      break;
  }

  let color;
  switch (props.color) {
    case "light":
      color = "gray-500";
      break;
    case "dark":
      color = "gray-900";
      break;
    default:
      color = "gray-900";
      break;
  }

  return (
    <hr className={`border-${color} border-${thickness} ${props.className}`} />
  );
};

export default Divider;
