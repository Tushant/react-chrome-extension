import { injectGlobal } from 'styled-components';

injectGlobal`
html, body {
  margin: 0;
  padding: 0;
  min-width: 320px;
}

body {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
}

.pad-10{
  padding: 10px;
}
`;
