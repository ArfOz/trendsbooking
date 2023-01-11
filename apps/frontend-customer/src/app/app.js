import AppRouter from '../routers/AppRouter';
import ContextProvider from '../context/Context';

function App() {
  return (
      <ContextProvider>
        <AppRouter />
      </ContextProvider>
  );
}

export default App;
