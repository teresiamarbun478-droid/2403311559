import { login, getUser, getTabungan, getSaldo } from './modul-login,js';

async function main() {
    try {
        const response = await login("bivky");
        const key = getUser(response.token);
        const tabungan = await getTabungan(key);
        const saldo = await getSaldo(tabungan);

        console.log(`Key: ${key.key}`);
        console.log(`Tabungan: ${tabungan}`);
        console.log(`Saldo: ${saldo}`);

    } catch(err) {
        console.log(err);
    }
}

main();