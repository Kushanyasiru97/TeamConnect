import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

type ImageSource = `/${string}` | `http${'s' | ''}://${string}`;

interface HomeCardProps {
  className?: string;
  img: ImageSource;
  title: string;
  description: string;
  handleClick: () => void;
  altText?: string;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
  altText = 'action icon'
}: HomeCardProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(
        'px-4 py-6 flex flex-col justify-between w-full',
        'min-h-[200px] md:min-h-[240px] xl:min-h-[260px]',
        'xl:max-w-[270px] rounded-[14px] cursor-pointer',
        'transition-all duration-300 ease-in-out hover:scale-[1.02]',
        'shadow-sm hover:shadow-md focus:outline-none',
        'focus:ring-2 focus:ring-primary focus:ring-offset-2',
        className
      )}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={img}
          alt={altText}
          width={27}
          height={27}
          aria-hidden="true"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

// Optional prop-type validation (remove if not needed)
HomeCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  altText: PropTypes.string
};

export default HomeCard;