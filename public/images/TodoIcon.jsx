import { memo } from 'react';

function TodoIcon() {
    return (
        <svg
            width="27"
            height="34"
            viewBox="0 0 27 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.97872 0C1.78134 0 0 1.78134 0 3.97872V30.0213C0 32.2187 1.78134 34 3.97872 34H22.7872C24.9846 34 26.766 32.2187 26.766 30.0213V3.97872C26.766 1.78134 24.9846 0 22.7872 0H3.97872ZM6.87234 4.34043C5.474 4.34043 4.34043 5.474 4.34043 6.87234C4.34043 8.27068 5.474 9.40425 6.87234 9.40425C8.27068 9.40425 9.40425 8.27068 9.40425 6.87234C9.40425 5.474 8.27068 4.34043 6.87234 4.34043ZM4.34043 17C4.34043 15.6017 5.474 14.4681 6.87234 14.4681C8.27068 14.4681 9.40425 15.6017 9.40425 17C9.40425 18.3983 8.27068 19.5319 6.87234 19.5319C5.474 19.5319 4.34043 18.3983 4.34043 17ZM6.87234 24.5957C5.474 24.5957 4.34043 25.7293 4.34043 27.1277C4.34043 28.526 5.474 29.6596 6.87234 29.6596C8.27068 29.6596 9.40425 28.526 9.40425 27.1277C9.40425 25.7293 8.27068 24.5957 6.87234 24.5957ZM14.1064 5.78723C13.5071 5.78723 13.0213 6.27306 13.0213 6.87234C13.0213 7.47162 13.5071 7.95745 14.1064 7.95745H22.7872C23.3865 7.95745 23.8723 7.47162 23.8723 6.87234C23.8723 6.27306 23.3865 5.78723 22.7872 5.78723H14.1064ZM13.0213 17C13.0213 16.4007 13.5071 15.9149 14.1064 15.9149H22.7872C23.3865 15.9149 23.8723 16.4007 23.8723 17C23.8723 17.5993 23.3865 18.0851 22.7872 18.0851H14.1064C13.5071 18.0851 13.0213 17.5993 13.0213 17ZM14.1064 26.0426C13.5071 26.0426 13.0213 26.5284 13.0213 27.1277C13.0213 27.7269 13.5071 28.2128 14.1064 28.2128H22.7872C23.3865 28.2128 23.8723 27.7269 23.8723 27.1277C23.8723 26.5284 23.3865 26.0426 22.7872 26.0426H14.1064Z"
                fill="white"
            />
        </svg>
    );
}

export default memo(TodoIcon);
