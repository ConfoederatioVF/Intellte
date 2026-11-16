# Archaeological Site Dataset & Spatial Kriging Pipeline for Belarus and Mainland Ukraine (`sites_belarus_ukraine`)

This directory contains the 12-epoch archaeological site GeoJSON dataset (`geojson/`), the multi-source genuine archaeological extractor (`extract_belarus_ukraine_geojson.js`), and the Parameter-Free Empirical Non-Stationary Matérn ($\nu = 3/2$) Log-Linear Residual Kriging and Urban-Masked HYDE 3.5 `popc` Dasymetric Disaggregation pipeline (`krige_sites_belarus_ukraine.js`) for **modern Belarus (`BLR`) and mainland Ukraine (`UKR`, excluding Crimea)** across the Kievan Rus chronological span (`c. 1 AD - 1400 AD`, up to the Mongol Conquests).

It is designed as a direct spatial and methodological counterpart to [`../1.entire_country/sites_IA_RAS/`](../../1.entire_country/sites_IA_RAS/README.md), tiling seamlessly along the Russian Federation and Crimean border (`crimea_bbox` is excluded here because the Republic of Crimea and Sevastopol are already included in `sites_IA_RAS`).

---

## 1. Directory Structure

- [`config/sites_belarus_ukraine.json5`](./config/sites_belarus_ukraine.json5) - Master JSON5 configuration defining the 12 archaeological epochs (`01_stone_age_e52` through `12_unspecified_e_neg1`), chronological anchors (`0` to `1400 AD`), 15 HYDE 3.5 benchmark years (`0, 100, ..., 1400`), urban-masking paths (`uopp_2023AD`, `urbc`, `stadester_urban`), Russian cross-frontier conditioning parameters (`sites_IA_RAS`), natural environmental covariate paths (`maxln_cr.asc`, `forest_wwf_cr.asc`) and `BLR`/`UKR` geocode masks.
- [`config/adm2_raions_catalog.json`](./config/adm2_raions_catalog.json) - Reference catalogue of the `595` ADM2 raions (`118` in Belarus across `7` ADM1 oblasts; `477` in mainland Ukraine across `25` ADM1 oblasts).
- [`config/scraped_sites_raw_summary.json`](./config/scraped_sites_raw_summary.json) - Consolidated, geocoded and spatially deduplicated catalogue of `43 437` archaeological site-epoch records (`4 196` in `BLR`, `39 241` in `UKR`) harvested from 19 genuine institutional, state-register, GIS and academic repositories.
- [`config/belarus_ukraine_geojson_metadata.json`](./config/belarus_ukraine_geojson_metadata.json) - Provenance manifest, institutional citations, endpoints and epoch-by-epoch statistics for the `595` ADM2 raions and `43 437` site-epoch records.
- [`config/belarus_ukraine_kriging_metadata.json`](./config/belarus_ukraine_kriging_metadata.json) - Fitted Paciorek–Schervish non-stationary Matérn ($\nu = 3/2$) variogram parameters (`c0_nugget`, `c1_meso_sill`, `c2_macro_sill`, `gls_mean`, empirical semivariances), WLS log-linear regression coefficients (`wls_beta`), raster quantile diagnostics and urban-masked HYDE 3.5 `popc` time-series totals (`0` to `1400 AD`).
- [`geojson/`](./geojson/) - 12 period-specific WGS84 (`EPSG:4326`) GeoJSON `FeatureCollection` files (`01_stone_age_e52.geojson` .. `12_unspecified_e_neg1.geojson`) plus `00_all_periods.geojson`.
- [`extract_belarus_ukraine_geojson.js`](./extract_belarus_ukraine_geojson.js) - Production extractor (`SitesBelarusUkraineGeoJSONExtractor`) that aggregates the multi-source scraped catalogue across the `595` ADM2 raions and `32` ADM1 oblasts and builds `geojson/*.geojson` and `config/belarus_ukraine_geojson_metadata.json`.
- [`SitesBelarusUkraineFrontierUtils.js`](./SitesBelarusUkraineFrontierUtils.js) - Subclass of `SitesIARASResidualKriging` providing urban-masked HYDE 3.5 `popc` loading (`population_c14bazAAR` methodology), `322` Russian/Crimean cross-frontier conditioning raions from `sites_IA_RAS` and two-stage cross-frontier dasymetric blending and blurring (`SitesBelarusUkraineFrontierUtils`).
- [`SitesBelarusUkraineGridUtils.js`](./SitesBelarusUkraineGridUtils.js) - Subclass of `SitesBelarusUkraineFrontierUtils` providing Projected Gauss-Seidel Non-Negative Dual Kriging (`solveNonNegativeDualKriging`), macro-ecological steppe-to-forest habitation extraction (`computeDeCliffedHabitationField`, `loadBiophysicalCovariates`) and constrained WLS log-linear residual kriging (`SitesBelarusUkraineGridUtils`).
- [`SitesBelarusUkraineObservationUtils.js`](./SitesBelarusUkraineObservationUtils.js) - Subclass of `SitesBelarusUkraineGridUtils` providing 5-arcminute land-mask construction (`A_buildBelarusUkraineMask`), ADM2 raion observation loading (`B_loadRaionObservations`) and ecological Empirical Bayes oblast harmonisation (`harmoniseOblastObservationsEB`).
- [`krige_sites_belarus_ukraine.js`](./krige_sites_belarus_ukraine.js) - End-to-end 6-step (`A_` through `F_`) Parameter-Free Empirical Non-Stationary Matérn ($\nu = 3/2$) Log-Linear Residual Kriging and Urban-Masked HYDE 3.5 `popc` disaggregation pipeline (`SitesBelarusUkraineKriging`).
- `1.kriged_rasters/` - 12 float32 GeoPNG rasters (`4320 x 2160`, 5-arcminute global grid) representing period-specific Log-Linear Residual Kriging settlement density coupled with `population_Stadester` habitation and natural environmental covariates.
- `2.population_rasters/` - 15 float32 GeoPNG rasters (`popc_0.png` .. `popc_1400.png`) representing chronologically interpolated and dasymetrically disaggregated population counts over Belarus and mainland Ukraine from `c. 1 AD` (`0`) to the Mongol Conquests (`1400 AD`), seamlessly blended along the Russian and Crimean frontier.

