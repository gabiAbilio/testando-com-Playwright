// @ts-check
import { test, expect } from '@playwright/test';

test('Preenchendo um formulario', async ({ page }) => {
      await page.goto('https://demoqa.com/automation-practice-form');

  await page.getByPlaceholder('First Name').fill('Gabriela');
  await page.getByPlaceholder('Last Name').fill('Abilio');
  await page.getByPlaceholder('name@example.com').fill('gabrielaabilio@gmail.com')
  await page.getByLabel('Female').check();
  await page.getByPlaceholder('Mobile Number').fill('1155241578');
  await page.locator('.subjects-auto-complete__input').fill('English');
  await page.locator('#dateOfBirthInput').fill('25 Nov 2010');
  await page.getByLabel('Sport').check();
  await page.getByLabel('Sport').uncheck();

  const fileChooserPromise = page.waitForEvent('filechooser');

await page.getByRole('button', { name: 'Choose File' }).click();

const fileChooser = await fileChooserPromise;

await fileChooser.setFiles('C:/Users/gabri/Downloads/historia-da-internet-og.jpg')


  await page.getByPlaceholder('Current Address').fill('Avenida Brasil 65, Tupanci, Barueri');
  await page.locator('#state').click();
  //opção de pegar uma opção pelo texto
  await page.getByText('Uttar Pradesh', { exact: true }).click();
  await page.locator('#react-select-4-input').click();
  //escolher pelas opções
  await page.getByRole('option', { name: 'Merrut' }).click();
  await page.getByRole('button',{name:'submit'}).click();
});
