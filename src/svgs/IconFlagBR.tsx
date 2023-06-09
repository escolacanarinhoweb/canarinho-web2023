interface Props {
  className?: string
}

export function IconFlagBR({ className }: Props) {
  return (
    <svg fill="none" viewBox="0 0 36 36" className={className}>
      <path
        d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"
        fill="#6DA544"
      />
      <path d="M18 7.043L32.87 18 18 28.956 3.13 18 18 7.043z" fill="#FFDA44" />
      <path
        d="M18 24.26a6.26 6.26 0 100-12.52 6.26 6.26 0 000 12.52z"
        fill="#F0F0F0"
      />
      <path
        d="M14.87 17.609c-1.09 0-2.14.165-3.129.472a6.26 6.26 0 0011.386 3.51 10.55 10.55 0 00-8.257-3.982zM24.145 19.2a6.26 6.26 0 00-11.898-3.67 12.913 12.913 0 012.623-.27c3.636 0 6.926 1.512 9.275 3.94z"
        fill="#0052B4"
      />
    </svg>
  )
}
