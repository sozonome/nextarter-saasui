'use client';

import { Heading, IconButton, Spacer, useDisclosure } from '@chakra-ui/react';
import {
  NavItem,
  Sidebar as SaasUISidebar,
  SidebarSection,
} from '@saas-ui/react';
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiHome,
  FiSettings,
} from 'react-icons/fi';

const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <SaasUISidebar
      variant={isOpen ? 'default' : 'compact'}
      width={isOpen ? '280px' : '14'}
      minWidth="auto"
      transitionDuration="normal"
      transition="width"
    >
      <SidebarSection direction={isOpen ? 'row' : 'column'}>
        <Heading display={isOpen ? 'block' : 'none'}>nextarter-saas</Heading>
        <Spacer />
        <IconButton
          onClick={onToggle}
          variant="ghost"
          size="sm"
          icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
          aria-label="Toggle Sidebar"
        />
      </SidebarSection>
      <SidebarSection>
        <NavItem icon={<FiHome />}>Home</NavItem>
        <NavItem icon={<FiSettings />}>Settings</NavItem>
      </SidebarSection>
    </SaasUISidebar>
  );
};

export default Sidebar;
