// This file is auto-generated. DO NOT EDIT IT MANUALLY.
import { ControllerConfigs } from "../";

export const configs: ControllerConfigs = {
  "blob-arena": {
    origin: "https://www.blobarena.xyz",
    theme: {
      colors: {
        primary: "#980f06",
      },
      cover: "https://static.cartridge.gg/presets/blob-arena/cover.png",
      icon: "https://static.cartridge.gg/presets/blob-arena/icon.png",
      name: "Blob Arena",
    },
  },
  cartridge: {
    origin: "*",
    theme: {
      name: "Cartridge",
      icon: "https://static.cartridge.gg/presets/cartridge/icon.svg",
      cover: {
        light: "https://static.cartridge.gg/presets/cartridge/cover-light.png",
        dark: "https://static.cartridge.gg/presets/cartridge/cover-dark.png",
      },
    },
  },
  "dark-shuffle": {
    origin: "https://darkshuffle.dev",
    theme: {
      colors: {
        primary: "#F59100",
      },
      cover: "https://static.cartridge.gg/presets/dark-shuffle/cover.png",
      icon: "https://static.cartridge.gg/presets/dark-shuffle/icon.svg",
      name: "Dark Shuffle",
    },
  },
  "dope-wars": {
    origin: "dopewars.game",
    policies: {
      contracts: {
        "0x051Fea4450Da9D6aeE758BDEbA88B2f665bCbf549D2C61421AA724E9AC0Ced8F": {
          name: "VRF Provider",
          description: "Provides verifiable random functions",
          methods: [
            {
              name: "Request Random",
              description: "Request a random number",
              entrypoint: "request_random",
            },
          ],
        },
        "0x0410466536b5ae074f7fea81e5533b8134a9fa08b3dd077dd9db08f64997d113": {
          name: "Paper Token",
          description: "Manages paper approvals",
          methods: [
            {
              name: "Approve",
              description: "Approve paper usage",
              entrypoint: "approve",
            },
          ],
        },
        "0x044a23BbfE03FFe90D3C23Fb6e5A8AD0341036C039363DfA6F3513278Aa51fCA": {
          name: "Game Contract",
          description: "Core game mechanics",
          methods: [
            {
              name: "Create Game",
              description: "Start a new game",
              entrypoint: "create_game",
            },
            {
              name: "Travel",
              description: "Travel to a new location",
              entrypoint: "travel",
            },
            {
              name: "Decide",
              description: "Make a game decision",
              entrypoint: "decide",
            },
            {
              name: "End Game",
              description: "End the current game",
              entrypoint: "end_game",
            },
          ],
        },
        "0x0412445e644070C69fEa16b964cC81Cd6dEBF6A4DBf683E2E9686a45ad088de8": {
          name: "Laundromat Contract",
          description: "Manages game scoring and laundering",
          methods: [
            {
              name: "Register Score",
              description: "Register a game score",
              entrypoint: "register_score",
            },
            {
              name: "Claim",
              description: "Claim rewards",
              entrypoint: "claim",
            },
            {
              name: "Launder",
              description: "Launder resources",
              entrypoint: "launder",
            },
          ],
        },
      },
    },
    theme: {
      colors: {
        primary: "#11ED83",
      },
      cover: "https://static.cartridge.gg/presets/dope-wars/cover.png",
      icon: "https://static.cartridge.gg/presets/dope-wars/icon.png",
      name: "Dope Wars",
    },
  },
  eternum: {
    origin: "eternum.realms.world",
    policies: {
      contracts: {
        "0x4ed3a7c5f53c6e96186eaf1b670bd2e2a3699c08e070aedf4e5fc6ac246ddc1": {
          name: "Pillage",
          description: "Allows you to raid a structure and pillage resources",
          methods: [
            {
              name: "Battle Pillage",
              description: "Pillage a structure",
              entrypoint: "battle_pillage",
            },
          ],
        },
        "0x2620f65aa2fd72d705306ada1ee7410023a3df03da9291f1ccb744fabfebc0": {
          name: "Battle contract",
          description: "Required to engage in battles",
          methods: [
            {
              name: "Battle Start",
              description: "Start a battle",
              entrypoint: "battle_start",
            },
            {
              name: "Battle Force Start",
              description: "Force start a battle",
              entrypoint: "battle_force_start",
            },
            {
              name: "Battle Join",
              description: "Join a battle",
              entrypoint: "battle_join",
            },
            {
              name: "Battle Leave",
              description: "Leave a battle",
              entrypoint: "battle_leave",
            },
            {
              name: "Battle Claim",
              description: "Claim a structure after a battle",
              entrypoint: "battle_claim",
            },
            {
              name: "Battle Resolve",
              description: "Reopens the bank after battle",
              entrypoint: "battle_resolve",
            },
          ],
        },
        "0x6bf57710571fd159e71b1ed155bb0759027e416c88a06556f321c94c214e768": {
          name: "Leave battle contract",
          description: "Allows armies to leave a battle",
          methods: [
            {
              name: "Leave Battle",
              description: "Leave a battle",
              entrypoint: "leave_battle",
            },
            {
              name: "Leave Battle If Ended",
              description: "Leave a battle if its ended",
              entrypoint: "leave_battle_if_ended",
            },
          ],
        },
        "0x4b6a35c0c541467674ebb9640113a6d79c6f5a468796e9299b8e484a770032a": {
          name: "Building contract",
          description: "Allows to manage buildings",
          methods: [
            {
              name: "Create",
              description: "Create a building",
              entrypoint: "create",
            },
            {
              name: "Pause Production",
              description: "Pause the production of a building",
              entrypoint: "pause_production",
            },
            {
              name: "Resume Production",
              description: "Resume production of a building",
              entrypoint: "resume_production",
            },
            {
              name: "Destroy a building",
              description: "Destroy a building",
              entrypoint: "destroy",
            },
          ],
        },
        "0x57d514154bb4dc319539d4e338312a41c248fb6a5122f82b2f2e11ddd3e67e4": {
          name: "Guild contract",
          description: "Allows guild utilities",
          methods: [
            {
              name: "Create Guild",
              description: "Creates a new guild",
              entrypoint: "create_guild",
            },
            {
              name: "Join Guild",
              description: "Join an existing guild",
              entrypoint: "join_guild",
            },
            {
              name: "Whitelist Player",
              description: "Add a player to the guild's whitelist",
              entrypoint: "whitelist_player",
            },
            {
              name: "Transfer Guild Ownership",
              description: "Transfer ownership of the guild to another player",
              entrypoint: "transfer_guild_ownership",
            },
            {
              name: "Remove Guild Member",
              description: "Remove a member from the guild",
              entrypoint: "remove_guild_member",
            },
            {
              name: "Remove Player From Whitelist",
              description: "Remove a player from the guild's whitelist",
              entrypoint: "remove_player_from_whitelist",
            },
          ],
        },
        "0x2fcc3c1691387321c2f4d6310eda7a14365bd274c1a37ed3948d2e93a56f821": {
          name: "Hyperstructure contract",
          description: "Handles the creation and management of hyperstructures",
          methods: [
            {
              name: "Get Points",
              description: "Gets your total number of points",
              entrypoint: "get_points",
            },
            {
              name: "Create",
              description: "Create a new hyperstructure",
              entrypoint: "create",
            },
            {
              name: "Contribute To Construction",
              description:
                "Contribute resources to hyperstructure construction",
              entrypoint: "contribute_to_construction",
            },
            {
              name: "Set Co Owners",
              description: "Set additional owners for the hyperstructure",
              entrypoint: "set_co_owners",
            },
            {
              name: "End Game",
              description:
                "Terminates the current game season once you've reached enough points",
              entrypoint: "end_game",
            },
            {
              name: "Set Access",
              description:
                "Configure access permissions for contributions to the hyperstructure",
              entrypoint: "set_access",
            },
          ],
        },
        "0xa052c5ca082356bcc8457f0f805eaf18f97d0fdddde3f90f5b238923859ed4": {
          name: "AMM liquidity contract",
          description: "Manages liquidity for the Automated Market Maker",
          methods: [
            {
              name: "Add",
              description: "Add liquidity to the pool",
              entrypoint: "add",
            },
            {
              name: "Remove",
              description: "Remove liquidity from the pool",
              entrypoint: "remove",
            },
          ],
        },
        "0x4a212c52c4035bc9bd170125216604f406dcd75b41be11d3b4d89047366d84d": {
          name: "Exploration contract",
          description: "Allows you to move to unexplored hexes on the map",
          methods: [
            {
              name: "Explore",
              description: "Explore an uncharted hex on the game map",
              entrypoint: "explore",
            },
          ],
        },
        "0x7e3bae0e253a0131063b63ee4d7b27b50329c617ae88b82d529a70f1a11c63": {
          name: "Naming contract",
          description: "Manages entity naming in the game",
          methods: [
            {
              name: "Set Entity Name",
              description: "Assign a custom name to a game entity",
              entrypoint: "set_entity_name",
            },
            {
              name: "Set Address Name",
              description: "Assign a custom name to a user's address",
              entrypoint: "set_address_name",
            },
          ],
        },
        "0x1b480f620ea35431ab43dba634795b14f547ef3e77370db6f0a31f2fdc21d86": {
          name: "Realms contract",
          description: "Manages realm-related actions",
          methods: [
            {
              name: "Upgrade Level",
              description: "Upgrade the level of a realm",
              entrypoint: "upgrade_level",
            },
            {
              name: "Quest Claim",
              description: "Claim rewards from completed quests",
              entrypoint: "quest_claim",
            },
          ],
        },
        "0x691a60b709ca5c1c5ff86824831f84deb26f0f5d07d70c0f807eab48110d2f6": {
          name: "Resource bridge contract",
          description: "Manages bridge transfers between L2 and Eternum",
          methods: [
            {
              name: "Deposit Initial",
              description: "Initial deposit of resources for bridge transfer",
              entrypoint: "deposit_initial",
            },
            {
              name: "Deposit",
              description: "Deposit additional resources for bridge transfer",
              entrypoint: "deposit",
            },
            {
              name: "Start Withdraw",
              description: "Initiate a withdrawal process",
              entrypoint: "start_withdraw",
            },
            {
              name: "Finish Withdraw",
              description: "Finalize a withdrawal process",
              entrypoint: "finish_withdraw",
            },
          ],
        },
        "0x42c0303a2119a9e20daa60e83c48221cdf1bb2a4c009bab031d1cd3555a127e": {
          name: "Resource contract",
          description: "In-game resource management",
          methods: [
            {
              name: "Approve",
              description: "Approve resource transfer",
              entrypoint: "approve",
            },
            {
              name: "Send",
              description: "Send resources to another entity",
              entrypoint: "send",
            },
            {
              name: "Pickup",
              description: "Collect available resources after approval",
              entrypoint: "pickup",
            },
          ],
        },
        "0x4f92a1d00d3aec8cece60fc2d0fc236fe1d95c54ff0ceb2f393fbc7e0863d8e": {
          name: "AMM swap contract",
          description: "Handles token swaps in the Automated Market Maker",
          methods: [
            {
              name: "Buy",
              description: "Purchase tokens from the liquidity pool",
              entrypoint: "buy",
            },
            {
              name: "Sell",
              description: "Sell tokens to the liquidity pool",
              entrypoint: "sell",
            },
          ],
        },
        "0x7e2b1334398fafbe640f34bacae99b649d633417960ee397b6a8fb117fec819": {
          name: "Market contract",
          description: "Manages trading orders in the in-game market",
          methods: [
            {
              name: "Create Order",
              description: "Create a new trading order",
              entrypoint: "create_order",
            },
            {
              name: "Accept Order",
              description: "Accept a trading order",
              entrypoint: "accept_order",
            },
            {
              name: "Accept Partial Order",
              description: "Accept a partial trading order",
              entrypoint: "accept_partial_order",
            },
            {
              name: "Cancel Order",
              description: "Cancel a trading order",
              entrypoint: "cancel_order",
            },
          ],
        },
        "0x4069c2be57f08fef9f31afc85a5b4c03c208ebdb278b9d853606caa7a9cbee6": {
          name: "Map travel contract",
          description: "Manages player movement across the game map",
          methods: [
            {
              name: "Travel Hex",
              description: "Move to a specific hex on the map",
              entrypoint: "travel_hex",
            },
          ],
        },
        "0x26be0ed574aa9ee6f73b53b12f0a199ddbf4ac697470316cdb3d9d1f5680cab": {
          name: "Army contract",
          description: "Manages army-related actions",
          methods: [
            {
              name: "Army Create",
              description: "Create a new army",
              entrypoint: "army_create",
            },
            {
              name: "Army Delete",
              description: "Delete an existing army",
              entrypoint: "army_delete",
            },
            {
              name: "Army Buy Troops",
              description: "Buy troops for an army",
              entrypoint: "army_buy_troops",
            },
            {
              name: "Army Merge Troops",
              description: "Merge troops from multiple armies",
              entrypoint: "army_merge_troops",
            },
          ],
        },
        "0x051fea4450da9d6aee758bdeba88b2f665bcbf549d2c61421aa724e9ac0ced8f": {
          name: "VRF Provider",
          description:
            "Verifiable Random Function contract, allows randomness in the game",
          methods: [
            {
              name: "Request Random",
              description:
                "Allows requesting random numbers from the VRF provider",
              entrypoint: "request_random",
            },
          ],
        },
      },
      messages: [
        {
          types: {
            StarknetDomain: [
              {
                name: "name",
                type: "shortstring",
              },
              {
                name: "version",
                type: "shortstring",
              },
              {
                name: "chainId",
                type: "shortstring",
              },
              {
                name: "revision",
                type: "shortstring",
              },
            ],
            "eternum-Message": [
              {
                name: "identity",
                type: "ContractAddress",
              },
              {
                name: "channel",
                type: "shortstring",
              },
              {
                name: "content",
                type: "string",
              },
              {
                name: "timestamp",
                type: "felt",
              },
              {
                name: "salt",
                type: "felt",
              },
            ],
          },
          primaryType: "eternum-Message",
          domain: {
            name: "Eternum",
            version: "1",
            chainId: "SN_MAIN",
            revision: "1",
          },
        },
      ],
    },
    theme: {
      name: "Eternum",
      icon: "https://static.cartridge.gg/presets/eternum/icon.svg",
      cover: "https://static.cartridge.gg/presets/eternum/cover.png",
      colors: {
        primary: "#dc8b07",
      },
    },
  },
  flippyflop: {
    origin: "https://flippyflop.gg",
    theme: {
      colors: {
        primary: "#F38332",
      },
      cover: "https://static.cartridge.gg/presets/flippyflop/cover.png",
      icon: "https://static.cartridge.gg/presets/flippyflop/icon.png",
      name: "FlippyFlop",
    },
  },
  "force-prime": {
    origin: "https://forceprime.io",
    theme: {
      colors: {
        primary: "#E1CC89",
      },
      cover: "https://static.cartridge.gg/presets/force-prime/cover.png",
      icon: "https://static.cartridge.gg/presets/force-prime/icon.png",
      name: "Force Prime",
    },
  },
  "jokers-of-neon": {
    origin: "https://jokersofneon.com",
    theme: {
      colors: {
        primary: "#A144B2",
      },
      cover: "https://static.cartridge.gg/presets/jokers-of-neon/cover.png",
      icon: "https://static.cartridge.gg/presets/jokers-of-neon/icon.png",
      name: "Jokers of Neon",
    },
  },
  "loot-survivor": {
    origin: "https://lootsurvivor.io",
    policies: {
      contracts: {
        "0x0124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49": {
          methods: [
            {
              entrypoint: "approve",
            },
            {
              entrypoint: "mint_lords",
            },
          ],
        },
        "0x0305f26ad19e0a10715d9f3137573d3a543de7b707967cd85d11234d6ec0fb7e": {
          methods: [
            {
              entrypoint: "attack",
            },
            {
              entrypoint: "drop",
            },
            {
              entrypoint: "equip",
            },
            {
              entrypoint: "explore",
            },
            {
              entrypoint: "flee",
            },
            {
              entrypoint: "new_game",
            },
            {
              entrypoint: "transfer_from",
            },
            {
              entrypoint: "upgrade",
            },
          ],
        },
        "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7": {
          methods: [
            {
              entrypoint: "approve",
            },
          ],
        },
      },
    },
    theme: {
      colors: {
        primary: "#33FF33",
      },
      cover: "https://static.cartridge.gg/presets/loot-survivor/cover.png",
      icon: "https://static.cartridge.gg/presets/loot-survivor/icon.png",
      name: "Loot Survivor",
    },
  },
  paved: {
    origin: "https://paved.gg",
    theme: {
      colors: {
        primary: "#B0CAF8",
      },
      cover: "https://static.cartridge.gg/presets/paved/cover.png",
      icon: "https://static.cartridge.gg/presets/paved/icon.svg",
      name: "Paved",
    },
  },
  pistols: {
    origin: "https://pistols.underware.gg",
    theme: {
      colors: {
        primary: "#EF9758",
      },
      cover: "https://static.cartridge.gg/presets/pistols/cover.png",
      icon: "https://static.cartridge.gg/presets/pistols/icon.png",
      name: "Pistols at Ten Blocks",
    },
  },
  pixelaw: {
    origin: "https://dojo.pixelaw.xyz",
    theme: {
      colors: {
        primary: "#7C00B1",
        primaryForeground: "white",
      },
      cover: "https://static.cartridge.gg/presets/pixelaw/cover.png",
      icon: "https://static.cartridge.gg/presets/pixelaw/icon.svg",
      name: "Pixelaw",
    },
  },
  "realm-of-ra": {
    origin: "https://mancala.realmofra.com",
    theme: {
      colors: {
        primary: "#de9534",
      },
      cover: "https://static.cartridge.gg/presets/realm-of-ra/cover.png",
      icon: "https://static.cartridge.gg/presets/realm-of-ra/icon.png",
      name: "Realm of Ra",
    },
  },
  "savage-summit": {
    origin: "",
    theme: {
      colors: {
        primary: "#fbf7da",
      },
      cover: "https://static.cartridge.gg/presets/savage-summit/cover.png",
      icon: "https://static.cartridge.gg/presets/savage-summit/icon.png",
      name: "Savage Summit",
    },
  },
  "tale-weaver": {
    origin: "",
    theme: {
      colors: {
        primary: "#fce377",
      },
      cover: "https://static.cartridge.gg/presets/tale-weaver/cover.png",
      icon: "https://static.cartridge.gg/presets/tale-weaver/icon.png",
      name: "Tale Weaver",
    },
  },
  zkastle: {
    origin: "https://zkastle.vercel.app",
    theme: {
      colors: {
        primary: "#E50D2C",
      },
      cover: "https://static.cartridge.gg/presets/zkastle/cover.png",
      icon: "https://static.cartridge.gg/presets/zkastle/icon.svg",
      name: "zKastle",
    },
  },
  zktt: {
    origin: "https://zktable.top",
    theme: {
      colors: {
        primary: "#FFFFFF",
      },
      cover: "https://static.cartridge.gg/presets/zktt/cover.png",
      icon: "https://static.cartridge.gg/presets/zktt/icon.png",
      name: "zKTT",
    },
  },
  zkube: {
    origin: "https://zkube.vercel.app",
    theme: {
      colors: {
        primary: "#5bc3e6",
      },
      cover: "https://static.cartridge.gg/presets/zkube/cover.png",
      icon: "https://static.cartridge.gg/presets/zkube/icon.png",
      name: "zKube",
    },
  },
};
