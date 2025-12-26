import React from 'react';

const SingleData = ({ single }) => {
  return (
    <div className="flex group">
      <div className="flex flex-col items-center mr-4">
        <div>
          {/* icon */}
          <div className="flex items-center justify-center w-10 h-10  rounded-full gradient_color -rotate-90 group-hover:scale-115 transition-transform duration-1000">
            <svg
              className="w-4 text-white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                strokeMiterlimit="10"
                x1="12"
                y1="2"
                x2="12"
                y2="22"
              />
              <polyline
                fill="none"
                strokeMiterlimit="10"
                points="19,15 12,22 5,15"
              />
            </svg>
          </div>
        </div>
        <div className="w-px h-full bg-[#5831C3]" />
      </div>
      <div className="pt-1 pb-8 group-hover:scale-102 transition-transform duration-1000">
        <p className="mb-2 text-xl font-bold gradient_font">{single?.title}</p>
        <p className="custom_font_color text-sm">{single?.description}</p>
      </div>
    </div>
  );
};

export default SingleData;