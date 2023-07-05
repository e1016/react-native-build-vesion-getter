import { useEffect, useState } from 'react';
import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-build-vesion-getter' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const BuildVesionGetter = NativeModules.BuildVesionGetter
  ? NativeModules.BuildVesionGetter
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

type ReactNativeBuildVesionGetterProps = {
  name: string;
  code: number;
  done: boolean;
};

export default function useVersion(): ReactNativeBuildVesionGetterProps {
  const [version, setVersion] = useState<ReactNativeBuildVesionGetterProps>({
    name: '',
    code: 0,
    done: false,
  });

  useEffect(() => {
    BuildVesionGetter.getVersionName().then((name: string) =>
      BuildVesionGetter.getVersionCode().then((code: number) =>
        // ios dont let me send integer, so i send string and cast...
        setVersion({ name, code: +code, done: true })
      )
    );
  }, []);

  return version;
}
