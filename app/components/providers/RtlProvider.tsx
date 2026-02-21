import { CacheProvider } from "@emotion/react";
import React from "react";
import { cacheRtl } from "../../theme/rtl";

interface RtlProviderProps {
   children: React.ReactNode;
}

const RtlProvider = ({ children }: RtlProviderProps) => {
   return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default RtlProvider;
