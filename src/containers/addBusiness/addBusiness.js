import React, {Component} from 'react';
import {Clipboard} from 'react-native';

import AddBusinessComponent from '../../screens/addBusiness';
import {
  getAccounts,
  getToken,
  register,
  removeAccount,
  setAccountName,
  setLastAccountName,
} from '../../modules/detectId';
import CodeInput from '../../screens/codeInput';
import {
  areValid,
  enforceNoSpecialCharsString,
  isEmptyString,
  isValid,
} from '../../common/util';
import NameInput from '../../screens/nameInput';
import SoftToken from '../../screens/softToken';
import BusinessMenu from '../../screens/businessMenu';
import {
  MAX_CODE_LENGTH,
  MULTIPLIER_TO_MILLIS,
  TOKEN_FULL_PERCENTAGE,
} from '../../common/constants';
import RemoveConfirmation from '../../screens/removeConfirmation';
import strings from '../../res/strings';
import Confirmation from '../../screens/confirmation';

class AddBusiness extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.onAddPressed = this.onAddPressed.bind(this);
    this.onCodeChanged = this.onCodeChanged.bind(this);
    this.onAcceptCodePressed = this.onAcceptCodePressed.bind(this);
    this.onCancelPressed = this.onCancelPressed.bind(this);
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onNameAcceptPressed = this.onNameAcceptPressed.bind(this);
    this.onNameCancelPressed = this.onNameCancelPressed.bind(this);
    this.onCopyPressed = this.onCopyPressed.bind(this);
    this.onTokenBackPressed = this.onTokenBackPressed.bind(this);
    this.fetchToken = this.fetchToken.bind(this);
    this.onShowTokenPressed = this.onShowTokenPressed.bind(this);
    this.onAnimationComplete = this.onAnimationComplete.bind(this);
    this.onEditPressed = this.onEditPressed.bind(this);
    this.onMenuClosePressed = this.onMenuClosePressed.bind(this);
    this.onChangeNamePressed = this.onChangeNamePressed.bind(this);
    this.onRemovePressed = this.onRemovePressed.bind(this);
    this.onNameUpdated = this.onNameUpdated.bind(this);
    this.onRemoveConfirmed = this.onRemoveConfirmed.bind(this);
    this.onRemoveCancelled = this.onRemoveCancelled.bind(this);
    this.getAlertText = this.getAlertText.bind(this);
    this.onAlertClose = this.onAlertClose.bind(this);

    this.state = {
      showCodeInput: false,
      canContinueRegistration: false,
      showNameInput: false,
      canContinueNaming: false,
      showToken: false,
      showMenu: false,
      showRemove: false,
      showAlert: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getAccounts().then(accounts => {
      this.setState({accounts});
    });
  }

  onAddPressed() {
    this.setState({showCodeInput: true});
  }

  onCodeChanged(code) {
    const safeCode = enforceNoSpecialCharsString(code);
    const canContinueRegistration =
      isValid(safeCode) && safeCode.length === MAX_CODE_LENGTH;
    this.setState({code: safeCode, canContinueRegistration});
  }

  onAcceptCodePressed() {
    const {code} = this.state;
    const {url} = this.props;

    register(url, code).then(({success, code: responseCode}) => {
      this.onCancelPressed();
      if (success) {
        this.setState({showNameInput: true});
        return;
      }

      this.setState({
        showAlert: true,
        alertText: this.getAlertText(responseCode),
      });
    });
  }

  getAlertText(code) {
    const message = strings.code.error[code];
    return isValid(message) ? message : strings.code.error.default;
  }

  onCancelPressed() {
    this.setState({
      showCodeInput: false,
      code: undefined,
      canContinueRegistration: false,
    });
  }

  onNameChanged(name) {
    const safeName = isEmptyString(name) ? undefined : name;
    const canContinueNaming = isValid(safeName);
    this.setState({name: safeName, canContinueNaming});
  }

  onNameAcceptPressed() {
    const {selectedAccount, name} = this.state;
    const safeName = name.trim();

    if (!isValid(selectedAccount)) {
      setLastAccountName(safeName).then(this.onNameUpdated);
      return;
    }

    setAccountName(selectedAccount, safeName).then(this.onNameUpdated);
  }

  onNameUpdated() {
    this.setState(
      {
        showNameInput: false,
        name: undefined,
        canContinueNaming: false,
        selectedAccount: undefined,
      },
      this.getData,
    );
  }

  onNameCancelPressed() {
    this.setState({
      showNameInput: false,
      name: undefined,
      canContinueNaming: false,
      selectedAccount: undefined,
    });
  }

  fetchToken(account) {
    return getToken(account).then(({token, time: elapsed}) => {
      if (!areValid(token, elapsed)) {
        return Promise.resolve();
      }

      const {tokenDuration} = this.props;
      const tokenPercentageLeft = TOKEN_FULL_PERCENTAGE - elapsed;
      const tokenTimeLeft =
        (tokenDuration * tokenPercentageLeft * MULTIPLIER_TO_MILLIS) /
        TOKEN_FULL_PERCENTAGE;
      return Promise.resolve({token, tokenPercentageLeft, tokenTimeLeft});
    });
  }

  onShowTokenPressed(account) {
    this.fetchToken(account).then(
      ({token, tokenPercentageLeft, tokenTimeLeft}) => {
        this.setState({
          showToken: true,
          tokenAccount: account,
          token,
          tokenProgress: tokenPercentageLeft,
          tokenTimeLeft,
        });
      },
    );
  }

  onCopyPressed() {
    const {token} = this.props;
    Clipboard.setString(token);
  }

  onTokenBackPressed() {
    this.setState({
      showToken: false,
      tokenAccount: undefined,
      token: undefined,
      tokenProgress: undefined,
      tokenTimeLeft: undefined,
    });
  }

  onAnimationComplete(reanimate) {
    const {tokenAccount} = this.state;
    this.fetchToken(tokenAccount).then(
      ({token, tokenPercentageLeft, tokenTimeLeft}) => {
        reanimate(tokenPercentageLeft, 0, tokenTimeLeft);
        this.setState({
          token,
          tokenTimeLeft,
        });
      },
    );
  }

  onEditPressed(account) {
    this.setState({
      showMenu: true,
      selectedAccount: account,
    });
  }

  onMenuClosePressed() {
    this.setState({
      showMenu: false,
    });
  }

  onChangeNamePressed() {
    const {selectedAccount} = this.state;
    this.setState({
      showNameInput: true,
      name: selectedAccount.username,
    });
  }

  onRemovePressed() {
    this.setState({showRemove: true});
  }

  onRemoveConfirmed() {
    const {selectedAccount} = this.state;

    removeAccount(selectedAccount).then(success => {
      this.getData();
      this.onRemoveCancelled();
    });
  }

  onRemoveCancelled() {
    this.setState({
      showRemove: false,
      selectedAccount: undefined,
    });
  }

  onAlertClose() {
    this.setState({
      showAlert: false,
      alertText: undefined,
    });
  }

  render() {
    const {
      accounts,
      showCodeInput,
      code,
      canContinueRegistration,
      showNameInput,
      name,
      canContinueNaming,
      showToken,
      showMenu,
      token,
      tokenProgress,
      tokenTimeLeft,
      selectedAccount,
      showRemove,
      showAlert,
      alertText,
    } = this.state;

    const {instructions} = this.props;
    const onCancelPressed = isValid(selectedAccount)
      ? this.onNameCancelPressed
      : undefined;
    const {username} = selectedAccount || {};

    return (
      <>
        <AddBusinessComponent
          instructions={instructions}
          data={accounts}
          onAddPressed={this.onAddPressed}
          onShowTokenPressed={this.onShowTokenPressed}
          onEditPressed={this.onEditPressed}
        />
        <CodeInput
          visible={showCodeInput}
          code={code}
          canContinue={canContinueRegistration}
          onCodeChanged={this.onCodeChanged}
          onAcceptPressed={this.onAcceptCodePressed}
          onCancelPressed={this.onCancelPressed}
          onRequestClose={this.onCancelPressed}
        />
        <NameInput
          visible={showNameInput}
          name={name}
          canContinue={canContinueNaming}
          onNameChanged={this.onNameChanged}
          onAcceptPressed={this.onNameAcceptPressed}
          onCancelPressed={onCancelPressed}
        />
        <SoftToken
          visible={showToken}
          token={token}
          tokenProgress={tokenProgress}
          tokenTimeLeft={tokenTimeLeft}
          onBackPress={this.onTokenBackPressed}
          onCopyPress={this.onCopyPressed}
          onAnimationComplete={this.onAnimationComplete}
        />
        <BusinessMenu
          visible={showMenu}
          onRequestClose={this.onMenuClosePressed}
          onChangeNamePressed={this.onChangeNamePressed}
          onRemovePressed={this.onRemovePressed}
        />
        <RemoveConfirmation
          visible={showRemove}
          business={username}
          onAcceptPressed={this.onRemoveConfirmed}
          onCancelPressed={this.onRemoveCancelled}
          onRequestClose={this.onRemoveCancelled}
        />
        <Confirmation
          visible={showAlert}
          text={alertText}
          onAcceptPressed={this.onAlertClose}
          onRequestClose={this.onAlertClose}
        />
      </>
    );
  }
}

export default AddBusiness;
