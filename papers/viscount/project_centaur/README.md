# CENTAUR-II: Population & Settlement Regional Study (Northern America, Hawai'i & Territories)

`CENTAUR` (`order: 1`, `z_priority: 1`) supersedes legacy `population_Substrata.northern_america` (`Centaur I`) under the Operation Viscount architecture modelled on `POLARIS`.

## Scope (-10000 to 2026 AD)
- **Part 1 (`1.pre_columbian_canada_and_alaska/`)**: 6 modules spanning Northern Cascadia & Alaska, Northern Canada & pre-colonial Greenland, Prairies, Hudson Bay, Saint Lawrence and the Maritimes (`-10000` to `1600 AD`).
- **Part 2 (`2.united_states_hydrological_units/`)**: 18 Hydrological Units ordered strictly by Kelly et al. (2025, *PNAS* `PMC11831114`) radiocarbon peak timing (`01.upper_colorado` through `18.northwest`, `-10000` to `1600 AD`).
- **Part 3 (`3.hawaii_and_american_polynesia/`)**: Pre-Annexation Hawai'i and American Polynesia (`800` to `1898 AD` settlement kriging; `-10000` to `1898 AD` domain).
- **Part 4 (`4.colonial_america_and_canada/`)**: 4 modules (`colonial_america_to_1754`, `colonial_america_to_1783`, `colonial_canada_to_1763`, `colonial_canada_to_1867`).
- **Part 5 (`5.modern_canada_and_united_states/`)**: `canada_post_confederation` (`1867` to `2026 AD`, incl. Greenland & Saint-Pierre-et-Miquelon; `5.871` settlements) and `united_states_post_independence` (`1783` to `2026 AD`, incl. Bermuda & 1898+ Hawai'i/American Samoa; `36.901` settlements), uniting `51.600` catalogued settlements across all `31` modules.

## Key Entrypoints
- `centaur_gazetteers.json5`: Master manifest of all 31 `<stem>_settlements.json` files routed into `ViscountGazetteerLoader`.
- `centaur_areal_masks.json5`: Master spatial calibration manifest consumed by `ViscountSubstrataPipeline` and `ViscountSubstrataMosaic`.
- `_shared/sites_northern_america/` and `_shared/sites_hawaii_polynesia/`: Non-stationary Matérn ($\nu = 3/2$) kriging extractors, runners and 128-year rural suitability GeoPNGs.
- `studies_on_population.Rmd`: Root academic synthesis compiled via `rmarkdown::render` + `xelatex`.
