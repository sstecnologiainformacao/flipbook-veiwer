"use client";
import Image from "next/image";
import React, { forwardRef, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";

// Tipo base para páginas
type PageProps = {
  children?: React.ReactNode;
  number?: number;
};

// Capa (frente e verso)
const PageCover = forwardRef<HTMLDivElement, PageProps>(({ children }, ref) => {
  return (
    <div className="page page-cover" ref={ref as React.RefObject<HTMLDivElement>} data-density="hard">
      <div className="page-content" style={{ position: 'relative', width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
});

PageCover.displayName = "PageCover";

// Página interna
const Page = forwardRef<HTMLDivElement, PageProps>(({ children, number }, ref) => {
  return (
    <div className="page page-cover" ref={ref as React.RefObject<HTMLDivElement>} data-density="hard">
      <div className="page-content" style={{ position: 'relative', width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
});

Page.displayName = "Page";


export default function Home() {

  const page = (
    <Page key={0} number={0}>
    </Page>
  );
  const pages = [page, ...Array.from({ length: 33 }).map((_, index) => (
    <Page key={index + 1} number={index + 1}>
      <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
        <Image 
          src={`/images/book/out-${index}.jpg`} 
          alt={`Página ${index + 1}`} 
          fill
          style={{ objectFit: 'contain' }}
          unoptimized
          sizes="480px"
        />
      </div>
    </Page>
  ))];

  const onFlip = useCallback((e: unknown & { data: number }) => {
    console.log('Current page: ' + e.data);
  }, []);

  return (
    <main className="flex w-full h-full flex-col items-center justify-center" style={{ overflow: 'hidden' }}>
      <HTMLFlipBook
        width={479}
        height={600}
        size="stretch"
        onFlip={onFlip}
        minWidth={479}
        maxWidth={479}
        minHeight={600}
        maxHeight={600}
        {...({} as any)}
      >
        {pages}
      </HTMLFlipBook>
    </main>
  );
}
