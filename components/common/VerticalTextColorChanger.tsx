import React from 'react';
import { Link, Typography } from '@mui/material';
import { useSectionObserver } from '@/context/SectionObserverContext';
import { ShareInstaBox } from '@/styles/common.styled';
import InstagramIcon from '@mui/icons-material/Instagram';

const VerticalTextColorChanger: React.FC = () => {
  const { activeBg } = useSectionObserver();

  const textColor = activeBg === 'light' ? '#000' : '#fff';

  return (
    <ShareInstaBox>
        <Typography variant="shareText" color={textColor}>Share</Typography>
        <Link
            href="https://www.instagram.com/allcareforeveryone/?hl=en"
            variant="shareText"
            color={textColor}
        >
            <InstagramIcon />
            instagram
        </Link>
        <Typography variant="shareText" color={textColor}>#EQUALITYFOREVERYONE</Typography>
    </ShareInstaBox>
  );
};

export default VerticalTextColorChanger;
