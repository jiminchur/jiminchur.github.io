'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const language = className?.replace('language-', '') || 'text';

  const copyToClipboard = () => {
    // Extract text from children
    const extractText = (node: any): string => {
      if (typeof node === 'string') return node;
      if (Array.isArray(node)) return node.map(extractText).join('');
      if (node?.props?.children) return extractText(node.props.children);
      return '';
    };
    
    const text = extractText(children);
    
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="relative group my-6">
      <div className="absolute right-4 top-4 flex items-center gap-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 bg-white/50 px-2 py-0.5 rounded-md border border-gray-200">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
          title="Copy code"
        >
          {isCopied ? (
            <Check className="w-3.5 h-3.5 text-green-500" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-gray-500" />
          )}
        </button>
      </div>
      <pre className="!bg-[#f9f9fb] !p-6 rounded-2xl border border-gray-100 overflow-x-auto font-mono text-[13px] leading-relaxed">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
};
