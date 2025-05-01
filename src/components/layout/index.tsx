import './styles.css';

export interface LayoutProps {
  Header: React.FC<React.PropsWithChildren>;
  Content: React.FC<React.PropsWithChildren>;
  Footer: React.FC<React.PropsWithChildren>;
}

/** Layout component to use on pages */
export const Layout: React.FC<React.PropsWithChildren> & LayoutProps = ({
  children,
}) => {
  return <main className="ui-layout">{children}</main>;
};

Layout.Header = ({ children }) => {
  return <header className="ui-layout-header">{children}</header>;
};

Layout.Content = ({ children }) => {
  return <section className="ui-layout-content">{children}</section>;
};

Layout.Footer = ({ children }) => {
  return <footer className="ui-layout-footer">{children}</footer>;
};
