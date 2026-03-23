export const priceTestData = [
    // позитивные проверки
  { id: 'PD-01', from: 2000, to: 16000, description: 'Базовая проверка' },
  { id: 'PD-02', from: 0, to: 9999999, description: 'Минимум = 0 и максимум = большое число' },
  { id: 'PD-03', from: 6343.5, to: 29050.3, description: 'Дробные числа' },
  { id: 'PD-04', from: 2000, to: null, description: 'Только от' },
  { id: 'PD-05', from: null, to: 16000, description: 'Только до' }
];