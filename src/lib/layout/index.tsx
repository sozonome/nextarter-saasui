'use client';

import { Box } from '@chakra-ui/react';
import { AppShell } from '@saas-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <AppShell navbar={<Header />} sidebar={<Sidebar />}>
      <Box as="main" py={4} px={2}>
        {children}
      </Box>
      <Footer />
    </AppShell>
  );
};

export default Layout;
