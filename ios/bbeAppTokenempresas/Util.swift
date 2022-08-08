import Foundation

extension String {
  func toDate() -> Date? {
    let formatter = DateFormatter()
    formatter.dateFormat = "M/d/yy, h:m:s a"
    return formatter.date(from: self)
  }
}

struct Util {
  static let KEY_ORGANIZATION_NAME = "organizationName"
  static let KEY_USERNAME = "username"
  static let KEY_REGISTRATION_DATE = "registrationDate"
  static let KEY_REGISTRATION_METHOD = "registrationMethod"
  
  static func mapAccount(_ account: Account) -> NSDictionary {
    return [
      KEY_ORGANIZATION_NAME : account.organizationName as Any,
      KEY_USERNAME : account.username as Any,
      KEY_REGISTRATION_DATE : account.registrationDate as Any,
      KEY_REGISTRATION_METHOD : account.registrationMethod,
    ]
  }
  
  static func mapAccount(_ map: NSDictionary) -> Account {
    let account = Account()
    account.organizationName = map[KEY_ORGANIZATION_NAME] as? String
    account.username = map[KEY_USERNAME] as? String
    account.registrationDate = map[KEY_REGISTRATION_DATE] as? String
    account.registrationMethod = map[KEY_REGISTRATION_METHOD] as! Int32
    
    return account
  }
  
  static func findAccount(_ sdk: DetectID!, accountRef: Account!) -> Account? {
    return sdk.getAccounts().first(where: {
      let account = $0 as! Account
      return accountRef.organizationName == account.organizationName
        && accountRef.username == account.username
        && accountRef.registrationDate ==  account.registrationDate
        && accountRef.registrationMethod ==  account.registrationMethod
    }) as? Account
  }
  
  static func compareDates(_ account0: Any!, account1: Any!) -> Bool {
    let date0 = (account0 as! Account).registrationDate
    let date1 = (account1 as! Account).registrationDate
    return date0?.toDate()?.compare(date1?.toDate() ?? Date()) == .orderedDescending
  }
}
