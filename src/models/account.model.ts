export interface AccountModel {
  id: string,
  created_at: string,
  balance: string,
  billing_date: string,
  next_bundle: string,
  users: string[],
  sim_cards: string[]
}
