import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
  BlockOutlined,
  FundViewOutlined,
} from '@ant-design/icons';
import { Avatar, Flex, Layout, Menu } from 'antd';
import logoWeb from '../assets/react.svg';

const { Sider } = Layout;

interface SidersProps {
  collapse: boolean;
}

const Siders: React.FC<SidersProps> = ({ collapse }) => {
  const menuItems = [
    {
      key: '1',
      icon: <AppstoreOutlined />,
      label: <Link to={'/'}>Beranda Anda</Link>,
    },
    {
      key: '2',
      icon: <FundViewOutlined />,
      label: <Link to={'/place-list'}>Statistik Data</Link>,
    },
    {
      key: '3',
      icon: <BlockOutlined />,
      label: <Link to={'/compare-map'}>Bandingkan Tempat</Link>,
    },
  ];

  return (
    <Sider trigger={null} collapsible collapsed={collapse}>
      <Flex justify="center" style={{ padding: 10 }}>
        <Avatar src={logoWeb} size={30} />
      </Flex>
      <Menu
        theme="dark"
        mode="inline"
        items={menuItems.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
        }))}
      />
    </Sider>
  );
};

export default Siders;
