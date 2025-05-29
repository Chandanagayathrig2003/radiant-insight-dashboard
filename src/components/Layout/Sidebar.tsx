
import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Cloud, 
  Newspaper, 
  TrendingUp, 
  Settings, 
  BarChart3,
  Menu
} from 'lucide-react';
import { Button } from '../ui/button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { toggleSidebar } from '../../store/slices/uiSlice';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const dispatch = useAppDispatch();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '#dashboard' },
    { icon: Cloud, label: 'Weather', href: '#weather' },
    { icon: Newspaper, label: 'News', href: '#news' },
    { icon: TrendingUp, label: 'Finance', href: '#finance' },
    { icon: BarChart3, label: 'Analytics', href: '#analytics' },
    { icon: Settings, label: 'Settings', href: '#settings' },
  ];

  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 256 : 64 }}
      transition={{ duration: 0.3 }}
      className="bg-card border-r border-border h-screen fixed left-0 top-16 z-40"
    >
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(toggleSidebar())}
          className="mb-4"
        >
          <Menu className="h-4 w-4" />
        </Button>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start ${!isOpen ? 'px-2' : ''}`}
              asChild
            >
              <a href={item.href}>
                <item.icon className="h-4 w-4" />
                {isOpen && <span className="ml-2">{item.label}</span>}
              </a>
            </Button>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
