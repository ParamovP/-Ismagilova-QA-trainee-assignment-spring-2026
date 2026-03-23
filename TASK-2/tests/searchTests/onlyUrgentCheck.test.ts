import { test, expect } from '@playwright/test';
import {MainPage} from "../../pages/mainPage/mainPage";

test("Проверка работы тогла «Только срочные»", async ({ page }) => {
    //arrange
    const mainPage = new MainPage(page);

    //act
    await mainPage.openMainPage();
    await mainPage.onlyUrgent.click();

    //assert
    await expect(
    mainPage.priorSelector, 
        'Селектор приоритета не сменился на "Срочный"'
    ).toHaveValue('urgent');

    const adds = mainPage.add;
    const count = await adds.count();

    for (let i = 0; i < count; i++) {
        await expect(
        adds.nth(i).locator(mainPage.priorSign),
            'Фильтр по тоглу "Только срочные" отображает объявления без значка срочности'
        ).toBeVisible();
    }
});