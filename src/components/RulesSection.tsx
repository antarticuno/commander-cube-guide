import styled from 'styled-components';
import Column from './Column';

const RulesStyled = styled(Column)`
  align-items: center;
  padding: 30px 100px;
  
  h2 {
    width: 100%;
    text-align: left;
  }
`;

export default function RulesSection() {
  return (
    <RulesStyled id="rules-section">
      <h2>Rules</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Est sit amet facilisis magna etiam tempor orci eu. Nunc faucibus a pellentesque sit amet porttitor. At quis risus sed vulputate. Et malesuada fames ac turpis egestas integer eget. Nullam vehicula ipsum a arcu cursus vitae congue. Sapien eget mi proin sed. Auctor augue mauris augue neque. A cras semper auctor neque vitae tempus quam pellentesque. Turpis egestas integer eget aliquet nibh praesent tristique magna. Vehicula ipsum a arcu cursus vitae congue mauris. Lorem ipsum dolor sit amet. Sed elementum tempus egestas sed sed risus pretium quam. Arcu vitae elementum curabitur vitae. Aliquam id diam maecenas ultricies mi eget. Quis vel eros donec ac odio tempor orci.
      </p>
      <p>
        Aliquam purus sit amet luctus venenatis lectus magna. Ut consequat semper viverra nam libero justo. Aliquet lectus proin nibh nisl condimentum id. Nulla facilisi nullam vehicula ipsum a arcu cursus. Eu augue ut lectus arcu bibendum at varius. Sit amet porttitor eget dolor morbi non arcu risus quis. Maecenas sed enim ut sem viverra aliquet eget. Sagittis eu volutpat odio facilisis mauris sit amet massa. Mauris ultrices eros in cursus turpis. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Cursus sit amet dictum sit amet justo donec enim diam. Aliquam vestibulum morbi blandit cursus. Ornare aenean euismod elementum nisi quis eleifend quam.
      </p>
      <p>
        Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Nisi lacus sed viverra tellus in hac habitasse platea. Orci dapibus ultrices in iaculis nunc sed augue lacus. Quis auctor elit sed vulputate mi sit amet. Sed lectus vestibulum mattis ullamcorper velit sed. Suspendisse interdum consectetur libero id faucibus. Volutpat maecenas volutpat blandit aliquam etiam erat. Sollicitudin ac orci phasellus egestas tellus. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Et ligula ullamcorper malesuada proin libero.
      </p>
    </RulesStyled>
  );
}