---

## 2. Methodology Highlights

1. **Projected Gauss-Seidel Non-Negative Dual Kriging (`solveNonNegativeDualKriging`)**: Solves the dual kriging system $(C + \eta I)\mathbf{w} = \mathbf{z}_{\text{adj}}$ subject to $\mathbf{w} \ge 0$, preventing negative lobe cancellation and the `12x–17x` amplitude inflation that occurs when unconstrained Cholesky dual weights are clipped post-hoc in sparse steppe oblasts.
2. **Wild Fields (`Дике Поле`) & Donbas Ecological Habitation Envelope**: Preserves macro-ecological contrast across `sub_iso_cr.asc` partitions (`computeDeCliffedHabitationField`), derives the empirical steppe-to-forest density ratio $\epsilon_{\text{steppe}} = \sqrt{d_{\text{steppe}} / d_{\text{forest}}}$ from `forest_wwf_cr.asc` (`loadBiophysicalCovariates`) and excludes Bronze Age steppe kurgans (`epoch_id = 47`, `-1`) from the medieval Empirical Bayes prior (`harmoniseOblastObservationsEB`). In `1200 AD`, the treeless Wild Fields average `1,38 / km²` (`Kherson 0,8 / km²`, `Zaporizhzhia 1,01 / km²`, `Mykolaiv 1,06 / km²`, `Odesa 1,11 / km²`, `Dnipropetrovsk 1,27 / km²`, `Donetsk 1,49 / km²`, `Luhansk 2,13 / km²`) compared to `3,87 / km²` across the forested/forest-steppe Kievan Rus heartland (`Minsk 5,13 / km²`, `Cherkasy 4,75 / km²`, `Grodno 4,6 / km²`, `Brest 4,28 / km²`, `Rivne 4,14 / km²`, `Poltava 4,13 / km²`, `Halych 4,08 / km²`, `Gomel 4,08 / km²`, `Lviv 4,07 / km²`, `Kyiv 4 / km²`).
3. **Urban-Masked HYDE 3.5 `popc` Disaggregation (`loadUrbanMaskedHYDEPopcRaster`)**: Draws macro-population totals from `histmap/2.data_cleaning/landuse_HYDE/rasters_scaled_to_global/popc_<year>.png` (`0` to `1400 AD`) while masking out and IDW-inpainting modern/historical urban footprints (`uopp_2023AD > 10 km²` buffered by `1px`, `urbc > 0`, `stadester_urban > 0`, and `8x` isolated spike removal) following `population_c14bazAAR`.
4. **Cross-Frontier Conditioning & Two-Stage Dasymetric Frontier Blur (`loadRussianFrontierRaions`, `applyDasymetricFrontierBlend`)**: Incorporates `322` Russian and Crimean conditioning raions within `250 km` of the `BLR`/`UKR` border directly into the non-stationary Matérn ($\nu = 3/2$) covariance matrix and applies a two-stage $C^1$ raised-cosine macro-level match ($W = 5 \cdot \text{catchment\_px}$) plus a cross-border 2D dasymetric kernel blur ($B = 2 \cdot \text{catchment\_px}$) against `sites_IA_RAS`.

