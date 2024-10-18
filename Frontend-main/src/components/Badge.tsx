import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import { LightningBoltIcon } from '@heroicons/react/outline';
import { CurrencyDollarIcon } from '@heroicons/react/outline';

export default function GroupAvatars() {
    const xpLabelStyle = {
        background: '#3D4357',
        border: '0.1px solid #4A4F6A',
        borderRadius: '100px',
        padding: '2px',
        color: '#FFFFFF',
        fontSize: '6px',
        display: 'block',
    };

    return (
        <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { margin: '0 8px' } }}>
            <div style={{ textAlign: 'center' }} className='relative'>
                <Avatar alt="Remy Sharp" src="/avatar.png" />
                <div style={xpLabelStyle} className='absolute -top-5'>
                    <Typography variant="body2" component="p" sx={{ fontSize: '10px', display: 'inline-flex', alignItems: 'center' , }}>
                        <LightningBoltIcon className="h-4 w-4 text-green-500 inline-block align-text-bottom" />{' '}
                        100 XP
                    </Typography>
                </div>
                <Typography variant="body2" component="p" sx={{ fontSize: '10px' }}>
                    <CurrencyDollarIcon className="h-4 w-4 text-yellow-500 inline-block align-text-bottom" /> 50
                </Typography>
            </div>
            <div style={{ textAlign: 'center' }} className='relative'>
                <Avatar alt="Remy Sharp" src="/avatar.png" />
                <div style={xpLabelStyle} className='absolute -top-5'>
                    <Typography variant="body2" component="p" sx={{ fontSize: '10px', display: 'inline-flex', alignItems: 'center' }}>
                        <LightningBoltIcon className="h-4 w-4 text-green-500 inline-block align-text-bottom" />{' '}
                        100 XP
                    </Typography>
                </div>
                <Typography variant="body2" component="p" sx={{ fontSize: '10px' }}>
                    <CurrencyDollarIcon className="h-4 w-4 text-yellow-500 inline-block align-text-bottom" /> 50
                </Typography>
            </div>
            <div style={{ textAlign: 'center' }} className='relative'>
                <Avatar alt="Remy Sharp" src="/avatar.png" />
                <div style={xpLabelStyle} className='absolute -top-5'>
                    <Typography variant="body2" component="p" sx={{ fontSize: '10px', display: 'inline-flex', alignItems: 'center' }}>
                        <LightningBoltIcon className="h-4 w-4 text-green-500 inline-block align-text-bottom" />{' '}
                        100 XP
                    </Typography>
                </div>
                <Typography variant="body2" component="p" sx={{ fontSize: '10px' }}>
                    <CurrencyDollarIcon className="h-4 w-4 text-yellow-500 inline-block align-text-bottom" /> 50
                </Typography>
            </div>

        </AvatarGroup>
    );
}
