import { test, expect } from '@playwright/test';
import { priceTestData } from '../../helpers/priceTestData';
import { MainPage } from '../../pages/mainPage/mainPage';

test.describe('Проверка работы фильтров на диапазон цены', () => {
    // берем тестовые наборы данных для позитивных проверок из хелпера
  for (const { id, from, to, description } of priceTestData) {
    test(`${id}: ${description}`, async ({ page }) => {
        const mainPage = new MainPage(page);

        await mainPage.openMainPage();

        if (from !== null) {
            await mainPage.minPrice.fill(String(from));
        }

        if (to !== null) {
            await mainPage.maxPrice.fill(String(to));
        }
        
        // преобразовываем цены из карточек объявлений в числа
        const prices = mainPage.addPrice;
        for (let i = 0; i < await prices.count(); i++) {
            const price = await prices.nth(i).textContent();
            const value = Number(price!.replace(/\D/g, ''));

            if (from !== null) {
            expect(value,
                'Поиск выдает объявления с ценами ниже минимальной указанной цены'
            ).toBeGreaterThanOrEqual(from);
            }

            if (to !== null) {
            expect(value,
                'Поиск выдает объявления с ценами выше максимальной указанной цены'
            ).toBeLessThanOrEqual(to);
            }
        } 
    });
  };

  test("При От больше До отображается пустая выдача", async ({ page }) => {
    //arrange
    const mainPage = new MainPage(page);

    //act
    await mainPage.openMainPage();
    await mainPage.minPrice.fill('16000');
    await mainPage.maxPrice.fill('2000');

    //assert
    await expect(page.getByText('Попробуйте изменить параметры фильтрации')).toBeVisible();
    }
  );
});