type TProps = {
  className?: string;
  onClick?: () => void;
};

function MobileMenuIcon({ className, onClick }: TProps) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick ? onClick : undefined}
    >
      <path
        d="M1 13H17M1 7H17M1 1H17"
        stroke="#161519"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export default MobileMenuIcon;