import Config from 'react-native-config';
import Sizes from 'themes/sizes';

export default function scales(size: number): number {
  return (size * Sizes.scrHeight) / parseInt(Config.HEIGHT_DESIGN!);
}
