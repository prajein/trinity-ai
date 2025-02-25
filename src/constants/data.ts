import { NavItem } from 'types';

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Communication',
    url: '/dashboard/communication',
    icon: 'message',
    isActive: true,
    shortcut: ['c', 'c'],
    items: [
      {
        title: 'Email Assistant',
        url: '/dashboard/communication/email',
        icon: 'mail',
        shortcut: ['e', 'a']
      },
      {
        title: 'WhatsApp Assistant',
        url: '/dashboard/communication/whatsapp',
        icon: 'message',
        shortcut: ['w', 'a']
      },
      {
        title: 'Slack Assistant',
        url: '/dashboard/communication/slack',
        icon: 'message',
        shortcut: ['s', 'a']
      }
    ]
  }
];
