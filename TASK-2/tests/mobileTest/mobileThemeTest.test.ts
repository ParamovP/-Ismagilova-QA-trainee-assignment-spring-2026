import { test, expect, devices } from '@playwright/test';
import {MainPage} from "../../pages/mainPage/mainPage";

test.use(devices['iPhone 11']);

test("Проверка переключения между тёмной и светлой темой на мобильной версии сайта", async ({ page }) => {
    
    const mainPage = new MainPage(page);

    await mainPage.openMainPage();
    await expect(page).toHaveTitle(/./);
    await expect(mainPage.themeSwitchToDark).toBeVisible();

    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'light');
    await mainPage.themeSwitchToDark.click();
    await expect(html,
        'Переключение на темную тему не сработало'
    ).toHaveAttribute('data-theme', 'dark');

    // теперь проверяем переключение обратно в светлую тему
    await expect(mainPage.themeSwitchToLight).toBeVisible();
    await mainPage.themeSwitchToLight.click();
    await expect(html,
        'Переключение обратно на светлую тему не сработало'
    ).toHaveAttribute('data-theme', 'light');
  });