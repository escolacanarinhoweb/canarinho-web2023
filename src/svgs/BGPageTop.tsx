interface Props {
  className?: string
}

export const BGPageTop = ({ className }: Props) => {
  return (
    <svg
      width="1920"
      height="423"
      viewBox="0 0 1920 423"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
    >
      <path d="M0 1H1920V423L0 403V1Z" fill="#F3D254" />
      <path
        d="M923.057 158.233C675.221 249.414 319.224 270.585 0.389648 177.26V0H1913.85C1821.45 0 1295.31 21.2786 923.057 158.233Z"
        fill="#E1C24B"
      />
      <path
        d="M1920 423H0V354.491C55.5 361.347 112.9 364.278 171.2 364.278C294.9 364.278 421.3 350.952 536 333.59C708.4 307.436 871.3 272.213 1053.6 257.505C1112.7 252.75 1173.5 250.262 1234.3 250.262C1333 250.262 1431.2 256.786 1521.6 270.499C1707.1 298.699 1849.3 356.537 1920 423Z"
        fill="#FAFAFA"
      />
    </svg>
  )
}
