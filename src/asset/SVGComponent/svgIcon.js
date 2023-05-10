import React from 'react';
import { TSIcon } from './IconTS';
import { SQLIcon } from './IconSQL';
import { PSIcon } from './IconPS';
import { AIIcon } from './IconAI';
import { IDIcon } from './IconID';

export const IconList = (fill, size) => {
  return {
    TS: <TSIcon size={size} fill={fill} />,
    SQL: <SQLIcon size={size} fill={fill} />,
    PS: <PSIcon size={size} fill={fill} />,
    AI: <AIIcon size={size} fill={fill} />,
    ID: <IDIcon size={size} fill={fill} />,
  };
};
