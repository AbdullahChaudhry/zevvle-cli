import { AccountModel, UserModel, SIMCardModel } from '.' 

export interface ResultModel {
  account?: AccountModel,
  user?: UserModel,
  sim?: SIMCardModel,
  sim_cards?: SIMCardModel[]
}
