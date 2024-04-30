const { default: Link } = require('next/link');

const GeneralLink = (props) => {
  const { href, className, children } = props;
  const development = !!process && process.env.NODE_ENV === 'development';
  return (
    <>
      {development ? (
        <Link href={href} className={className}>
          {children}
        </Link>
      ) : (
        <a href={`${href.startsWith('/') ? '.' : ''}${href === '/' ? '/index' : href}.html`} className={className}>
          {children}
        </a>
      )}
    </>
  );
};

export default GeneralLink;
