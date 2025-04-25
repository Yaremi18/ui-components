import './styles.css';

interface InputProps {
  /** What is the size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** What is the type of the input */
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  /** What is the placeholder indicator */
  placeholder?: string;
  /** What is the value in the input */
  value?: string;
  /** Default value */
  defaultValue?: string;
}

const Input = ({ type = 'text', size = 'md', ...props }: InputProps) => (
  <input
    type={type}
    className={['storybook-input', `storybook-input--${size}`].join(' ')}
    {...props}
  />
);

export { Input };
