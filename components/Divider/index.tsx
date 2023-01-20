const Divider = (props: {
  thickness?: "light" | "medium" | "heavy";
  color?: "light" | "dark";
  className?: string;
}) => {
  let thickness;
  switch (props.thickness) {
    case "light":
      thickness = "border-1";
      break;
    case "medium":
      thickness = "border-2";
      break;
    case "heavy":
      thickness = "border-4";
      break;
    default:
      thickness = "border-2";
      break;
  }

  let color;
  switch (props.color) {
    case "light":
      color = "border-border-surface";
      break;
    case "dark":
      color = "border-button";
      break;
    default:
      color = "border-surface";
      break;
  }

  return <hr className={`${color} ${thickness} ${props.className}`} />;
};

export default Divider;
