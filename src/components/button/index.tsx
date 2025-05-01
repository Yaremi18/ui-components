import './styles.css';

interface ButtonProps {
  /** Is this the principal call to action on the page? */
  type?: 'primary' | 'default' | 'link';
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
  type = 'default',
  size = 'md',
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['ui-button', `ui-button--${type}`, `ui-button--${size}`].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};
