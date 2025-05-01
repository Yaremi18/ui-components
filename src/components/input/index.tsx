import './styles.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input label */
  label?: string;
  /** Orientation with label */
  orientation?: 'horizontal' | 'vertical';
  /** What is the size of the input */
  inputSize?: 'sm' | 'md' | 'lg';
  /** What is the type of the input */
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  /** What is the placeholder indicator */
  placeholder?: string;
  /** What is the value in the input */
  value?: string;
  /** Default value */
  defaultValue?: string;
}

/** Input component for user interaction */
export const Input = ({
  label,
  orientation = 'vertical',
  type = 'text',
  inputSize = 'md',
  ...props
}: InputProps) => {
  return (
    <div className={`storybook-input--${orientation}`}>
      {label && (
        <label className={`storybook-input-label--${inputSize}`}>{label}</label>
      )}
      <input
        type={type}
        className={['storybook-input', `storybook-input--${inputSize}`].join(
          ' '
        )}
        {...props}
      />
    </div>
  );
};
