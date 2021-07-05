import React from 'react';

// @ts-ignore
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

interface Props {
  url: string;
  size: "big" | "small"
}

const Picture: React.FC<Props> = ({url, size}) => (
  <div className={`rounded-full overflow-hidden ${size==="big"?`w-24 h-24`:`w-12 h-12`}`}>
    <RenderSmoothImage src={url} alt="Picture"/>
  </div>
)

export default Picture;
