import { ItemContainer } from './styles';

export default function RepoItem({repo, handleRemoveRepo}) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>View repository</a><br />
      <a href='#' className='remove' rel='noreferrer' onClick={handleRemove}>Remove</a>
      <hr />
    </ItemContainer>
  );
}