const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid password</h1>;
export const ConditionalRender = ({ isvalid }) => {
  //   if (isvalid) {
  //     return <ValidPassword />;
  //   }
  //   return <InvalidPassword />;

  // Using ternary operator
  return isvalid ? <ValidPassword /> : <InvalidPassword />;
};
