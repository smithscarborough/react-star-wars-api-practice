import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterList from './pages/CharacterList';
import { Container, Header } from 'semantic-ui-react';
import CharacterProfile from './pages/CharacterProfile';

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = () => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Router>
      <Container style={{ marginTop: '3em' }}>
        <Header as="h1" size="huge" textAlign="center">
          Space Wars
        </Header>
        <Switch>
          <Route path="/" exact>
            <CharacterList characters={characters} />
          </Route>
          <Route path="/character/:id">
            <CharacterProfile />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;