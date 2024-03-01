import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock, AiFillHome, AiFillFire, AiOutlineGlobal } from 'react-icons/ai';
import { IoIosBatteryFull, IoMdContacts } from 'react-icons/io';
import { HiOutlineTruck, HiOutlinePuzzle } from 'react-icons/hi';
import { GoRepoForked } from 'react-icons/go';
import { FiEdit, FiPieChart } from 'react-icons/fi';
import { BiCategory, BiColorFill, BiMoney, BiCodeCurly } from 'react-icons/bi';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';
import logo from './logo.png';

export default { logo };

export const links = [
  {
    title: 'Ana Sayfa',
    icon: <AiFillHome />,
  },
  {
    title: 'Kategori 1 - örnek',
    icon: <AiFillFire />,
    links: [
      {
        name: 'kategori1 - 1',
        url: 'calisan100',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kategori1 - 2',
        url: 'calisan1',
        icon: <BsKanban />,
      },
      {
        name: 'kategori1 - 3',
        url: 'calisan2',
        icon: <FiEdit />,
      },
      {
        name: 'kategori1 - 4',
        url: 'calisan3',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Kategori 2 - örnek',
    icon: <IoIosBatteryFull />,
    links: [
      {
        name: 'Kategori2 - 1',
        url: 'calisan4',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Kategori2 - 2',
        url: 'calisan5',
        icon: <IoMdContacts />,
      },
      {
        name: 'Kategori2 - 3',
        url: 'calisan6',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Kategori 3 - örnek',
    icon: <HiOutlineTruck />,
    links: [
      {
        name: 'Kategori3 - 1',
        url: 'calisan7',
        icon: <AiOutlineStock />,
      },
      {
        name: 'Kategori3 - 2',
        url: 'calisan8',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'Kategori3 - 3',
        url: 'calisan9',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'Kategori3 - 4',
        url: 'calisan10',
        icon: <FiPieChart />,
      },
      {
        name: 'Kategori3 - 5',
        url: 'calisan11',
        icon: <RiStockLine />,
      },
      {
        name: 'Kategori3 - 6',
        url: 'calisan12',
        icon: <BsBarChart />,
      },
      {
        name: 'Kategori3 - 7',
        url: 'calisan13',
        icon: <GiLouvrePyramid />,
      },
      {
        name: 'Kategori3 - 8',
        url: 'calisan14',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
  {
    title: 'Kategori 4 - örnek',
    icon: <BiMoney />,
    links: [
      {
        name: 'Kategori4 - 1',
        url: 'calisan15',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Kategori4 - 2',
        url: 'calisan16',
        icon: <IoMdContacts />,
      },
      {
        name: 'Kategori4 - 3',
        url: 'calisan17',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Kategori 5 - örnek',
    icon: <HiOutlinePuzzle />,
    links: [
      {
        name: 'Kategori5 - 1',
        url: 'calisan18',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Kategori5 - 2',
        url: 'calisan19',
        icon: <IoMdContacts />,
      },
      {
        name: 'Kategori - 3',
        url: 'calisan20',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Kategori 6 - örnek',
    icon: <BiCategory />,
    links: [
      {
        name: 'Kategori6 - 1',
        url: 'calisan21',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Kategori6 - 2',
        url: 'calisan22',
        icon: <IoMdContacts />,
      },
      {
        name: 'Kategori6 - 3',
        url: 'calisan23',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Rapor',
    icon: <GoRepoForked />,
    links: [
      {
        name: 'Rapor - 1',
        url: 'calisan24',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Rapor - 2',
        url: 'calisan25',
        icon: <IoMdContacts />,
      },
      {
        name: 'Rapor - 3',
        url: 'calisan26',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Yazılım Talepleri',
    icon: <BiCodeCurly />,
  },
  {
    title: 'Firma Ayarları',
    icon: <AiOutlineGlobal />,
    links: [
      {
        name: 'Çalışan Yönetimi',
        url: 'calisan',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Firma Genel Ayarları',
        url: 'firmagenelayarlari',
        icon: <IoMdContacts />,
      },
      {
        name: 'Firma Tesis Ayarları',
        url: 'firmatesisayarlari',
        icon: <RiContactsLine />,
      },
      {
        name: 'Örnek Yoğunluk',
        url: 'calisan29',
        icon: <RiContactsLine />,
      },
    ],
  },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Bütçe',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Gider',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const themeColors = [
  {
    name: 'light-theme',
    color: '#ffffff',
  },
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];
