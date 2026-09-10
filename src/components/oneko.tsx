'use client';

import { useEffect } from 'react';

export default function Oneko() {
  useEffect(() => {
    if (document.getElementById('oneko-loader')) return;

    const script = document.createElement('script');
    script.id = 'oneko-loader';
    script.src = '/oneko/oneko.js';
    script.dataset.cat = '/oneko/oneko.gif';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.getElementById('oneko')?.remove();
      script.remove();
    };
  }, []);

  return null;
}
