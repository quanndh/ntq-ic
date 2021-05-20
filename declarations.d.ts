declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-bootpay' {
  import React from 'react';
  import { BootpayWebViewProps } from 'react-native-bootpay';
  const bootpay: React.FC<BootpayWebViewProps>;

  export default bootpay;
}
