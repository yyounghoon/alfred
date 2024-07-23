type TProps = {
  className?: string;
  onClick?: () => void;
};

function CloseIcon({ className, onClick }: TProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick ? onClick : undefined}
    >
      <path
        d="M17.9999 17.9999L6 6M18 6L6 18"
        stroke="#161519"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default CloseIcon;
