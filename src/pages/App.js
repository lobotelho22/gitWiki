import githubLogo from '../assets/github_logo.png';
import { Container } from './styles';
import Input from '../components/input';
import ItemRepo from '../components/itemRepo';

function App() {
  return (
    <Container>
      <img src={githubLogo} alt="github logo" width={72} />
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
