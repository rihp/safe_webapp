import { SafeManagerUri , SafeFactoryUri, EthereumWrapperUri} from "./uris";
import connection from "./inputs/connection.json"

export interface Example {
  name: string;
  description: string;
  uri: string;
  method: string;
  args: Record<string, unknown>;
}

export const examples: Example[] = [
  
  {
    name: "Get Signer Address",
    description: "Retrieve the signer address.",
    uri: EthereumWrapperUri,
    method: "getSignerAddress",
    args: {
      connection: connection,
    },
  },
  {
    name: "Predict Safe Address",
    description: "Predict the safe address before deployment.",
    uri: SafeFactoryUri,
    method: "predictSafeAddress",
    args: {
      input: {
        safeAccountConfig: {
          owners: [], // will be replaced with signerAddress.value
          threshold: 1,
        },
        safeDeploymentConfig: {
          saltNonce: "0x19938",
        },
        connection: connection,
      },
    },
  },
  {
    name: "Safe Is Deployed",
    description: "Check if the safe is already deployed.",
    uri: SafeFactoryUri,
    method: "safeIsDeployed",
    args: {
      safeAddress: "", // will be replaced with expectedSafeAddress.value
      connection: connection,
    },
  },
  {
    name: "Deploy Safe",
    description: "Deploy a new safe.",
    uri: SafeFactoryUri,
    method: "deploySafe",
    args: {
      input: {
        safeAccountConfig: {
          owners: [], // will be replaced with signerAddress.value
          threshold: 1,
        },
        safeDeploymentConfig: {
          saltNonce: "0x19938",
        },
        connection: connection,
      },
    },
  },
  {
    name: "Get Owners",
    description: "Retrieve the list of owners of a safe.",
    uri: SafeManagerUri,
    method: "getOwners",
    args: {}
  },
  // Add more examples here as needed
];

export default examples;
