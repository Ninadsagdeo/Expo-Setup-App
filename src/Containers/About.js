// this is the first screen shown in your application. It's loaded into the Navigation component
import React from "react";
import { Container, TextStyled, AppButton, Text } from "./Styles/CommonScreen";
import { connect } from "react-redux";
class About extends React.Component {
  render() {
    return (
      <Container>
        <TextStyled>About Screen</TextStyled>
        {/* <AppButton onPress={() => alert("Hi")}>
          <Text>Hi There</Text>
        </AppButton> */}
      </Container>
    );
  }
}
export default connect(
  null,
  null
)(About);
