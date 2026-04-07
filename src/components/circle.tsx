

interface CircleProps {
  bgColor?: string;
  color?: string;
}

export function Circle({ bgColor = "red", color = "white" }: CircleProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
      }}
    >
      Circle
    </div>
  );
}