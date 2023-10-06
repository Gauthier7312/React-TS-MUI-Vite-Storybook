import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

// ----------------------------------------------------------------------

hljs.configure({
  languages: ['javascript', 'jsx', 'sh', 'bash', 'html', 'scss', 'css', 'json', 'ts', 'tsx']
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.hljs = hljs;
