import { extendTheme } from '@chakra-ui/react';
import { theme as baseTheme } from '@saas-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';

const customTheme = extendTheme(
  {
    fonts,
    colors,
    config,
    components,
  },
  baseTheme
);

export default customTheme;
