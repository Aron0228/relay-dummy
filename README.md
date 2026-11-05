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

## Railway

A `railway.json` beállítja a buildet (`npm run build`) és a production indítást (`npm start`). Az indítás a `dist/` mappát szolgálja ki a `0.0.0.0` címen és a Railway által megadott `PORT`-on (helyben alapból 3000).

A Railway szolgáltatás beállításaiban töröld a korábbi `npm run dev` Start Command felülírást, vagy állítsd `npm start`-ra. A generált domain Target Port értéke egyezzen a szolgáltatás `PORT` értékével. Ezután indíts új deploymentet a javítást tartalmazó ágról.

Helyi production próba:

```sh
npm run build
npm start
```
