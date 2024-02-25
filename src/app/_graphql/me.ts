import { CART } from './cart'

export const ME_QUERY = `query {
  meUser {
    user {
      id
      email
      address
      name
      ${CART}
      roles
    }
    exp
  }
}`
