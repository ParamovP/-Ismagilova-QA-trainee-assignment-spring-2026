import { test, expect } from '@playwright/test';
import {StatPage} from "../../pages/statPage/statPage";
import {parseTime} from "../../helpers/functions";


test("Проверка работы кнопки обновления таймера", async ({ page }) => {

    const statPage = new StatPage(page);

    await statPage.openStatPage();
    await expect(statPage.refreshBtn).toBeVisible();
    await page.waitForTimeout(3000);

    // переводим время таймера в секунды
    const beforeRefreshText = await statPage.timer.textContent();
    const beforeRefreshTime = parseTime(beforeRefreshText);

    // проверяем, что обратный отсчет запустился автоматически
    await expect(beforeRefreshTime).toBeLessThan(300);
    await statPage.refreshBtn.click();

    // проверяем, что таймер сбросился (с учетом задержек)
    await expect(beforeRefreshTime, 
        'Таймер не обновился'
    ).toBeGreaterThanOrEqual(295);

    // ждем, чтобы убедиться, что он снова запустится
    await page.waitForTimeout(2000);
    const afterRefreshText = await statPage.timer.textContent();
    const afterRefreshTime = parseTime(afterRefreshText);

    // проверяем, что таймер снова запустился
    await expect(afterRefreshTime,
        'Таймер не запустился снова'
    ).toBeLessThan(300);

});