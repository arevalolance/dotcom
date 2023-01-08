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
      color = "border-surface";
      break;
    case "dark":
      color = "border-button";
      break;
    default:
      color = "border-surface";
      break;
  }

  return (
    <hr
      className={`border-${color} border-[${thickness}] ${props.className}`}
    />
  );
};

export default Divider;
