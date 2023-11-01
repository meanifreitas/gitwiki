import { useState } from 'react';
import { Container } from './styles';
import gitLogo from '../assets/git.png';
import Input from '../components/Input';
import Button from '../components/Button';
import RepoItem from '../components/RepoItem';
import api from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
 
  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const exists = repos.find(repo => repo.id === data.id);
      if (!exists) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }
    }
  }

  const handleRemoveRepo = (id) => {
    let newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  }

  return (
    <Container className='App'>
      <img src={gitLogo} alt='Logo GitHub' width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <RepoItem repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;