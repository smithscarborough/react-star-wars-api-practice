import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';

export default function CharacterProfile() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  const fetchCharacter = (characterId) => {
    fetch(`https://swapi.dev/api/people/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  };

  useEffect(() => {
    fetchCharacter(id);
  }, [id]);

  if (!character) {
    return '';
  }

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = character;

  return (
    <div>
      <Header
        as="h2"
        size="large"
        dividing
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {name}
        <Button basic content="Back" as={Link} to="/" />
      </Header>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Segment>
            <Header size="medium">Statistics</Header>
            <List style={{ align: 'left' }}>
              <List.Item>
                <List.Icon name="user" />
                <List.Content>{gender}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="calendar" />
                <List.Content>{birth_year}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="sort amount up" />
                <List.Content>{height}kg</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="weight" />
                <List.Content>{mass}lb</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="cut" />
                <List.Content>{hair_color}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="user outline" />
                <List.Content>{skin_color}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="eye" />
                <List.Content>{eye_color}</List.Content>
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}