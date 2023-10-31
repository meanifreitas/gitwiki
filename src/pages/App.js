import gitLogo from '../assets/git.png';
import { Container } from './styles';
import Input from '../components/Input';

function App() {
  return (
    <Container className="App">
      <img src={gitLogo} alt="Logo GitHub" width={72} height={72} />
      <Input />
    </Container>
  );
}

export default App;
