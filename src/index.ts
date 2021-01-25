#!/usr/bin/env node

import dotenv from 'dotenv'
import { ArgumentParser} from 'argparse'

import { zevvle } from 'zevvle-sdk-node'
import { ArgumentsModel, ResultModel } from './models'

dotenv.config()
let parser: ArgumentParser

async function start() {
  const zevvleKey = <string>process.env.ZEVVLE_KEY
  const zevvleUrl = process.env.ZEVVLE_URL

  parser = new ArgumentParser({ description: "A Node interface to the Zevvle API" })
  parser.add_argument('--get-account', { help: 'Get details for a Zevvle account ID.' });
  parser.add_argument('--get-user', { help: 'Get details for a Zevvle user ID.' });
  parser.add_argument('--get-sim', { help: 'Get details for a Zevvle SIM card ID.' });
  parser.add_argument('--list-sim-cards', { help: 'List Zevvle SIM cards for the API key.' });
  
  const zev = new zevvle(zevvleKey, zevvleUrl)

  const args: ArgumentsModel = parser.parse_args()
  let result: ResultModel = {}

  if (args.get_account) {
    result["account"] = await zev.getAccount(args.get_account)
  }

  if (args.get_user) {
    result["user"] = await zev.getUser(args.get_user)
  }

  if (args.get_sim) {
    result["sim"] = await zev.getSim(args.get_sim)
  }

  if (args.list_sim_cards) {
    result["sim_cards"] = await zev.listSimCards()
  }

  return result
}

start()
  .then(result => {
    if (Object.keys(result as any).length === 0) {
      parser.print_help()
    } else {
      console.log(result)
    }
  })
  .catch(err => {
    console.error(`zevvle: error: ${err.message}`)
  })
