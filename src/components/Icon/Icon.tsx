import React from 'react';

interface IconProps {
    src: string;
    width?: number;
    className?: string;
    alt?: string;
}

const Icon: React.FC<IconProps> = ({ src, width = 24, className = '', alt = 'icon' }) => (
    <img src={src} width={width} className={className} alt={alt} />
);

export default Icon;
