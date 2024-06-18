import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            &copy; {new Date().getFullYear()} WonderCloud
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
