import styles from '../styles/Header.module.css';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle} className={styles.header}>
      <h1 className="heading">todos</h1>
      <p>Items will persist in the local storage</p>
    </header>
  );
};

export default Header;
