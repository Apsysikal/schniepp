import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function MailIcon(props: IconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.5 30.75H10.5C6 30.75 3 28.5 3 23.25V12.75C3 7.5 6 5.25 10.5 5.25H25.5C30 5.25 33 7.5 33 12.75V23.25C33 28.5 30 30.75 25.5 30.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5 13.5L20.805 17.25C19.26 18.48 16.725 18.48 15.18 17.25L10.5 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_1475)">
        <path
          d="M33.3425 0H2.6575C1.95269 0 1.27674 0.279986 0.778364 0.778364C0.279986 1.27674 0 1.95269 0 2.6575V33.3425C0 34.0473 0.279986 34.7233 0.778364 35.2216C1.27674 35.72 1.95269 36 2.6575 36H33.3425C34.0473 36 34.7233 35.72 35.2216 35.2216C35.72 34.7233 36 34.0473 36 33.3425V2.6575C36 1.95269 35.72 1.27674 35.2216 0.778364C34.7233 0.279986 34.0473 0 33.3425 0ZM10.73 30.6675H5.3175V13.475H10.73V30.6675ZM8.02 11.0925C7.40605 11.089 6.80687 10.9038 6.2981 10.5601C5.78933 10.2165 5.39376 9.7298 5.16132 9.16153C4.92887 8.59327 4.86997 7.96889 4.99205 7.36718C5.11412 6.76548 5.4117 6.21341 5.84723 5.78067C6.28276 5.34793 6.83672 5.0539 7.4392 4.93569C8.04168 4.81748 8.66567 4.88039 9.23243 5.11648C9.79919 5.35257 10.2833 5.75125 10.6237 6.26222C10.9641 6.77319 11.1455 7.37354 11.145 7.9875C11.1508 8.39855 11.0738 8.80656 10.9185 9.18721C10.7633 9.56785 10.533 9.91335 10.2414 10.2031C9.94974 10.4929 9.60277 10.7209 9.22114 10.8737C8.8395 11.0265 8.431 11.1009 8.02 11.0925ZM30.68 30.6825H25.27V21.29C25.27 18.52 24.0925 17.665 22.5725 17.665C20.9675 17.665 19.3925 18.875 19.3925 21.36V30.6825H13.98V13.4875H19.185V15.87H19.255C19.7775 14.8125 21.6075 13.005 24.4 13.005C27.42 13.005 30.6825 14.7975 30.6825 20.0475L30.68 30.6825Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1475">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_1476)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.0149 0C8.05312 0 0 8.11249 0 18.1488C0 26.1713 5.15991 32.9622 12.3181 35.3657C13.213 35.5464 13.5409 34.9752 13.5409 34.4947C13.5409 34.0739 13.5114 32.6318 13.5114 31.1291C8.50005 32.211 7.45649 28.9657 7.45649 28.9657C6.65114 26.8623 5.45786 26.3217 5.45786 26.3217C3.81766 25.2099 5.57734 25.2099 5.57734 25.2099C7.39675 25.3301 8.35144 27.0729 8.35144 27.0729C9.96177 29.837 12.5567 29.056 13.6006 28.5751C13.7496 27.4033 14.2271 26.592 14.7341 26.1414C10.7373 25.7207 6.53203 24.1583 6.53203 17.1871C6.53203 15.2039 7.24741 13.5814 8.38094 12.3196C8.2021 11.8689 7.57559 10.0057 8.56015 7.5118C8.56015 7.5118 10.0812 7.03095 13.511 9.37472C14.9794 8.97745 16.4937 8.77536 18.0149 8.77366C19.536 8.77366 21.0866 8.98422 22.5184 9.37472C25.9485 7.03095 27.4696 7.5118 27.4696 7.5118C28.4542 10.0057 27.8273 11.8689 27.6485 12.3196C28.8119 13.5814 29.4978 15.2039 29.4978 17.1871C29.4978 24.1583 25.2925 25.6904 21.2658 26.1414C21.9222 26.7122 22.4886 27.7938 22.4886 29.5066C22.4886 31.9404 22.4591 33.8936 22.4591 34.4943C22.4591 34.9752 22.7873 35.5464 23.6818 35.366C30.84 32.9618 35.9999 26.1713 35.9999 18.1488C36.0294 8.11249 27.9468 0 18.0149 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1476">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SwissFlagIcon(props: IconProps) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_1291)">
        <rect width="22" height="16" rx="2" fill="#F93939" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.42856 6.40001H6.28571V9.60001H9.42856V12.8H12.5714V9.60001H15.7143V6.40001H12.5714V3.20001H9.42856V6.40001Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1291">
          <rect width="22" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function GermanFlagIcon(props: IconProps) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_1299)">
        <g clipPath="url(#clip1_1_1299)">
          <rect width="22" height="16" rx="2" fill="#F93939" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11H23V16H0V11Z"
            fill="#FFDA2C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H23V5H0V0Z"
            fill="#151515"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_1299">
          <rect width="22" height="16" fill="white" />
        </clipPath>
        <clipPath id="clip1_1_1299">
          <rect width="22" height="16" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function AmericanFlagIcon(props: IconProps) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_1294)">
        <g clipPath="url(#clip1_1_1294)">
          <rect width="22" height="16" rx="2" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H9.42857V7.46667H0V0Z"
            fill="#1A47B8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.42857 0V1.06667H22V0H9.42857ZM9.42857 2.13333V3.2H22V2.13333H9.42857ZM9.42857 4.26667V5.33333H22V4.26667H9.42857ZM9.42857 6.4V7.46667H22V6.4H9.42857ZM0 8.53333V9.6H22V8.53333H0ZM0 10.6667V11.7333H22V10.6667H0ZM0 12.8V13.8667H22V12.8H0ZM0 14.9333V16H22V14.9333H0Z"
            fill="#F93939"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.04761 1.06668V2.13335H2.09523V1.06668H1.04761ZM3.14285 1.06668V2.13335H4.19046V1.06668H3.14285ZM5.23808 1.06668V2.13335H6.2857V1.06668H5.23808ZM7.33332 1.06668V2.13335H8.38094V1.06668H7.33332ZM6.2857 2.13335V3.20001H7.33332V2.13335H6.2857ZM4.19046 2.13335V3.20001H5.23808V2.13335H4.19046ZM2.09523 2.13335V3.20001H3.14285V2.13335H2.09523ZM1.04761 3.20001V4.26668H2.09523V3.20001H1.04761ZM3.14285 3.20001V4.26668H4.19046V3.20001H3.14285ZM5.23808 3.20001V4.26668H6.2857V3.20001H5.23808ZM7.33332 3.20001V4.26668H8.38094V3.20001H7.33332ZM1.04761 5.33335V6.40001H2.09523V5.33335H1.04761ZM3.14285 5.33335V6.40001H4.19046V5.33335H3.14285ZM5.23808 5.33335V6.40001H6.2857V5.33335H5.23808ZM7.33332 5.33335V6.40001H8.38094V5.33335H7.33332ZM6.2857 4.26668V5.33335H7.33332V4.26668H6.2857ZM4.19046 4.26668V5.33335H5.23808V4.26668H4.19046ZM2.09523 4.26668V5.33335H3.14285V4.26668H2.09523Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_1294">
          <rect width="22" height="16" fill="white" />
        </clipPath>
        <clipPath id="clip1_1_1294">
          <rect width="22" height="16" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
