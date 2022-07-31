import Background from './Background';

export default function OutputColour({
  children,
  address,
}: {
  children: JSX.Element,
  address: string,
}) {
  let randomColor = () => {
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
  };
  {
    /*
  function colourOnAddress(address: string) {
    let cleanFullAddress = address.slice(2);
    let address1 = cleanFullAddress.substring(0, 20);
    let address2 = cleanFullAddress.substring(0, 40);
    let hexchars = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
    let result = '#';
    let result2 = '#';
    for (let i = 0; i < address1.length && result.length < 8; i++) {
      if (hexchars.includes(address1[i])) {
        result += address1[i];
      }
    }
    for (let i = 0; i < address2.length && result.length < 8; i++) {
      if (hexchars.includes(address2[i])) {
        result2 += address2[i];
      }
    }
    return [result, result2];
  }
*/
  }
  let hexString = '0123456789abcdef';
  let colorOne = randomColor();
  let colorTwo = randomColor();
  let angle = Math.floor(Math.random() * 360);

  //   const Container = styled.div`
  //     background-image: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});
  //   `;

  return (
    <Background angle={angle} colorOne={colorOne} colorTwo={colorTwo}>
      {children}
    </Background>
  );
}
