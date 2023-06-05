interface ButtonIconProps {
  color?: 'yellow' | 'blue' | 'orange'
  icon?: 'arrow-left' | 'arrow-right'
}

export const ButtonIcon = ({
  color,
  icon = 'arrow-right'
}: ButtonIconProps) => {
  return (
    <>
      {icon === 'arrow-right' && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <path
            className={`
          ${color === 'yellow' ? 'fill-yellow-500 hover:fill-yellow-600' : ''}
          ${color === 'blue' ? 'fill-blue-500 hover:fill-blue-600' : ''}
          ${color === 'orange' ? 'fill-orange-500 hover:fill-orange-600' : ''}
        `}
            d="M29.2119 2.99796C21.4279 -1.66203 11.3159 0.929965 6.06387 6.16597C0.815872 11.406 -1.13613 19.606 0.783872 26.79C1.75587 30.422 3.69587 33.862 6.63587 36.182C9.22787 38.226 12.4759 39.314 15.7479 39.654C21.8359 40.286 28.1919 38.318 32.7119 34.17C37.2319 30.022 39.7759 23.714 39.1719 17.59C38.5719 11.462 34.7519 5.69797 29.2599 2.98596"
          />
          <path
            d="M32.6758 31.2059C33.9438 29.8459 34.8958 28.2299 35.4718 26.4619C35.6038 26.0579 35.3198 25.5579 34.9078 25.4659C34.4638 25.3659 34.0518 25.6019 33.9118 26.0299C33.8478 26.2299 33.7758 26.4299 33.6998 26.6259C33.6838 26.6739 33.6638 26.7179 33.6438 26.7659C33.6398 26.7779 33.5798 26.9179 33.6158 26.8419C33.6478 26.7659 33.5878 26.9019 33.5838 26.9179C33.5638 26.9619 33.5438 27.0099 33.5238 27.0539C33.1797 27.8118 32.7574 28.5317 32.2638 29.2019C32.2358 29.2419 32.2038 29.2819 32.1758 29.3219C32.2238 29.2539 32.2038 29.2859 32.1638 29.3339C32.1038 29.4099 32.0398 29.4899 31.9758 29.5659C31.8318 29.7379 31.6838 29.9019 31.5318 30.0659C31.2438 30.3779 31.1998 30.9099 31.5318 31.2099C31.8438 31.4939 32.3638 31.5339 32.6758 31.2059ZM8.52782 6.86993C5.35982 8.75793 3.11582 12.1179 2.51582 15.7499C2.34382 16.7899 2.28382 17.8419 2.37982 18.8939C2.41982 19.3139 2.72382 19.7259 3.18782 19.7019C3.59182 19.6819 4.03982 19.3419 3.99582 18.8939C3.95582 18.4739 3.93982 18.0539 3.94782 17.6299C3.95182 17.4179 3.96382 17.2099 3.97582 16.9979L3.99982 16.7019C4.00782 16.6419 4.01182 16.5779 4.01982 16.5179C4.02382 16.4979 4.04782 16.2979 4.03182 16.4059L4.04382 16.3299C4.05182 16.2819 4.05982 16.2339 4.06782 16.1819C4.08382 16.0859 4.09982 15.9859 4.11982 15.8899C4.15982 15.6699 4.20782 15.4539 4.26382 15.2379C4.36782 14.8179 4.49582 14.4019 4.64382 13.9939C4.67982 13.9019 4.71182 13.8059 4.74782 13.7139C4.76782 13.6659 4.86382 13.4299 4.80782 13.5619C5.06136 12.9688 5.36094 12.3963 5.70382 11.8499C5.80782 11.6819 5.91982 11.5179 6.03182 11.3539L6.20382 11.1099C6.23182 11.0699 6.26382 11.0299 6.29182 10.9899C6.40382 10.8379 6.23982 11.0539 6.34782 10.9179C6.60782 10.5899 6.88382 10.2699 7.17982 9.96993C7.50782 9.63393 7.85582 9.31793 8.21982 9.02593C8.21182 9.03393 8.40382 8.88593 8.31182 8.95393C8.23582 9.00993 8.39182 8.89393 8.40782 8.88193L8.70782 8.66593C8.91182 8.52593 9.11982 8.39393 9.33182 8.26593C9.69582 8.04993 9.85982 7.52593 9.62382 7.15793C9.39982 6.79393 8.91582 6.63793 8.52782 6.86993ZM1.94382 23.0139C2.00382 24.8819 2.47182 26.6979 3.30782 28.3659C3.49582 28.7459 4.06382 28.8819 4.41582 28.6579C4.80382 28.4059 4.90782 27.9579 4.70782 27.5499C4.01582 26.1699 3.61182 24.5579 3.56382 23.0139C3.55182 22.5899 3.19982 22.1859 2.75582 22.2059C2.32782 22.2219 1.92782 22.5619 1.94382 23.0139Z"
            fill="#FAFAFA"
          />
          <path
            d="M25.48 21.4258C25.3142 21.5923 25.1172 21.7243 24.9003 21.8144C24.6834 21.9045 24.4509 21.9509 24.216 21.9509C23.9811 21.9509 23.7485 21.9045 23.5316 21.8144C23.3147 21.7243 23.1177 21.5923 22.952 21.4258L15.252 13.6818C14.9175 13.343 14.73 12.886 14.73 12.4098C14.73 11.9337 14.9175 11.4767 15.252 11.1378C15.4177 10.9714 15.6147 10.8394 15.8316 10.7493C16.0485 10.6592 16.2811 10.6128 16.516 10.6128C16.7509 10.6128 16.9834 10.6592 17.2003 10.7493C17.4172 10.8394 17.6142 10.9714 17.78 11.1378L25.476 18.8818C26.172 19.5818 26.172 20.7258 25.48 21.4258Z"
            fill="#FAFAFA"
          />
          <path
            d="M25.48 18.9137C25.8144 19.2526 26.002 19.7096 26.002 20.1857C26.002 20.6619 25.8144 21.1188 25.48 21.4577L17.78 29.2017C17.6142 29.3681 17.4172 29.5002 17.2003 29.5903C16.9834 29.6804 16.7509 29.7268 16.516 29.7268C16.2811 29.7268 16.0485 29.6804 15.8316 29.5903C15.6147 29.5002 15.4177 29.3681 15.252 29.2017C14.9175 28.8628 14.73 28.4059 14.73 27.9297C14.73 27.4536 14.9175 26.9966 15.252 26.6577L22.948 18.9137C23.1141 18.7473 23.3115 18.6152 23.5287 18.5251C23.7459 18.435 23.9788 18.3887 24.214 18.3887C24.4492 18.3887 24.682 18.435 24.8993 18.5251C25.1165 18.6152 25.3138 18.7473 25.48 18.9137Z"
            fill="#FAFAFA"
          />
        </svg>
      )}

      {icon === 'arrow-left' && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <path
            className={`
          ${color === 'yellow' ? 'fill-yellow-500 hover:fill-yellow-600' : ''}
          ${color === 'blue' ? 'fill-blue-500 hover:fill-blue-600' : ''}
          ${color === 'orange' ? 'fill-orange-500 hover:fill-orange-600' : ''}`}
            d="M10.0479 36.7718C17.8319 41.4318 27.9439 38.8398 33.1959 33.6038C38.4439 28.3638 40.3959 20.1638 38.4759 12.9798C37.5039 9.34781 35.5639 5.90781 32.6239 3.58781C30.0319 1.54381 26.7839 0.455809 23.5119 0.115809C17.4239 -0.516191 11.0679 1.45181 6.54789 5.59981C2.02789 9.74781 -0.516107 16.0558 0.0878921 22.1798C0.68789 28.3078 4.50789 34.0718 9.99989 36.7838"
          />
          <path
            d="M13.78 18.3437C13.9458 18.1773 14.1428 18.0452 14.3597 17.9551C14.5766 17.865 14.8092 17.8186 15.044 17.8186C15.2789 17.8186 15.5115 17.865 15.7284 17.9551C15.9453 18.0452 16.1423 18.1773 16.308 18.3437L24.008 26.0877C24.3425 26.4266 24.53 26.8836 24.53 27.3597C24.53 27.8358 24.3425 28.2928 24.008 28.6317C23.8423 28.7981 23.6453 28.9302 23.4284 29.0203C23.2115 29.1104 22.9789 29.1567 22.744 29.1567C22.5092 29.1567 22.2766 29.1104 22.0597 29.0203C21.8428 28.9302 21.6458 28.7981 21.48 28.6317L13.784 20.8877C13.088 20.1877 13.088 19.0437 13.78 18.3437Z"
            fill="#FAFAFA"
          />
          <path
            d="M13.78 20.8558C13.4456 20.5169 13.258 20.0599 13.258 19.5838C13.258 19.1077 13.4456 18.6507 13.78 18.3118L21.48 10.5678C21.6458 10.4014 21.8428 10.2693 22.0597 10.1792C22.2766 10.0891 22.5092 10.0428 22.744 10.0428C22.9789 10.0428 23.2115 10.0891 23.4284 10.1792C23.6453 10.2693 23.8423 10.4014 24.008 10.5678C24.3425 10.9067 24.53 11.3637 24.53 11.8398C24.53 12.3159 24.3425 12.7729 24.008 13.1118L16.312 20.8558C16.1459 21.0222 15.9485 21.1543 15.7313 21.2444C15.5141 21.3345 15.2812 21.3809 15.046 21.3809C14.8109 21.3809 14.578 21.3345 14.3608 21.2444C14.1435 21.1543 13.9462 21.0222 13.78 20.8558Z"
            fill="#FAFAFA"
          />
          <path
            d="M6.5837 8.56384C5.3157 9.92384 4.3637 11.5398 3.7877 13.3078C3.6557 13.7118 3.9397 14.2118 4.3517 14.3038C4.7957 14.4038 5.2077 14.1678 5.3477 13.7398C5.4117 13.5398 5.4837 13.3398 5.5597 13.1438C5.5757 13.0958 5.5957 13.0518 5.6157 13.0038C5.6197 12.9918 5.6797 12.8518 5.6437 12.9278C5.6117 13.0038 5.6717 12.8678 5.6757 12.8518C5.6957 12.8078 5.7157 12.7598 5.7357 12.7158C6.07986 11.958 6.50215 11.2381 6.9957 10.5678C7.0237 10.5278 7.0557 10.4878 7.0837 10.4478C7.0357 10.5158 7.0557 10.4838 7.0957 10.4358C7.1557 10.3598 7.2197 10.2798 7.2837 10.2038C7.4277 10.0318 7.5757 9.86784 7.7277 9.70384C8.0157 9.39184 8.0597 8.85984 7.7277 8.55984C7.4157 8.27584 6.8957 8.23584 6.5837 8.56384ZM30.7317 32.8998C33.8997 31.0118 36.1437 27.6518 36.7437 24.0198C36.9157 22.9798 36.9757 21.9278 36.8797 20.8758C36.8397 20.4558 36.5357 20.0438 36.0717 20.0678C35.6677 20.0878 35.2197 20.4278 35.2637 20.8758C35.3037 21.2958 35.3197 21.7158 35.3117 22.1398C35.3077 22.3518 35.2957 22.5598 35.2837 22.7718L35.2597 23.0678C35.2517 23.1278 35.2477 23.1918 35.2397 23.2518C35.2357 23.2718 35.2117 23.4718 35.2277 23.3638L35.2157 23.4398C35.2077 23.4878 35.1997 23.5358 35.1917 23.5878C35.1757 23.6838 35.1597 23.7838 35.1397 23.8798C35.0997 24.0998 35.0517 24.3158 34.9957 24.5318C34.8917 24.9518 34.7637 25.3678 34.6157 25.7758C34.5797 25.8678 34.5477 25.9638 34.5117 26.0558C34.4917 26.1038 34.3957 26.3398 34.4517 26.2078C34.1982 26.801 33.8986 27.3734 33.5557 27.9198C33.4517 28.0878 33.3397 28.2518 33.2277 28.4158L33.0557 28.6598C33.0277 28.6998 32.9957 28.7398 32.9677 28.7798C32.8557 28.9318 33.0197 28.7158 32.9117 28.8518C32.6517 29.1798 32.3757 29.4998 32.0797 29.7998C31.7517 30.1358 31.4037 30.4518 31.0397 30.7438C31.0477 30.7358 30.8557 30.8838 30.9477 30.8158C31.0237 30.7598 30.8677 30.8758 30.8517 30.8878L30.5517 31.1038C30.3477 31.2438 30.1397 31.3758 29.9277 31.5038C29.5637 31.7198 29.3997 32.2438 29.6357 32.6118C29.8597 32.9758 30.3437 33.1318 30.7317 32.8998ZM37.3157 16.7558C37.2557 14.8878 36.7877 13.0718 35.9517 11.4038C35.7637 11.0238 35.1957 10.8878 34.8437 11.1118C34.4557 11.3638 34.3517 11.8118 34.5517 12.2198C35.2437 13.5998 35.6477 15.2118 35.6957 16.7558C35.7077 17.1798 36.0597 17.5838 36.5037 17.5638C36.9317 17.5478 37.3317 17.2078 37.3157 16.7558Z"
            fill="#FAFAFA"
          />
        </svg>
      )}
    </>
  )
}
