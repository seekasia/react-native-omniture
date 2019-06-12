//
//  reactnativeomnitureapi.h
//  reactnativeomnitureapi
//
//  Created by Vivek Parekh on 11/2/16.
//  Copyright © 2016 Vivek Parekh. All rights reserved.
//
#import <Foundation/Foundation.h>

#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

@interface reactnativeomnitureapi : NSObject <RCTBridgeModule>

@end
