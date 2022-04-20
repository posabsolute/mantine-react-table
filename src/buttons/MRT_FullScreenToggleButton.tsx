import React, { FC, MouseEvent } from 'react';
import { IconButton, IconButtonProps, Tooltip } from '@mui/material';
import { MRT_TableInstance } from '..';

interface Props extends IconButtonProps {
  tableInstance: MRT_TableInstance;
}

export const MRT_FullScreenToggleButton: FC<Props> = ({
  tableInstance,
  ...rest
}) => {
  const {
    getState,
    options: {
      icons: { FullscreenExitIcon, FullscreenIcon },
      localization,
      onToggleFullScreen,
    },
    setIsFullScreen,
  } = tableInstance;

  const { isFullScreen } = getState();

  const handleToggleFullScreen = (event: MouseEvent<HTMLButtonElement>) => {
    onToggleFullScreen?.({
      event,
      isFullScreen: !isFullScreen,
      tableInstance,
    });
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Tooltip arrow title={localization.toggleFullScreen}>
      <IconButton
        aria-label={localization.showHideFilters}
        onClick={handleToggleFullScreen}
        size="small"
        {...rest}
      >
        {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </Tooltip>
  );
};
