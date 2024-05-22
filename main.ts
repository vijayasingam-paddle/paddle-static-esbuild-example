import { initializePaddle } from '@paddle/paddle-js'

const access_token = 'test_XXX'
const customer_id = 'ctm_XXX'
const price_id = 'pri_XXX'

async function checkout() {
  const paddle = await initializePaddle({
    environment: 'sandbox',
    token: access_token
  })
  if (paddle) {
    paddle.Checkout.open({
      settings: {
        displayMode: 'overlay',
        theme: 'light'
      },
      customer: {
        id: customer_id
      },
      items: [
        {
          quantity: 1,
          priceId: price_id
        }
      ]
    })
  }
}

document.querySelector('#button')!.addEventListener('click', checkout)