//
//  Constant.h
//  did-sdk-encrypt-iOS
//
//  Created by Elkin Salcedo on 17/01/20.
//

#import <Foundation/Foundation.h>

#define _INVALID_PARAMETER_NAME @"Name: Invalid entry parameters."
#define _REASON_NAME @"Reason: Some entry parameters are nil or empties."
#define _RESULT_ENCRYPTION_NAME_ @"Name: Encryption result."
#define _REASON_ENCRYPTION_NAME_ @"Reason: Encryption result is nil or empty."
#define _LOG_TAG_RSAMANAGER_ @"KeyManager"
#define EXPONENT @"exponent"
#define MODULUS @"modulus"

#define FORMAT_X @"%x"
#define FORMAT_D @"%d"
#define _OUTPUT_MD5_FORMAT_ @"%02x"
#define _PUBLIC_TAG_FORMAT_ @"%@\n%@"
#define SYSTEM_VERSION_GRATERTHAN_OR_EQUALTO(v)  ([[[UIDevice currentDevice] systemVersion] compare:v options:NSNumericSearch] != NSOrderedAscending)

//AES Messages
#define AES_ERROR_NAME @"Aes Encryption Error"
#define AES_ERROR_FORMAT @"%@/%d"
#define AES_ENCRYPT_ERROR_REASON @"Value could not be encrypted result status:  "
#define AES_DECRYPT_ERROR_REASON @"Value could not be decrypted result status:  "
#define DATA_ERROR_REASON @"Data or key does not have the correct format:  "

// RSA Messages
#define _RSA_ERROR_NAME_ @"RSA Error"
#define _RSA_ENCRYPT_ERROR_NAME_ @"RSA Encrypt Error"
#define _RSA_DECRYPT_ERROR_NAME_ @"RSA Decrypt Error"
#define _RSA_SIGNDATA_ERROR_NAME_ @"RSA SignData Error"
#define _RSA_VERIFYSIGNDATA_ERROR_NAME_ @"RSA VerifySignData Error"
#define _RSA_KEYPAIRGENERATOR_ERROR_NAME_ @"RSA Key Pair generator Error"

#define _RSA_ERROR_FORMAT_ @"%@"
#define _RSA_ENCRYPTION_ERROR_REASON_ @"Value could not be encrypted result status: "
#define _RSA_DECRYPTION_ERROR_REASON_ @"Value could not be Decrypted result status: "
#define _RSA_ERROR_NO_KEY_FOUND_ @"The key was not found"

#define _RSA_SIGNDATA_ERROR_REASON_ @"Value could not be signed "
#define _RSA_VERIFYSIGNDATA_ERROR_REASON_ @"Value could not be verifed "

// Hash Messages
#define _SHA1_HASH_ERROR_NAME_ @"SHA1 Hash Error"

// Validation object
#define allTrim( object ) [object stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet] ]

// General messages
#define _ERROR_ENTRY_PARAMETER_ @"Invalid entry parameter"
#define _ERROR_ENTRY_PARAMETER_ERROR_REASON_ @"Entry value is empty or null"
