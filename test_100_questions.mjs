import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function test100Questions() {
    const browser = await chromium.launch();

    // Test Desktop
    const contextDesktop = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const pageDesktop = await contextDesktop.newPage();

    const fileUrl = `file://${path.resolve(__dirname, '100-questions/index.html')}`;
    await pageDesktop.goto(fileUrl);
    await pageDesktop.waitForSelector('.btn-start-game');
    await pageDesktop.click('.btn-start-game'); // rules
    await pageDesktop.waitForSelector('.btn-g-primary');
    await pageDesktop.click('.btn-g-primary'); // levels
    await pageDesktop.waitForSelector('.lvl-card');
    await pageDesktop.click('.lvl-card:first-child'); // start level 1

    await pageDesktop.waitForSelector('.rolodex-card');
    await pageDesktop.screenshot({ path: 'test_100q_desktop.png' });
    console.log('Desktop question card screenshot taken');

    // Test Remote Share Modal
    await pageDesktop.click('.sync-bar-btn');
    await pageDesktop.waitForSelector('.qr-modal-card');
    await pageDesktop.screenshot({ path: 'test_100q_sync_modal.png' });
    console.log('Sync modal screenshot taken');
    await pageDesktop.click('button:has-text("Close")');

    // Test Phone Context
    const contextPhone = await browser.newContext({ viewport: { width: 375, height: 667 } });
    const pagePhone = await contextPhone.newPage();
    await pagePhone.goto(`${fileUrl}?data-context=phone&deck=friends&lvl=0&q=0`);
    await pagePhone.waitForSelector('.rolodex-card');
    await pagePhone.screenshot({ path: 'test_100q_phone.png' });
    console.log('Phone context screenshot taken');

    // Test Projector Context
    const contextProjector = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const pageProjector = await contextProjector.newPage();
    await pageProjector.goto(`${fileUrl}?data-context=projector&deck=friends&lvl=0&q=0`);
    await pageProjector.waitForSelector('.rolodex-card');
    await pageProjector.screenshot({ path: 'test_100q_projector.png' });
    console.log('Projector context screenshot taken');

    await browser.close();
}

test100Questions().catch(err => {
    console.error(err);
    process.exit(1);
});
