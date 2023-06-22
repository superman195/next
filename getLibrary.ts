import type {
  ExternalProvider,
  JsonRpcFetchFunc,
} from "@ethersproject/providers";
import { Web3Provider } from "@ethersproject/providers";
//dfkjk
export default function getLibrary(
  provider: ExternalProvider | JsonRpcFetchFunc
) {
  return new Web3Provider(provider);
}
