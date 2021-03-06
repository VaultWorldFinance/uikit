import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    chainId?: number;
    login: Login;
    logout: () => void;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
