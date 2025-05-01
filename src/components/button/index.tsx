import './styles.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  btnType?: 'primary' | 'default' | 'link';
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'sm' | 'md' | 'lg';
  /** Optional click handler */
  onClick?: () => void;
  /** What is the content? */
  children: React.ReactNode;
}

/** Button component for user interaction */
export const Button = ({
  btnType = 'default',
  size = 'md',
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'ui-button',
        `ui-button--${btnType}`,
        `ui-button--${size}`,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
