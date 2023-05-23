import Card from "../Card/Card";
import styled from "styled-components";

const EstiloTarjeta = styled.div`
  background-attachment: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: start;
  align-items: self-end;
`;

const Cards = ({ characters, onClose }) => {
  return (
    <EstiloTarjeta>
      {characters.map(
        ({ id, name, species, gender, origin, image, status }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </EstiloTarjeta>
  );
};
export default Cards;