---

## 2. Sources.

All records are sourced exclusively from official state heritage information systems, academic archaeological repositories, radiocarbon databases, and GIS portals (no Wikipedia lists are used). Direct raion coverage spans `117` of `118` ADM2 raions in Belarus (`99,2%`) and `468` of `477` ADM2 raions in mainland Ukraine (`98,1%`). `43 437` Deduplicated Site-Epoch Records.

| Source Key | Institution / Repository | Endpoint / DOI | Deduplicated Site-Epoch Records |
| :--- | :--- | :--- | ---: |
| `UA_State_Register_ePamiatka` | Ministry of Culture of Ukraine — State Register of Immovable Monuments (`єПам'ятка` Arches GIS) | `https://arches.e-pamiatka.gov.ua/search/resources` | `27 498` |
| `DataGovUA_Kirovohrad_Register` | Ukrainian Open Data Portal (`data.gov.ua`) — Kirovohrad Oblast Archaeological Heritage Register | `https://data.gov.ua/dataset/72808b36-21b0-4f88-96a8-5785d999235c` | `3 365` |
| `BY_State_Register_Wikidata` | State List of Historical and Cultural Values of the Republic of Belarus (Archaeological Monuments cipher `...В...`) via Wikidata SPARQL | `https://query.wikidata.org/sparql` | `2 801` |
| `Mendeley_EENSR_2018` | NAS Ukraine Institute of Archaeology / SUNY Buffalo — Eastern European Neo-Eneolithic Sites Repository (`EENSR 1.0`, Harper & Diachenko 2018) | `https://doi.org/10.17632/f8rthxdtzv.1` | `2 762` |
| `OSM_Overpass_UKR` | OpenStreetMap Overpass API (`historic=archaeological_site`, `ISO3166-1=UA`, excluding Crimea) | `https://overpass-api.de/api/interpreter` | `2 023` |
| `ArcGIS_Atlas_Ukraine_KEF` | Taras Shevchenko National University of Kyiv — Ukrainian Archaeological Atlas ArcGIS FeatureServers (29 chronological layers) | `https://services8.arcgis.com/KEfMfAbvB81PuRGi/arcgis/rest/services/` | `1 002` |
| `DataGovUA_Sumy_Archaeology` | Sumy Regional State Administration (`data.gov.ua`) — Sumy Oblast Archaeological Heritage Register (18 raions) | `https://data.gov.ua/dataset/3bb48fb9-0907-4136-9f69-a33e09f5c002` | `968` |
| `OSM_Overpass_BLR` | OpenStreetMap Overpass API (`historic=archaeological_site`, `ISO3166-1=BY`) | `https://overpass-api.de/api/interpreter` | `961` |
| `UA_Wikidata_Archaeology` | Ukrainian Archaeological Sites, Hillforts and Kurgan Burials Knowledge Graph (`P17=Q212`) | `https://query.wikidata.org/sparql` | `607` |
| `Globustut_Belarus_Heritage` | Globus Tut Belarus Heritage Database (Hillforts, zamchishches, Boris stones, pagan sanctuaries) | `https://globustut.by/type_tn_archeo.htm` | `420` |
| `ArcGIS_Bilsk_Complex` | Bilsk Historical and Cultural Reserve — Bilsk Hillfort Archaeological Complex FeatureServers (`pos_komplex`, `pos_zakomplex`, `kurganu`) | `https://services-eu1.arcgis.com/bQvFcINKDMgrMaZw/arcgis/rest/services/` | `255` |
| `DataGovUA_Volyn_Archaeology` | Volyn Regional State Administration (`data.gov.ua`) — Newly Discovered Archaeological Monuments of Volyn Oblast | `https://data.gov.ua/dataset/89ad95fb-7984-49b0-a190-55f802dc91aa` | `194` |
| `Pleiades_Gazetteer` | NYU ISAW / Stoa Consortium — Pleiades Gazetteer of Ancient Places (Northern Pontic Greek Colonies & Chora) | `https://pleiades.stoa.org/downloads` | `186` |
| `Harvard_AADR_v66` | Harvard University / Reich Lab — Allen Ancient DNA Resource (`AADR v66.p1`) | `https://doi.org/10.7910/DVN/FFIDCW` | `109` |
| `Kiel_RADON_B` | Kiel University (`CAU Kiel`) — `RADON-B` Database of European Neolithic and Early Bronze Age `14C` Dates | `https://radon.ufg.uni-kiel.de/` | `101` |
| `KULeuven_14C_Palaeolithic_v33` | KU Leuven — Radiocarbon Palaeolithic Europe Database `v33` (Vermeersch 2026) | `https://ees.kuleuven.be/geography/projects/14c-palaeolithic/` | `77` |
| `PEOPLE3000_p3k14c` | PEOPLE 3000 Working Group — `p3k14c` Global Archaeological Radiocarbon Database | `https://github.com/people3k/p3k14c` | `69` |
| `Cologne_CalPal` | University of Cologne — `CalPal` Radiocarbon Database | `https://github.com/nevrome/calpal` | `30` |
| `UCL_EUROEVOL_Neolithic` | UCL Institute of Archaeology — `EUROEVOL` Cultural Evolution of Neolithic Europe Dataset | `https://github.com/c14bazAAR/c14bazAAR` | `6` |
| `Mendeley_Lower_Palaeolithic_2025` | NAS Ukraine Institute of Archaeology & Institute of Geography — Ukrainian Lower Palaeolithic GIS Shapefiles (Veklych & Stepanchuk 2025) | `https://doi.org/10.17632/dm4kr3ns3c.1` | `2` |
| `Mendeley_Harper_2021_Tripolye` | Tripolye Giant-Settlements Radiocarbon Chronology Dataset (Harper 2021; additional records merged with `EENSR 1.0`) | `https://doi.org/10.17632/pxdkp4t22k.1` | `1` |
| **Total** | **19 Genuine Institutional, State-Register, GIS & Academic Sources** | | **`43 437`** |

