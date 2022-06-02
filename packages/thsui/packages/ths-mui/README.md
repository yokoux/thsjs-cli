## peerDependencies

- react
- react-dom
- @mui/material
- @emotion/react
- @emotion/styled

## Usage

```ts
import { ThemeProvider, defaultTheme, Button } from "quick-ui";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Button variant="outlined">Hello</Button>
      </ThemeProvider>
    </div>
  );
}
```