# Relay Dummy

Minimális React + TypeScript + Vite alkalmazás, CSS nélkül. A főoldal gombjára kattintva megjelenik az **Error!** üzenet. Ez egy szándékos felületi hibajelzés, nem futásidejű kivétel.

## Fejlesztés

Node.js 22.12+ és npm 10+ szükséges. Az ajánlott Node-verzió a `.nvmrc` fájlban van.

```sh
nvm use
npm ci
npm run dev
```

## Ellenőrzés és build

```sh
npm run check
npm run preview
```

A `check` szigorú lintellenőrzést, TypeScript típusellenőrzést és production buildet futtat. A GitHub Actions minden `main` push és pull request esetén ugyanezt ellenőrzi.

A build eredménye a `dist/` mappa; statikus tárhelyen HTTPS-en szolgálható ki. A `preview` csak a build helyi ellenőrzésére szolgál. Nincs szükség környezeti változókra vagy backend szolgáltatásra.
