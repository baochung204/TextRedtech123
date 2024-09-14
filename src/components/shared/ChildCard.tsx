// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';

import { Card, CardHeader, CardContent, Divider, SxProps } from '@mui/material';

type Props = {
  title?: string;
  children?: JSX.Element | JSX.Element[];
  sx?: SxProps;
  sx1?: SxProps;
};

const ChildCard = ({ title, children, sx, sx1 }: Props) => (
  <Card
    sx={{ padding: 0, borderColor: (theme: any) => theme.palette.divider, ...sx }}
    variant="outlined"
  >
    {title ? (
      <>
        <CardHeader title={title} />
        <Divider />{' '}
      </>
    ) : (
      ''
    )}

    <CardContent sx={{ ...sx1 }}>{children}</CardContent>
  </Card>
);

export default ChildCard;
