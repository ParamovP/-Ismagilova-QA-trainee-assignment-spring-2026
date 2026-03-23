import { Locator, Page } from "@playwright/test";
import {BasePage} from "../basePage";

export class StatPage extends BasePage {
    protected pageName = "Страница статистики";
    
    readonly header: Locator;
    readonly refreshBtn: Locator;
    readonly autoRefBtn: Locator;
    readonly timer: Locator;
    readonly timerFull: Locator;


    constructor(page: Page) {
        super(page);
        this.header = page.locator("header");
        this.refreshBtn = page.locator('button[title="Обновить статистику"]');
        this.autoRefBtn = page.getByRole('button', {
            name: /автообновление/i,
        });
        this.timer = page.locator('span._timeValue_ir5wu_112');
        this.timerFull = page.locator('.__timer_ir5wu_61');
    



    }


    protected root(): Locator {
        return this.header;
    }

    async openStatPage() {
        await this.page.goto("https://cerulean-praline-8e5aa6.netlify.app/");
        await this.page.getByText('Статистика').click();
        await this.waitForOpen();
    }
}    

