import { Link } from 'react-router-dom';
import { Card, Grid } from 'semantic-ui-react';

function getIdFromUrl(url) {
  const pattern = /(?:http:\/\/swapi.dev\/api\/people\/)(\d+)\/?/;
  const search = pattern.exec(url);
  return search[1] || null;
}

export default function CharacterList(props) {
  return (
    <Grid container columns={4} stackable doubling>
      {props.characters.map((character) => {
        const { name, url } = character;

        const id = getIdFromUrl(url);

        return (
          <Grid.Column>
            <Link to={`/character/${id}`}>
              <Card header={name} />
            </Link>
          </Grid.Column>
        );
      })}
    </Grid>
  );
}