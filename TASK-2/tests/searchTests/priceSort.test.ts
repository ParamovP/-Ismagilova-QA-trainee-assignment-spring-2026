import { test, expect } from '@playwright/test';
import {MainPage} from "../../pages/mainPage/mainPage";


test.describe("Проверка сортировки по цене", () => {
    test("Сортировка по убыванию", async ({ page }) => {
        //arrange
        const mainPage = new MainPage(page);

        //act
        await mainPage.openMainPage();
        await mainPage.sortType.selectOption('price');
        await mainPage.sortMin.selectOption('desc');

        //assert
        const priceTexts = await mainPage.addPrice.allTextContents();
        //создаем массив из цен 
        const prices = priceTexts.map(text =>
            parseInt(text.replace(/[^\d]/g, ''), 10)
        );
        // создаём второй отсортированный массив
        const sortedPrices = [...prices].sort((a, b) => b - a);
        // проверяем, что цены на странице уже отсортированы
        await expect(prices, 
        'Сортировка по убыванию цены не сработала'
        ).toEqual(sortedPrices);

    });

    test("Сортировка по возрастанию", async ({ page }) => {
        //arrange
        const mainPage = new MainPage(page);

        //act
        await mainPage.openMainPage();
        await mainPage.sortType.selectOption('price');
        await mainPage.sortMin.selectOption('asc');

        //assert
        const priceTexts = await mainPage.addPrice.allTextContents();
        //создаем массив из цен 
        const prices = priceTexts.map(text =>
            parseInt(text.replace(/[^\d]/g, ''), 10)
        );
        // создаём второй отсортированный массив
        const sortedPrices = [...prices].sort((a, b) => a - b);
        // проверяем, что цены на странице отсортированы
        await expect(prices, 
            'Сортировка по возрастанию цены не сработала'
        ).toEqual(sortedPrices);

    });

});