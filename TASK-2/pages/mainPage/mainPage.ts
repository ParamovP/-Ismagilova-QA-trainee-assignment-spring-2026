import { Locator, Page } from "@playwright/test";
import {BasePage} from "../basePage";

export class MainPage extends BasePage {
    protected pageName = "Главная страница";

    readonly header: Locator;
    readonly minPrice: Locator;
    readonly maxPrice: Locator;
    readonly catSelector: Locator;
    readonly onlyUrgent: Locator;
    readonly sortType: Locator;
    readonly sortMin: Locator;
    readonly add: Locator;
    readonly addPrice: Locator;
    readonly addTitle: Locator;
    readonly priorSign: Locator;
    readonly clearBtn: Locator;
    readonly priorSelector: Locator;
    readonly themeSwitchToDark: Locator;
    readonly themeSwitchToLight: Locator;


    constructor(page: Page) {
        super(page);
        this.header = page.locator("header");
        this.minPrice = page.locator('input[placeholder="От"]');
        this.maxPrice = page.locator('input[placeholder="До"]');
        this.catSelector = page.locator('._filters__select_1iunh_21:has-text("Все категории")');
        this.onlyUrgent = page.locator('._urgentToggle__slider_h1vv9_21');
        this.sortType = page.locator('._filters__select_1iunh_21:has-text("Дате создания")');
        this.sortMin = page.locator('._filters__select_1iunh_21:has-text("По убыванию")');
        this.add = page.locator('._card_15fhn_2');
        this.addPrice = page.locator('._card__price_15fhn_241');
        this.addTitle = page.locator('._card__title_15fhn_26');
        this.priorSign = page.locator('.__card__priority_15fhn_172');
        this.clearBtn = page.locator('.__sidebar__reset_tw7kk_152');
        this.priorSelector = page.locator('select:has(option[value="urgent"])');
        this.themeSwitchToDark = page.locator('button[aria-label="Switch to dark theme"]');
        this.themeSwitchToLight = page.locator('button[aria-label="Switch to light theme"]');
    }


    protected root(): Locator {
        return this.header;
    }

    async openMainPage() {
        await this.page.goto("https://cerulean-praline-8e5aa6.netlify.app/");
        await this.waitForOpen();
    }
}