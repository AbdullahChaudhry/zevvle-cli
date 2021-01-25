export interface UserModel {
  id: string,
  created_at: string,
  account_id: string,
  email: string,
  name: string,
  account_owner: boolean,
  referral_id: string,
  referrer_id: string|null,
  monthly_data_usage: number,
  referrals: number,
  free_data: number,
  sim_cards: string[]
}
