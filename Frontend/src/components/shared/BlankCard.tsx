import { Card } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { AppState, useSelector } from 'src/store/Store';

type Props = {
  className?: string;
  children?: JSX.Element | JSX.Element[];
  sx?: any;
};

const BlankCard = ({ children, className, sx }: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{
        p: 0,
        border: !customizer.isCardShadow ? `1px solid ${borderColor}` : 'none',
        position: 'relative',
        // paddingBottom: 6,
        sx,
      }}
      className={className}
      // elevation={customizer.isCardShadow ? 9 : 0}
      // variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      {children}
    </Card>
  );
};

export default BlankCard;