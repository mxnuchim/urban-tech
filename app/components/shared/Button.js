import Link from 'next/link';
import React from 'react';

const Button = ({ onClick, href, btnText }) => {
  const normalBtn = `bg-primary px-5 py-2.5 rounded-lg text-white hidden lg:inline-block`;
  return (
    <div>
      <Link href={href ?? '/'} className={normalBtn}>
        {btnText}
      </Link>
    </div>
  );
};

export default Button;
