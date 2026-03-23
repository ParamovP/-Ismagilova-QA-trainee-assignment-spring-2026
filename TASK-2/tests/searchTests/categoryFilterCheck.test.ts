import { test, expect } from '@playwright/test';
import {MainPage} from "../../pages/mainPage/mainPage";
import { categories } from '../../helpers/categories';

test.describe("Проверка работы фильтра по категории", () => {
  categories.forEach(({ value, text }, index) => {
  test(`Категория ${index}: ${text}`, async ({ page }) => {
      const mainPage = new MainPage(page);

      await mainPage.openMainPage();
      await mainPage.catSelector.selectOption(value);

      const titles = mainPage.addTitle;
      const count = await titles.count();

      for (let i = 0; i < count; i++) {
        await expect(titles.nth(i)).toContainText(text);
      }
    });
  })
});