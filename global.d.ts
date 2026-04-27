// CSS module declaration
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Global CSS import declaration
declare module '@/styles/globals.css';
