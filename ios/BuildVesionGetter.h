
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNBuildVesionGetterSpec.h"

@interface BuildVesionGetter : NSObject <NativeBuildVesionGetterSpec>
#else
#import <React/RCTBridgeModule.h>

@interface BuildVesionGetter : NSObject <RCTBridgeModule>
#endif

@end
