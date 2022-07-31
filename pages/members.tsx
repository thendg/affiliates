import { callbackify } from 'util';
import OutputColour from '../components/OutputColor';
import styled from 'styled-components';

const Hover = styled.h1`
  p {
    padding: 2rem;
    text-align: center;
    width: 100%;
  }
  .w_address {
    text-align: center;
    font-family: 'Montserrat';
  }
  .change:hover p.w_address b {
    display: none;
  }
  .change:hover p.w_address:after {
    content: '944E...F353';
    font-family: 'Montserrat';
    font-style: italic;
    padding: 2rem;
  }
`;

const members: JSX.Element[] = [];
for (let i = 0; i < 20; i++) {
  members.push(
    <div
      key={'membercomp' + i}
      className="m-8 border-1 border-black duration-700 w-56 shadow-md hover:shadow-xl"
    >
      <OutputColour
        key={'oc' + i}
        address={'0x76a8Ad01192213C8faE291E5DaaE2fBC8ce74FEb'}
      >
        <p className="font- montserrat text-white text-right text-xl p-2">
          <b>900</b>
        </p>
      </OutputColour>
      <Hover key={'h' + i}>
        <div className="change">
          <p className="w_address">
            <h4>lembn</h4>
            <b>President</b>
          </p>
        </div>
      </Hover>
    </div>
  );
}

function Members() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">{members}</div>
    </div>
  );
}

export default Members;
