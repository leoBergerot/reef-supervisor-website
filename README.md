# Reef Supervisor

Site explicatif de [Reef Supervisor](https://app.reef-supervisor.fr), l'application gratuite et ouverte pour suivre les paramètres de l'eau d'un aquarium récifal.

Les pages, en français et en anglais, décrivent le compte, les aquariums, les mesures datées, l'écart avec le relevé précédent, l'historique et le graphique.

## Développement local

```bash
npm install
npm run dev
```

Le site est servi sur [http://localhost:3000](http://localhost:3000) et redirige vers `/fr`.

Avec Docker :

```bash
docker compose up --build
```

## Image de production

L'image est construite en plusieurs étapes et le serveur écoute sur le port 81, comme l'image précédente.

```bash
docker compose -f docker-compose.prod.yml up --build
```

Le site est alors servi sur [http://localhost:81](http://localhost:81).
