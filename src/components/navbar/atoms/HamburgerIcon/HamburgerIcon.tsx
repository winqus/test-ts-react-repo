import './HamburgerIcon.scss';

interface HamburgerIconProps {
  open: boolean,
}

export default function HamburgerIcon({ open } : HamburgerIconProps) {
  return (
    <i className={`icon-hamburger ${open ? 'icon-hamburger--active' : ''}`}>
      <div className="icon-hamburger__bars" />
    </i>
  );
}
