import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoContext } from './Context/TodoContext';

const GlobalStye = createGlobalStyle`
  body {
    background : #e9ecef;
  }
`;
function App() {
  return (
    <>
      <TodoContext>
        <GlobalStye />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoContext>
    </>
  );
}

export default App;
