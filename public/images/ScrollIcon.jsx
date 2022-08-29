import { memo } from 'react';

function ScrollIcon() {
    return (
        <svg
            width="34"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.03376 0C1.36088 0 0 1.36112 0 3.03399V5.37649H6.06776V3.03399C6.06776 1.36112 4.70664 0 3.03376 0ZM29.0846 27.5742V3.99924C29.0846 1.79063 27.2942 0 25.0856 0H6.23482C6.986 0.792198 7.4503 1.85883 7.4503 3.03399V31.0335C7.4503 32.6654 8.70174 34.0714 10.3315 34.1518C12.0735 34.2376 13.5181 32.8451 13.5181 31.1215V27.576H29.0848C29.0848 27.5753 29.0846 27.5749 29.0846 27.5742ZM13.1411 22.5048H23.8104V24.3482H13.1411V22.5048ZM13.1411 17.9731H23.8104V19.8165H13.1411V17.9731ZM13.1411 13.4413H23.8104V15.2847H13.1411V13.4413ZM13.1411 8.90981H23.8104V10.7532H13.1411V8.90981ZM13.1411 4.37806H23.8104V6.22145H13.1411V4.37806ZM14.9006 28.9585V31.1215C14.9006 32.2967 14.4363 33.3633 13.6851 34.1555H30.9662C32.6391 34.1555 34 32.7947 34 31.1215V28.9585H14.9006Z"
                fill="white"
            />
        </svg>
    );
}

export default memo(ScrollIcon);
