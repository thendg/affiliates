import styled from 'styled-components';

export default function Background({
  angle,
  colorOne,
  colorTwo,
  children,
}: {
  angle: number,
  colorOne: string,
  colorTwo: string,
  children: JSX.Element,
}) {
  const Container = styled.div`
    background-image: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});
  `;
  return <Container children={children} />;
}
