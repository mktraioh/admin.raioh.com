import request from '../request';

const subscriptionService = {
  getAll: (params) => request.get('dashboard/seller/subscriptions', { params }),
  attach: (id, data) =>
    request.post(`dashboard/seller/subscriptions/${id}/attach`, data),
  transactionCreate: (id, data) =>
    request.post(`payments/subscription/${id}/transactions`, data),
  transactionCreateMercadoPago: (data) => {
    return request.get(`dashboard/user/subscription-mercado-pago-process?subscription_id=${data.subscription_id}`)
  }, 
};

export default subscriptionService;
