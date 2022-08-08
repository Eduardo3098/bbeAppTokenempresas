import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles, {
  Business,
  BusinessList,
  Container,
  Content,
  Description,
  Text,
  Title,
} from './addBusiness.styles';
import Button, {BUTTON_COLORS} from '../../components/button';
import strings from '../../res/strings';
import {isEmpty, isFunction} from '../../common/util';

class AddBusiness extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        organizationName: PropTypes.string,
        username: PropTypes.string,
        registrationDate: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ]),
        registrationMethod: PropTypes.number,
      }),
    ),
    instructions: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          order: PropTypes.number,
          data: PropTypes.string,
        }),
      ),
    }).isRequired,
    onAddPressed: PropTypes.func,
    onShowTokenPressed: PropTypes.func,
    onEditPressed: PropTypes.func,
  };

  constructor(...args) {
    super(...args);

    this.renderInstructions = this.renderInstructions.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.onAddPressed = this.onAddPressed.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onShowTokenPressed = this.onShowTokenPressed.bind(this);
    this.onEditPressed = this.onEditPressed.bind(this);
  }

  renderInstructions() {
    const {
      instructions: {description, items},
    } = this.props;
    return (
      <>
        <Description>{description}</Description>
        {items.map(({order, data}) => (
          <Text key={`${order}`}>{`${order}. ${data}`}</Text>
        ))}
      </>
    );
  }

  renderList() {
    const {data} = this.props;

    return (
      <BusinessList testID="list" data={data} renderItem={this.renderItem} />
    );
  }

  renderItem({item, item: {organizationName, username}, index}) {
    return (
      <Business key={`${organizationName}-${index}`} style={styles.item}>
        <Text style={styles.name}>{username}</Text>
        <Button
          color={BUTTON_COLORS.SECONDARY}
          onPress={() => this.onShowTokenPressed(item)}
          title={strings.token.see}
          style={styles.button}
        />
        <Icon
          name="edit"
          style={styles.icon}
          onPress={() => this.onEditPressed(item)}
        />
      </Business>
    );
  }

  onShowTokenPressed(account) {
    const {onShowTokenPressed} = this.props;

    if (isFunction(onShowTokenPressed)) {
      onShowTokenPressed(account);
    }
  }

  onEditPressed(account) {
    const {onEditPressed} = this.props;

    if (isFunction(onEditPressed)) {
      onEditPressed(account);
    }
  }

  renderContent() {
    const {
      instructions: {title},
      data,
    } = this.props;

    return (
      <Content>
        <Title>{title}</Title>
        {isEmpty(data) ? this.renderInstructions() : this.renderList()}
      </Content>
    );
  }

  onAddPressed() {
    const {onAddPressed} = this.props;

    if (isFunction(onAddPressed)) {
      onAddPressed();
    }
  }

  render() {
    return (
      <Container testID="container">
        {this.renderContent()}
        <Button
          testID="button"
          title={strings.business.add}
          onPress={this.onAddPressed}
        />
      </Container>
    );
  }
}

export default AddBusiness;
