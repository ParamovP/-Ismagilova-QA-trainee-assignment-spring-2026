import { test, expect } from '@playwright/test';
import {StatPage} from "../../pages/statPage/statPage";

test("Проверка работы кнопки остановки и запуска таймера", async ({ page }) => {
    //arrange
    const statPage = new StatPage(page);

    //act
    await statPage.openStatPage();
    await expect(statPage.autoRefBtn).toBeVisible();
    await expect(statPage.timer).toBeVisible();

    await statPage.autoRefBtn.click();

    //assert
    await expect(statPage.timer).toBeHidden();
    await expect(page.getByText('Автообновление выключено'), 
        'Автообновление не выключено'
    ).toBeVisible();

    // теперь проверяем, работает ли кнопка запуска таймера
    const initialLabel = await statPage.autoRefBtn.getAttribute('aria-label');
    if (!initialLabel) {
        throw new Error('aria-label is null');
    }

    await statPage.autoRefBtn.click();

    await expect(statPage.autoRefBtn, 
        'Кнопка запуска таймера не появилась'
    ).not.toHaveAttribute('aria-label', initialLabel);
    await expect(statPage.timer,
        'Кнопка обратного запуска таймера не сработала'
    ).toBeVisible();
    });

