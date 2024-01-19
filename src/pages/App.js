import { useState } from 'react';
import githubLogo from '../assets/github_logo.png';
import { Container } from './styles';
import Input from '../components/input';
import ItemRepo from '../components/itemRepo';
import Button from '../components/button';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const apiReturn = await api.get(`repos/${currentRepo}`);

    console.log(apiReturn);

    const {data} = apiReturn;

    if (data.id) {
      setRepos(prev => [...prev, data])
    }
  }

  return (
    <Container>
      <img src={githubLogo} alt="github logo" width={72} />
      <Input value={currentRepo} onChange={ e => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      { repos.map((repo) => {
        return(
          <ItemRepo repo={repo} />
        )
      }) }
    </Container>
  );
}

export default App;
