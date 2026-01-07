# PANTOhealth - Train Stations Map

A React + TypeScript application that visualizes train stations in Germany on an interactive Leaflet map. The app fetches station data from a GitHub Gist API, displays stations on a map, and provides filtering capabilities by city.

## Features

- ✅ **Data Fetching**: Fetches station data from GitHub Gist API with proper loading and error handling
- ✅ **Map Visualization**: Interactive Leaflet map centered on Germany with all stations as markers
- ✅ **Stations List**: Displays a list of all stations with name and city information
- ✅ **City Filter**: Real-time filtering by city name (case-insensitive, partial match)
- ✅ **Interactive Selection**: Clicking a station in the list highlights and zooms to the marker on the map
- ✅ **Responsive Design**: Clean, modern UI with proper layout and styling

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Leaflet** - Map library
- **React Leaflet** - React bindings for Leaflet
- **Vitest** - Testing framework
- **Testing Library** - Component testing utilities

## Project Structure

```
src/
├── api/
│   └── stations.api.ts      # API service for fetching stations
├── components/
│   ├── common/
│   │   └── Loader.tsx       # Loading component
│   ├── filters/
│   │   └── CityFilter.tsx   # City filter input
│   ├── map/
│   │   └── MapView.tsx      # Leaflet map component
│   └── stations/
│       └── StationList.tsx  # Stations list component
├── hooks/
│   └── useStations.ts       # Custom hook for stations data
├── types/
│   └── station.ts           # TypeScript types
├── utils/
│   └── filterStations.ts   # Filtering utility function
└── test/
    └── setup.ts             # Test configuration
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI

## Testing

The project includes unit tests for the filtering utility function. Run tests with:

```bash
npm run test
```
## API

The application fetches station data from:
```
https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/train-stations.json
```


