//
//  GeneralUtil.h
//  did-sdk-encrypt-iOS
//
//  Created by Elkin Salcedo on 17/01/20.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface GeneralUtil : NSObject

+ (bool)isValidObject:(id)any;
+ (bool)isValidSecKeyRef:(SecKeyRef)secKeyRef;
+ (NSException *)getException:(NSString *)exceptionName WithReason:(NSString *)reason;

@end

NS_ASSUME_NONNULL_END
