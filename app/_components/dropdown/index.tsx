'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';


interface MenuItem {
  icon: string;
  link: string; 
  text: string;
}

interface DropdownProps {
  isOpen: boolean;
  menuItems: MenuItem[]; 
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen,menuItems }) => (
  <div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
  <ul>
    {menuItems.map((item, index) => (
      <li key={index} className={styles.menuItem}>
        <span className={styles.icon}>
          <Image src={item.icon} alt="icon" width={24} height={24} />
        </span>
        <span className={styles.itemText}>
          <Link href={item.link}>{item.text}</Link>
        </span>
      </li>
    ))}
  </ul>
</div>
);

export default Dropdown;