---

## 3. Chronological Breakdown Across the 12 OANMAP Epochs

| Period File | Epoch ID | Period Name (EN / RU) | Belarus (`BLR`) | Mainland Ukraine (`UKR`) | Total Site Records |
| :--- | :---: | :--- | ---: | ---: | ---: |
| `01_stone_age_e52.geojson` | `52` | Stone Age (`Каменный Век`) | `380` | `3 078` | `3 458` |
| `02_eneolithic_e13.geojson` | `13` | Eneolithic (`Энеолит`) | `0` | `4 211` | `4 211` |
| `03_palaeometal_e22.geojson` | `22` | Palaeometal Period (`Палеометалл`) | `139` | `873` | `1 012` |
| `04_early_metal_age_e21.geojson` | `21` | Early Metal Age (`Эпоха Раннего Металла`) | `139` | `271` | `410` |
| `05_bronze_age_e47.geojson` | `47` | Bronze Age (`Бронзовый Век`) | `139` | `6 989` | `7 128` |
| `06_iron_age_e36.geojson` | `36` | Iron Age (`Железный век`) | `538` | `4 775` | `5 313` |
| `07_classical_antiquity_e6.geojson` | `6` | Classical Antiquity (`Античное Время`) | `0` | `448` | `448` |
| `08_migration_period_e34.geojson` | `34` | Migration Period (`Эпоха Великого переселения народов`) | `26` | `2 117` | `2 143` |
| `09_middle_ages_e37.geojson` | `37` | Middle Ages (`Эпоха Средневековья`) | `1 977` | `3 055` | `5 032` |
| `10_early_modern_17_18c_e3.geojson` | `3` | Early Modern Period, 17th-18th c. (`Новое Время, 17-18 вв.`) | `200` | `253` | `453` |
| `11_modern_e18.geojson` | `18` | Contemporary Period (`Новейшее время`) | `9` | `18` | `27` |
| `12_unspecified_e_neg1.geojson` | `-1` | Unspecified Period (`Не указано`) | `649` | `13 153` | `13 802` |
| **Total (`00_all_periods.geojson`)** | | **All Periods Combined** | **`4 196`** | **`39 241`** | **`43 437`** |

---

## 4. Running the Pipeline

```bash
node histmap/1.data_raw/population_regional/POLARIS/kievan_rus/sites_belarus_ukraine/extract_belarus_ukraine_geojson.js
node histmap/1.data_raw/population_regional/POLARIS/kievan_rus/sites_belarus_ukraine/krige_sites_belarus_ukraine.js
```
