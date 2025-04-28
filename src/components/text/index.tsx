import './styles.css';

export interface TextProps {
  /** Text content */
  children: React.ReactNode;
}

/** Text component for displaying text content. It includes subcomponents for titles and paragraphs. */
const Text = ({ children }: TextProps) => {
  return <span className="storybook-text">{children}</span>;
};

export interface TitleProps {
  /** Level title */
  level?: 1 | 2 | 3 | 4;
  /** Title content */
  children: React.ReactNode;
  /** Title has divider? */
  divider?: boolean;
}

/** Title component for displaying headings. */
const Title = ({ level = 1, divider, children }: TitleProps) => {
  const className = [
    'storybook-text',
    `storybook-title--${level}`,
    divider ? 'storybook-title-divider' : '',
  ].join(' ');

  switch (level) {
    case 1:
      return <h1 className={className}>{children}</h1>;
    case 2:
      return <h2 className={className}>{children}</h2>;
    case 3:
      return <h3 className={className}>{children}</h3>;
    case 4:
      return <h4 className={className}>{children}</h4>;
    default:
      return null;
  }
};

export interface ParagraphProps {
  /** Paragraph content */
  children: React.ReactNode;
}

/** Paragraph component for displaying text content. */
const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="storybook-text">{children}</p>;
};

/** Title component for displaying headings. */
Text.Title = Title;

/** Paragraph component for displaying text content. */
Text.Paragraph = Paragraph;

export { Text };
