import { SafeManagerUri, SafeContractsUri, SafeFactoryUri, uniswapV3Uri } from "./uris";
import WETH from "./inputs/WETH.json"
import USDC from "./inputs/USDC.json"
import pool from "./inputs/pool.json"
import route from "./inputs/route.json"
// import quoteCallParameters from "./inputs/quoteCallParameters.json"
import trade from "./inputs/trade.json"
// import swapCallParameters from "./inputs/swapCallParameters.json"

const deadline = (new Date().getTime() / 1000 + 1800).toFixed(0)

export interface Example {
  name: string;
  description: string;
  uri: string;
  method: string;
  args: Record<string, unknown>;
}

export const examples: Example[] = [
  {
    name: "Get Pool Address",
    description: "Each Uniswap V3 Pool is uniquely identified by 3 characteristics: token-in, token-out, and fee.",
    uri: uniswapV3Uri,
    method: "getPoolAddress",
    args: {
      tokenA: WETH,
      tokenB: USDC,
      fee: "MEDIUM"
    }
  },
  {
    name: "Fetch Pool Data",
    description: "A Uniswap V3 Pool's on-chain state can be fetched using the pools tokens and fee, or with its address.",
    uri: uniswapV3Uri,
    method: "fetchPoolFromTokens",
    args: {
      tokenA: WETH,
      tokenB: USDC,
      fee: "MEDIUM",
      fetchTicks: false,
    }
  },
  {
    name: "Create a Route",
    description: "Using one or more Pools, we can create a Route to define the path of a Trade.",
    uri: uniswapV3Uri,
    method: "createRoute",
    args: {
      pools: [
        pool
      ],
      inToken: WETH,
      outToken: USDC
    }
  },
  {
    name: "Get Quote Calldata",
    description: "To obtain a trade quote, we can use a Route to construct calldata for Uniswap's Quoter contract",
    uri: uniswapV3Uri,
    method: "quoteCallParameters",
    args: {
      route: route,
      amount: {
        token: WETH,
        amount: "1000000000000000000" // 1 WETH
      },
      tradeType: "EXACT_INPUT",
    }
  },
  // returns transaction hash; need to add a provider.call method to ethereum wrapper
  // https://docs.ethers.org/v5/api/providers/provider/#Provider-call
  // {
  //   name: "Call the Quoter",
  //   description: "We can use the calldata generated by quoteCallParameters to call the Quoter contract directly",
  //   uri: uniswapV3Uri,
  //   method: "execCall",
  //   args: {
  //     parameters: quoteCallParameters,
  //     address: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
  //     chainId: "MAINNET",
  //     gasOptions: {
  //       gasPrice: "30000000000"
  //     }
  //   }
  // },
  {
    name: "Create a Trade",
    description: "We can create a Trade with the quote data returned by the Quoter contract",
    uri: uniswapV3Uri,
    method: "createUncheckedTrade",
    args: {
      swap: {
        route: route,
        inputAmount: {
          token: WETH,
          amount: "1000000000000000000" // 1 WETH
        },
        outputAmount: {
          token: USDC,
          amount: "1807237756"
        }
      },
      tradeType: "EXACT_INPUT",
    }
  },
  {
    name: "Get Swap Calldata",
    description: "We can generate calldata to execute the Trade on chain.",
    uri: uniswapV3Uri,
    method: "swapCallParameters",
    args: {
      trades: [ trade ],
      options: {
        slippageTolerance: "0.01",
        recipient: '0x0000000000000000000000000000000000000003',
        deadline: deadline,
      }
    }
  },
  {
  name: "Get Owners",
  description: "Retrieve the list of owners of a safe.",
  uri: SafeManagerUri,
  method: "getOwners",
  args: {
    // Add any required arguments for the 'getOwners' method here.
  }
}
  // this will not work until we dynamically feed in the result of the call to swapCallParameters
  // {
  //   name: "Execute a Swap",
  //   description: "Let's execute the swap!",
  //   uri: uniswapV3Uri,
  //   method: "execCall",
  //   args: {
  //     parameters: swapCallParameters,
  //     address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  //     chainId: "MAINNET",
  //     gasOptions: {
  //       gasPrice: "300000000000"
  //     }
  //   }
  // },
]