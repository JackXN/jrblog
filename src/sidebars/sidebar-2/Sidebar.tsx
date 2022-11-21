import {useState} from 'react';
import styles from './styles.css';
// LOGO IMPORT HERE
import {Icon} from './Icon.tsx';
import {Button} from './Button.tsx';

const menuItems = [
    {
        name: 'Apps',
        icon: 'apps',
    },
    {
        name: 'Subscriptions',
        icon: 'subscriptions',
    },
    {
        name: 'Library',
        icon: 'video_library',
    },
    {
        name: 'Explore',
        icon: 'explore',
    },
    {
        name:'Trending',
        icon: 'mode_heat',
    },
    {
        name: 'Music',
        icon: 'music_note',
    },
    {
        name: 'Watch Later',
        icon: 'schedule',
    },
    {
        name: 'Settings',
        icon: 'settings',
    },
    {
        name: 'Privacy',
        icon: 'lock',
    },
];

const NavHeader = () => {
    <header className='siderbar-header'>
        <button type='button'>
            <Icon icon='menu'/>
        </button>
        <img src={Logo} className='sidebar-logo'/>
    </header>
}