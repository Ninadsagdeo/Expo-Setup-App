import React from "react";
import { Container, TextStyled } from "./Styles/CommonScreen";
import { connect } from "react-redux";
class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.routeName}`
    };
  };
  render() {
    return (
      <Container>
        <TextStyled>HI {this.props.navigation.getParam("name")}</TextStyled>
        <TextStyled>
          {this.props.navigation.getParam("notification")}
        </TextStyled>
      </Container>
    );
  }
}
export default connect(
  null,
  null
)(Chat);
