const NavNotifications = ({ status, message, time }) => {
  return (
    <p className={`notification-${status}`}>
      {message}
      <br />
      <span>{time.split('T')[0] + ' ' + time.split('T')[1]}</span>
    </p>
  );
};

export default NavNotifications;
