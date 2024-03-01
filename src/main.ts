import { loadPyodide } from 'pyodide';

const py = await loadPyodide();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

  123

  </div>
`;
