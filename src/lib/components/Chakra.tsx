import { ColorModeScript, cookieStorageManager } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';

import customTheme from '~/lib/styles/theme/index';

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <>
      <ColorModeScript
        initialColorMode={customTheme.config?.initialColorMode}
        type="cookie"
      />
      <SaasProvider colorModeManager={cookieStorageManager} theme={customTheme}>
        {children}
      </SaasProvider>
    </>
  );
};
