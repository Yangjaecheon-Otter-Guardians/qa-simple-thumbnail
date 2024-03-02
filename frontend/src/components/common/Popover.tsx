import React, { useEffect } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Popover = ({ className, children, onClose }: Props) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default Popover;
