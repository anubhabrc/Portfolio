'use client';

import { useState } from 'react';
import { CopyIcon } from './icons';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button className="copy-email" type="button" onClick={copy} aria-label="Copy email address" title={copied ? 'Copied' : 'Copy email'}>
      <CopyIcon />
      <span className="copy-tooltip">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}
