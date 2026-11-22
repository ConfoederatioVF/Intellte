---
title: "Studies on Population"
subtitle: "MANDALA: Mainland and Maritime South-East Asia Excluding West New Guinea, 10000BC-2026AD"
date: "21 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_mandala_macro_zones.png"
hero_caption: "Spatial domain, major river basins and principal urban centres of MANDALA across the eleven sovereign states of Mainland and Maritime South-East Asia excluding West New Guinea from 10000BC to 2026AD."
hero_label: "fig:hero-mandala"
bibliography: studies_on_population.bib
csl: _shared/template/crd-mla-numeric.csl
link-citations: true
output:
  pdf_document:
    latex_engine: xelatex
    template: _shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
header-includes:
  - \AtBeginDocument{\pretocmd{\abscontent}{\crdneedspace{135pt}}{}{}}
---



# Abstract

Reconstructing the long-run demographic geography of Mainland and Maritime South-East Asia requires integrating Palaeolithic cave sequences, Austronesian maritime dispersal chronologies, temple epigraphy, indigenous chronicles, colonial revenue registers and comprehensive twentieth- and twenty-first-century censuses. Global historical demographic compilations such as HYDE disaggregate national estimates onto 5-arcminute grids primarily through environmental suitability curves and backward projections of modern urban cores [@KleinGoldewijk2017]. Across South-East Asia, where population density repeatedly shifted among volcanic arcs, great mainland river deltas, maritime straits and upland swidden frontiers, top-down allocation distorts pre-modern habitation geography. MANDALA presents a bottom-up demographic and cartographic reconstruction spanning all eleven sovereign states of South-East Asia excluding Indonesian West New Guinea: Myanmar, Thailand, Laos, Cambodia, Vietnam, Malaysia, Singapore, Brunei, Indonesia (thirty-one provinces excluding Papua and Papua Barat), the Philippines and East Timor across 4,12M km² (4.116.183 km², 52.604 active 5-arcminute terrestrial cells) from 10000BC to 2026AD.

MANDALA synthesises 22 constituent research chapters grouped into five chronological-regional tiers, coupling 19.052 multi-repository archaeological observations (resolved into 7.599 composite site-complexes and 9.767 domain site-epochs across 744 HydroBASINS Asia and Australasia catchments) with 64.593 settlement-chapter records across 22 gazetteers (24.477 deduplicated modern enumerated settlements). Geostatistical interpolation employs a non-stationary Matérn ($\nu = 3/2$) kernel calibrated over geodesic Voronoi catchment lags ($\tau_1 = 1,50$, $\tau_2 = 2,78$, global calibrated $\tau_1 = 1,66$, $10/10$ active weighted least-squares covariate periods, zero administrative border cliffs). Across the pre-modern Holocene, regional population rose from 420k terminal Pleistocene foragers in 10000BC (0,1 persons/km²) to 1,75M in 4000BC, 4,2M in 2000BC, 8,5M in 500BC, 10,6M at 1AD, 19,2M in 1000AD during the classical Angkor-Pagan-Dai Viet-Kediri apogee, 26,5M in 1500AD, 29,5M at 1600AD during the Age of Commerce, and 48,5M by 1850AD. Under colonial census regimes and post-independence mortality transitions, combined population expanded from 83,7M in 1900AD to 175,9M in 1950AD, 360,4M in 1980AD and 698,5M by 2025-2026AD, led by Indonesia less West New Guinea (278,5M), the Philippines (114,8M), Vietnam (101,1M), Thailand (71,6M), Myanmar (54,5M) and Malaysia (34,2M).



# Background

Quantitative demographic reconstruction across South-East Asia confronts ecological, archival and cartographic complexities unmatched in temperate Eurasia. Over the past half-century, comparative macro-histories have relied heavily on continental syntheses by McEvedy and Jones (1978), Maddison (2001) and Reid (1988), supplemented spatially by the History Database of the Global Environment (HYDE 3.2) [@McEvedyJones1978; @Maddison2001; @Reid1988; @KleinGoldewijk2017]. Those landmark studies established broad macro-regional contours: McEvedy and Jones estimated roughly 300k inhabitants across South-East Asia in 10000BC, 7,5M at 1AD, 13,5M in 1000AD, 20,5M in 1500AD and 41M in 1850AD, while Reid reconstructed early modern seventeenth-century regional totals near 22M to 23M anchored on European travelogues, VOC shipping ledgers and Spanish tribute rolls [@McEvedyJones1978; @Reid1988].

When evaluated at 5-arcminute spatial resolution, however, top-down global allocations encounter four persistent structural difficulties in South-East Asia.

First, South-East Asia exhibits a stark ecological bifurcation between Mainland alluvial river corridors and Maritime volcanic and archipelagic landscapes [@Lieberman2003; @Boomgaard2007]. On the mainland, pre-modern population mass concentrated along the Dry Zone of the Irrawaddy (Pyu and Pagan Burma), the Red River Delta (Au Lac and Dai Viet), the Tonle Sap hydraulic basin (Funan, Chenla and Angkor) and the lower Chao Phraya plain (Dvaravati, Sukhothai and Ayutthaya), while the southern Irrawaddy and Mekong deltas remained sparsely settled marshlands until nineteenth-century canal reclamation [@Higham2014; @Lieberman2003]. Across the archipelago, volcanic andosols in Central and East Java, Bali and south-western Luzon supported densities an order of magnitude above the acidic peatlands and leached rainforest soils of Borneo, eastern Sumatra and upland Sulawesi [@Bellwood2017; @Ricklefs2008]. Back-projecting contemporary metropolitan populations such as Yangon, Bangkok, Ho Chi Minh City, Singapore or Kuala Lumpur into antiquity misallocates millions of pre-modern inhabitants into colonial-era deltaic ports and tin-mining towns while starving Pagan, Angkor, Mojokerto (Trowulan) and Palembang.

Second, pre-colonial South-East Asian statecraft followed galactic or mandala polities defined by shifting patronage networks rather than fixed linear borders [@Lieberman2003; @Owen2005]. Modern post-1945 national frontiers cut straight across historical demographic basins: the Mekong separates ethnically Lao and Isan Thai populations; the Borneo highlands divide Kalimantan from Sarawak, Sabah and Brunei; the Malay Straits divide Sumatra from Peninsular Malaysia and Singapore; and Timor is partitioned between Indonesian West Timor and sovereign East Timor. Excluding Indonesian West New Guinea (Papua and Papua Barat) from MANDALA preserves the Wallacean biogeographical and historiographical coherence of Maritime South-East Asia, placing Melanesian New Guinea within its proper Oceanic macro-region while retaining Maluku, Halmahera, Seram and the Aru Archipelago through 134,89°E.

Third, colonial expansion between 1511 and 1949 introduced radically asynchronous statistical regimes [@Owen2005; @Ricklefs2008]. Spanish *encomienda* and ecclesiastical *padrones* in the Philippines began enumerating lowland Luzon and the Visayas from the late sixteenth century, whereas Dutch VOC registers concentrated initially on Batavia, Ambon and Java's north coast (*Pasisir*) before expanding into Raffles's 1815 survey and the landmark 1930 *Volkstelling* of the Netherlands East Indies. British decennial censuses covered Lower Burma from 1872 and Upper Burma from 1891, alongside the Straits Settlements and Federated Malay States from 1871 to 1947. French Indo-China compiled uneven *cadastres* and fiscal head-tax rolls from 1862 to 1936, Rattanakosin Siam inaugurated modern nationwide censuses in 1911, and Portuguese Timor produced intermittent parish and administrative tallies through 1970.

Fourth, twentieth-century decolonisation and cold-war conflicts produced sharp demographic discontinuities rarely captured by smooth interpolation curves. The First and Second Indochina Wars (1945-1975), the Khmer Rouge regime in Cambodia (1975-1979), which caused severe urban depopulation and excess mortality, and the 1975-1999 Indonesian occupation of East Timor generated abrupt demographic contractions and forced urbanisation shocks alongside rapid post-1950 fertility-driven expansion across Indonesia, the Philippines, Thailand, Malaysia and Vietnam.

MANDALA resolves these challenges by integrating archaeological multi-repository evidence, regional historiographies and full-row national censuses into a unified 22-chapter spatial framework. This paper details the geostatistical architecture, validates the reconstructed rasters and gazetteers against comparative baselines and synthesises the demographic trajectory of South-East Asia from 10000BC to 2026AD.

# Methodology

## Spatial Scope, Hierarchical Masking and Boundary Exclusion

To maintain rigorous sub-regional accounting across shifting historical polities, MANDALA organises its 4.116.183 km² domain (52.604 active 5-arcminute pixels) into 22 constituent chapters grouped into five chronological-regional suites (Table 1 and Figure 1). Cartographic figures employ an upright Lambert Azimuthal Equal-Area projection centred at 7,5°N, 113,5°E for macro-regional maps and dynamically centred per chapter across each regional extent, preserving areal equivalence across equatorial archipelagos from northern Kachin State (28,5°N) to Rote and Timor (11°S) and from the Arakan coast (92,2°E) to the Aru Islands (134,9°E).

The exclusion of Indonesian West New Guinea is enforced geometrically at both vector and raster layers by excising Natural Earth Admin-1 polygons for Papua and Papua Barat prior to coastal buffering and HydroBASINS catchment intersection. Twenty micro-island anchors ensure that Singapore, Penang, Langkawi, Labuan, Brunei Bay, Ambon, Ternate, Tidore, Banda Neira, Bali, Lombok, Phuket, Phu Quoc, Cat Ba, Atauro and Cebu retain clean terrestrial pixel footprints at 5-arcminute resolution without oceanic bleed.

Hierarchical temporal masking operates across four precedence tiers. Tier 1 establishes the pan-regional prehistoric baseline from 10000BC to 500BC across eight physiographic zones spanning Sundaland, mainland river corridors, Wallacea and the Philippine archipelago. Tier 2 partitions pre-colonial antiquity and the early modern era into six overlapping civilisational spheres: early Burma (Pyu, Mon, Pagan, Ava and Toungoo to 1752AD), Funan-Chenla-Champa-Angkor and post-Angkor Cambodia (to 1862AD), early Vietnam and Dai Viet including *Nam Tien* southward expansion (to 1862AD), early Tai principalities, Sukhothai, Ayutthaya and Lan Xang (to 1769AD), maritime Hindu-Buddhist empires of Srivijaya, Sailendra, Mataram and Majapahit (to 1500AD), and the pre-colonial sultanates of Malacca, Aceh, Mataram, Brunei, Ternate, Tidore, Sulu and Mindanao alongside pre-Spanish Philippine polities (1200-1786AD).

Tier 3 maps the seven colonial and early modern territorial regimes from 1515 to 1975AD: Konbaung and British Burma (1752-1948), Rattanakosin Siam (1769-1945), French Indo-China (1862-1954), Dutch East Indies excluding West New Guinea (1602-1949), British Malaya, Singapore, North Borneo, Sarawak and Brunei (1786-1963), Spanish and American Philippines (1565-1946) and Portuguese Timor (1515-1975). Tier 4 compiles eight post-independence sovereign census suites (1945-2026AD), separating the Indochina and Vietnam Wars conflict regime (1945-1975) from post-1975 socialist reconstruction and modern censuses across Vietnam, Laos and Cambodia, alongside dedicated post-independence suites for Myanmar, Thailand, Indonesia (less Papua and Papua Barat), Malaysia-Singapore-Brunei, the Philippines and East Timor.

<figure class="crd-table-figure" id="tab:modules">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Constituent Chapter</th><th class="crd-th">Span</th><th class="crd-th">Gazetteer</th><th class="crd-th">Area (km²)</th><th class="crd-th">Population Range</th><th class="crd-th">Primary Evidentiary Substrata</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>01. Prehistoric South-East Asia</strong></td><td class="crd-td">10000BC-500BC</td><td class="crd-td">523</td><td class="crd-td">4.116.175</td><td class="crd-td">420k to 8,5M</td><td class="crd-td">Radiocarbon corpora, Hoabinhian/Toalean caves, Austronesian sites</td></tr>
<tr><td class="crd-td"><strong>02. Pyu, Mon and Pagan Burma</strong></td><td class="crd-td">500BC-1752AD</td><td class="crd-td">170</td><td class="crd-td">700.767</td><td class="crd-td">850k to 4,4M</td><td class="crd-td">Pyu walled cities, Pagan inscriptions, Konbaung sit-tans</td></tr>
<tr><td class="crd-td"><strong>03. Funan, Chenla, Champa and Khmer</strong></td><td class="crd-td">500BC-1862AD</td><td class="crd-td">156</td><td class="crd-td">243.324</td><td class="crd-td">1,1M to 1,15M</td><td class="crd-td">Angkor LiDAR surveys, Funan/Oc Eo excavations, Cham epigraphy</td></tr>
<tr><td class="crd-td"><strong>04. Early Vietnam and Dai Viet</strong></td><td class="crd-td">500BC-1862AD</td><td class="crd-td">290</td><td class="crd-td">318.161</td><td class="crd-td">1,05M to 10,4M</td><td class="crd-td">Han-Tang registers, Dai Viet household rolls, Nguyen land books</td></tr>
<tr><td class="crd-td"><strong>05. Early Tai, Sukhothai, Ayutthaya and Laos</strong></td><td class="crd-td">500BC-1769AD</td><td class="crd-td">850</td><td class="crd-td">783.386</td><td class="crd-td">950k to 5,1M</td><td class="crd-td">Sukhothai-Ayutthaya chronicles, Lan Na and Lan Xang registers</td></tr>
<tr><td class="crd-td"><strong>06. Maritime Hindu-Buddhist Empires</strong></td><td class="crd-td">500BC-1500AD</td><td class="crd-td">1.492</td><td class="crd-td">1.576.360</td><td class="crd-td">2,6M to 10,4M</td><td class="crd-td">Srivijaya/Palembang surveys, Central/East Java candi epigraphy</td></tr>
<tr><td class="crd-td"><strong>07. Pre-Colonial Sultanates and Philippines</strong></td><td class="crd-td">1200AD-1786AD</td><td class="crd-td">2.422</td><td class="crd-td">2.073.299</td><td class="crd-td">7,5M to 15,8M</td><td class="crd-td">Malacca-Aceh-Mataram chronicles, VOC shipping, pre-Hispanic archaeology</td></tr>
<tr><td class="crd-td"><strong>08. Konbaung and British Colonial Burma</strong></td><td class="crd-td">1752-1948</td><td class="crd-td">352</td><td class="crd-td">700.767</td><td class="crd-td">4,4M to 17,8M</td><td class="crd-td">Konbaung sit-tans, Imperial Census of Burma 1872-1941</td></tr>
<tr><td class="crd-td"><strong>09. Rattanakosin Siam</strong></td><td class="crd-td">1769-1945</td><td class="crd-td">3.287</td><td class="crd-td">547.158</td><td class="crd-td">4,15M to 17,1M</td><td class="crd-td">Corvee rolls, Bowring estimates, Siamese censuses 1911-1937</td></tr>
<tr><td class="crd-td"><strong>10. French Indo-China</strong></td><td class="crd-td">1862-1954</td><td class="crd-td">10.505</td><td class="crd-td">765.511</td><td class="crd-td">12,1M to 32,4M</td><td class="crd-td">French Annuaire Statistique, Cochinchina-Tonkin-Cambodia tallies</td></tr>
<tr><td class="crd-td"><strong>11. Dutch East Indies (Excl. W. New Guinea)</strong></td><td class="crd-td">1602-1949</td><td class="crd-td">2.573</td><td class="crd-td">1.515.318</td><td class="crd-td">9,4M to 76,8M</td><td class="crd-td">VOC Batavia registers, Raffles 1815, Volkstelling 1930</td></tr>
<tr><td class="crd-td"><strong>12. British Malaya, Singapore, Borneo and Brunei</strong></td><td class="crd-td">1786-1963</td><td class="crd-td">703</td><td class="crd-td">353.101</td><td class="crd-td">480k to 10,68M</td><td class="crd-td">Straits Settlements, FMS and Borneo censuses 1871-1960</td></tr>
<tr><td class="crd-td"><strong>13. Spanish and American Philippines</strong></td><td class="crd-td">1565-1946</td><td class="crd-td">3.793</td><td class="crd-td">300.894</td><td class="crd-td">1,15M to 18,43M</td><td class="crd-td">Spanish padrones 1591-1896, US Philippine censuses 1903-1939</td></tr>
<tr><td class="crd-td"><strong>14. Portuguese Timor</strong></td><td class="crd-td">1515-1975</td><td class="crd-td">154</td><td class="crd-td">16.917</td><td class="crd-td">160k to 660k</td><td class="crd-td">Portuguese parish rolls, colonial administrative censuses 1860-1970</td></tr>
<tr><td class="crd-td"><strong>15. Burma (Myanmar) after Independence</strong></td><td class="crd-td">1948-2026</td><td class="crd-td">478</td><td class="crd-td">700.767</td><td class="crd-td">17,8M to 54,5M</td><td class="crd-td">Myanmar censuses 1953, 1973, 1983, 2014 and township estimates</td></tr>
<tr><td class="crd-td"><strong>16. Thailand after 1945</strong></td><td class="crd-td">1945-2026</td><td class="crd-td">4.183</td><td class="crd-td">547.158</td><td class="crd-td">17,1M to 71,6M</td><td class="crd-td">Thailand NSO decennial censuses 1947-2020 and DOPA 2023 registries</td></tr>
<tr><td class="crd-td"><strong>17. Indochina and Vietnam Wars</strong></td><td class="crd-td">1945-1975</td><td class="crd-td">10.597</td><td class="crd-td">765.511</td><td class="crd-td">28,2M to 57,5M</td><td class="crd-td">DRV/RVN wartime tallies, Cambodia 1962 census, refugee estimates</td></tr>
<tr><td class="crd-td"><strong>18. Vietnam, Laos and Cambodia after 1975</strong></td><td class="crd-td">1975-2026</td><td class="crd-td">10.635</td><td class="crd-td">765.511</td><td class="crd-td">57,5M to 126,25M</td><td class="crd-td">Vietnam GSO 1979-2019, Cambodia NIS 1998-2019, Laos LSB 1985-2024</td></tr>
<tr><td class="crd-td"><strong>19. Indonesia after Independence (Excl. Papua)</strong></td><td class="crd-td">1949-2026</td><td class="crd-td">5.754</td><td class="crd-td">1.515.318</td><td class="crd-td">76,8M to 278,5M</td><td class="crd-td">BPS Indonesian censuses 1961-2020 and regency-city vital tables</td></tr>
<tr><td class="crd-td"><strong>20. Malaysia, Singapore and Brunei after Indep.</strong></td><td class="crd-td">1957-2026</td><td class="crd-td">882</td><td class="crd-td">353.101</td><td class="crd-td">8,93M to 40,7M</td><td class="crd-td">DOSM Malaysia 1970-2020, SingStat 1957-2025, DEPS Brunei 1960-2021</td></tr>
<tr><td class="crd-td"><strong>21. The Philippines after Independence</strong></td><td class="crd-td">1946-2026</td><td class="crd-td">4.014</td><td class="crd-td">300.894</td><td class="crd-td">18,43M to 114,8M</td><td class="crd-td">PSA Philippine full-LGU censuses 1948-2020 (1.642 municipalities)</td></tr>
<tr><td class="crd-td"><strong>22. East Timor (Timor-Leste) Post-1975</strong></td><td class="crd-td">1975-2026</td><td class="crd-td">780</td><td class="crd-td">16.917</td><td class="crd-td">660k to 1,41M</td><td class="crd-td">Indonesian Timor Timur 1980-1990, Timor-Leste INETL 2004-2022</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Architecture of the 22 constituent research modules of MANDALA, detailing chronological spans, enumerated settlement counts, territorial areas, headline population ranges and primary archival foundations.</figcaption>
</figure>

## Multi-Repository Archaeological Substrata and Non-Stationary Matérn Kriging

Standard global radiocarbon repositories contain sparse coverage across humid tropical South-East Asia: baseline global radiocarbon compilations retain only 8 deduplicated site entries within the entire 4,12M km² MANDALA mask. Relying on such an incomplete sample would collapse spatial interpolation into generic modern proxies. MANDALA therefore constructs a multi-repository archaeological substratum fusing ten complementary databases: OpenStreetMap historic and archaeological heritage extracts across twelve mainland and insular tiles (8.300 records), Wikidata national heritage registers including Indonesian *Cagar Budaya* monuments, Thai *prasat*, Burmese *pagoda* complexes and Philippine heritage sites (5.271 records), Yunnan and Guangxi northern frontier buffers (1.723 records), C14bazAAR deduplicated radiocarbon dates (1.394 records), p3k14c global radiocarbon records (1.380 records), Assam and Bengal western frontier buffers (513 records), Allen Ancient DNA Resource v66 samples (175 records), a curated scholarly South-East Asian archaeological catalogue covering 144 type-sites from Niah Cave and Gua Cha to Oc Eo, Angkor, Pagan, Co Loa, Borobudur and Trowulan, audited Zenodo archaeological corpora including Mini-NusaRC v3 and the Colonial Site Register of Java (118 records), and Pleiades ancient emporia (34 records).

In total, 19.052 raw observations deduplicate into 7.599 composite site-complexes generating 9.767 domain site-epochs across 531 domestic and 213 frontier HydroBASINS catchments (744 total hydrological units combining HydroBASINS Asia Level 5/6 north of 1,2°N with HydroBASINS Australasia Level 5/6 across insular Sundaland and Wallacea). Observations are stratified into ten chronological horizons spanning Palaeolithic Hoabinhian-Toalean (01), Neolithic Austronesian dispersal (02), Bronze Age Dong Son-Ban Chiang (03), Iron Age Sa Huynh-Early Pyu (04), Funan-Pyu-Dvaravati-Champa (05), Chenla-Srivijaya-Sailendra-Mataram (06), Angkor-Pagan-Dai Viet-Kediri (07), Majapahit-Sukhothai-Early Ayutthaya (08), Sultanates-Toungoo-Le-Nguyen-Iberian (09) and Late Pre-Colonial to Colonial Transition (10).

To map catchment counts onto continuous 5-arcminute habitation surfaces without modern administrative border artefacts, MANDALA calibrates a non-stationary Matérn ($\nu = 3/2$) kriging model over dimensionless geodesic Voronoi catchment lags [@Bellwood2017; @Higham2014]. Raw site counts per catchment are area-normalised, Freeman-Tukey variance-stabilised and regularised through local Empirical Bayes shrinkage (incorporating six-neighbour pooling on late urban-monument horizons 09 and 10 to suppress modern heritage-recording spikes). Weighted least-squares log-linear residual regression couples kriged archaeological fields with five biophysical covariates: river network proximity, coastal maritime access, elevation, terrain slope and natural biome carrying capacity. Across all 52.473 valid terrestrial cells, all ten chronological horizons retain active covariate regression ($10/10$ active periods, global calibrated $\tau_1 = 1,66$, short-range $\tau_1 = 1,50$, macro-ecological $\tau_2 = 2,78$, zero habitable-zone extinctions, uninhabited leakage ratio 0,001, and log-correlation $r = 0,674$ against global benchmark structure).

<figure class="crd-figure-block" id="fig:kriging-diagnostics">
<img class="crd-figure-img" src="/artefacts/project_mandala/1.0/fig2_mandala_kriging_diagnostics.png" alt="fig:kriging-diagnostics" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Multi-repository archaeological substrata and non-stationary Matérn $(\nu = 3/2)$ kriging diagnostics across MANDALA. Panels depict 744 Asia and Australasia HydroBASINS observation catchments (A), semivariogram fit (B), classical Angkor-Pagan-Kediri habitation intensity (C) and the 1600AD Age of Commerce dasymetric population surface (D).</figcaption>
</figure>

## Full-Row Census Ingestion, Historical Toponymy and Dasymetric Subtraction

Where historical censuses exist, selective truncation to the largest 50 or 100 cities introduces artificial rural inflation across secondary towns and provincial capitals. MANDALA therefore enforces exhaustive full-row enumeration across all eleven countries, integrating complete GeoNames populated-place dumps, official Humanitarian Data Exchange (HDX COD-PS) subnational census tables (928 Thai *amphoe*, 514 Indonesian *kabupaten* and *kota* strictly excluding Papua and Papua Barat, 148 Lao districts, 1.642 Philippine PSGC municipalities and cities, Myanmar townships and Timor-Leste *sucos*), and 55.677 multi-decade Wikidata P1082 municipal census rows strictly scrubbed of ecclesiastical dioceses, sovereign-state aggregates, island totals and Admin-1 provinces. Across all 22 chapters, this ingestion yields 64.593 settlement-chapter records resolving into 24.477 deduplicated modern enumerated settlements, all verified against four-wave asymptotic saturation ledgers with zero missing sub-masks and zero coordinate errors.

To guarantee chronological toponymic integrity for historical mapping, 900 major pre-colonial, colonial and modern cities underwent structured historical name-transition curation, recording authentic shifts such as Sunda Kelapa-Jayakarta-Batavia-Jakarta, Thang Long-Dong Kinh-Hanoi, Prey Nokor-Gia Dinh-Saigon-Ho Chi Minh City, Dagon-Rangoon-Yangon, Temasek-Singapura-Singapore, Jesselton-Kota Kinabalu, Ujung Pandang-Makassar, Buitenzorg-Bogor, Kutaraja-Banda Aceh, Moulmein-Mawlamyine, Tourane-Da Nang, Brunei Town-Bandar Seri Begawan and Dilly-Dili, combined with script-pure alternate names across 29.625 total MANDALA toponymy records. During dasymetric allocation at each historical year, catalogued urban settlements are placed directly on their host 5-arcminute cells and subtracted from regional totals before distributing the rural population envelope proportionally to the calibrated kriging surface.

# Testing and Validation

## Geostatistical Diagnostics and Border-Continuity Verification

Table 2 summarises the geostatistical calibration and spatial sharpness diagnostics across all ten archaeological horizons and 128 interpolated pre-modern population rasters.

<figure class="crd-table-figure" id="tab:kriging">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Archaeological Horizon</th><th class="crd-th">Chronology</th><th class="crd-th">Active Domestic</th><th class="crd-th">Site Mass</th><th class="crd-th">Short Scale ($\tau_1$)</th><th class="crd-th">Macro Scale ($\tau_2$)</th><th class="crd-th">WLS Covariates</th><th class="crd-th">Max Wall Run</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>01. Palaeolithic Hoabinhian-Toalean</strong></td><td class="crd-td">10000BC-3000BC</td><td class="crd-td">269/531</td><td class="crd-td">813,6</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>02. Neolithic Austronesian Dispersal</strong></td><td class="crd-td">3000BC-1500BC</td><td class="crd-td">196/531</td><td class="crd-td">181,1</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>03. Bronze Age Dong Son-Ban Chiang</strong></td><td class="crd-td">1500BC-500BC</td><td class="crd-td">151/531</td><td class="crd-td">278</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>04. Iron Age Sa Huynh-Early Pyu</strong></td><td class="crd-td">500BC-1AD</td><td class="crd-td">169/531</td><td class="crd-td">177,1</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>05. Funan-Pyu-Dvaravati-Champa</strong></td><td class="crd-td">1AD-550AD</td><td class="crd-td">329/531</td><td class="crd-td">469,3</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>06. Chenla-Srivijaya-Sailendra-Mataram</strong></td><td class="crd-td">550AD-950AD</td><td class="crd-td">331/531</td><td class="crd-td">724,9</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>07. Angkor-Pagan-Dai Viet-Kediri</strong></td><td class="crd-td">950AD-1300AD</td><td class="crd-td">347/531</td><td class="crd-td">1.101,2</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>08. Majapahit-Sukhothai-Early Ayutthaya</strong></td><td class="crd-td">1300AD-1500AD</td><td class="crd-td">364/531</td><td class="crd-td">768,5</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>09. Sultanates-Toungoo-Le-Nguyen-Iberian</strong></td><td class="crd-td">1500AD-1750AD</td><td class="crd-td">467/531</td><td class="crd-td">1.369</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
<tr><td class="crd-td"><strong>10. Late Pre-Colonial-Colonial Transition</strong></td><td class="crd-td">1750AD-1860AD</td><td class="crd-td">449/531</td><td class="crd-td">2.205,9</td><td class="crd-td">1,5</td><td class="crd-td">2,78</td><td class="crd-td">Active</td><td class="crd-td">3 px</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Archaeological catchment activation, weighted site mass, Matérn scale calibration and border-cliff diagnostics across all ten MANDALA kriging horizons.</figcaption>
</figure>

Three quantitative diagnostics verify the spatial fidelity of the MANDALA substrata. First, high-pass spatial detail audits on log-transformed kriged intensity confirm sharp fluvial, volcanic and littoral structure without isotropic Voronoi halos (mean 15x15 high-pass residual 0,155; mean 1-pixel gradient 0,1194; population benchmark high-pass detail 0,1568). Second, cross-frontier seam audits across all 128 interpolated rasters confirm a maximum contiguous gradient wall of 3 pixels, establishing smooth transitions across mainland borders (Myanmar-Thailand, Thailand-Laos-Cambodia, Vietnam-Cambodia) and Borneo frontiers (Kalimantan-Sarawak-Sabah-Brunei). Third, urban-core calibration verifies that dasymetric subtraction neither over-inflates ancient cores nor starves surrounding hinterlands (median urban-core ratio 1,102; 95th-percentile back-projection ratio 1,099).

## Comparative Macro-Regional Baselines: MANDALA versus McEvedy & Jones and HYDE 3.2

Table 3 and Figure 3 compare MANDALA's reconstructed macro-regional totals (excluding West New Guinea) against the classic historical compilations of McEvedy and Jones (1978), Reid (1988), Maddison (2001) and HYDE 3.2 [@McEvedyJones1978; @Reid1988; @Maddison2001; @KleinGoldewijk2017].

<figure class="crd-table-figure" id="tab:premodern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">MANDALA Synthesis</th><th class="crd-th">McEvedy &amp; Jones (1978)</th><th class="crd-th">HYDE 3.2 Baseline</th><th class="crd-th">Mean Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">420k</td><td class="crd-td">300k</td><td class="crd-td">340k</td><td class="crd-td">0,1/km²</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">950k</td><td class="crd-td">700k</td><td class="crd-td">820k</td><td class="crd-td">0,23/km²</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">1,75M</td><td class="crd-td">1,4M</td><td class="crd-td">1,55M</td><td class="crd-td">0,43/km²</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">4,2M</td><td class="crd-td">3M</td><td class="crd-td">3,5M</td><td class="crd-td">1,02/km²</td></tr>
<tr><td class="crd-td"><strong>500BC</strong></td><td class="crd-td">8,5M</td><td class="crd-td">6M</td><td class="crd-td">7,2M</td><td class="crd-td">2,06/km²</td></tr>
<tr><td class="crd-td"><strong>1AD</strong></td><td class="crd-td">10,6M</td><td class="crd-td">7,5M</td><td class="crd-td">9,1M</td><td class="crd-td">2,58/km²</td></tr>
<tr><td class="crd-td"><strong>500AD</strong></td><td class="crd-td">13,8M</td><td class="crd-td">10M</td><td class="crd-td">12,1M</td><td class="crd-td">3,35/km²</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">19,2M</td><td class="crd-td">13,5M</td><td class="crd-td">16,8M</td><td class="crd-td">4,66/km²</td></tr>
<tr><td class="crd-td"><strong>1350AD</strong></td><td class="crd-td">24,8M</td><td class="crd-td">18M</td><td class="crd-td">21,5M</td><td class="crd-td">6,02/km²</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">26,5M</td><td class="crd-td">20,5M</td><td class="crd-td">23,8M</td><td class="crd-td">6,44/km²</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">29,5M</td><td class="crd-td">23M</td><td class="crd-td">26,4M</td><td class="crd-td">7,17/km²</td></tr>
<tr><td class="crd-td"><strong>1750AD</strong></td><td class="crd-td">36,2M</td><td class="crd-td">30M</td><td class="crd-td">33,5M</td><td class="crd-td">8,79/km²</td></tr>
<tr><td class="crd-td"><strong>1850AD</strong></td><td class="crd-td">48,5M</td><td class="crd-td">41M</td><td class="crd-td">44,2M</td><td class="crd-td">11,78/km²</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Comparison of pre-modern macro-regional population totals across South-East Asia (excluding West New Guinea) between MANDALA, McEvedy and Jones (1978) and HYDE 3.2 from 10000BC to 1850AD.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:trajectories">
<img class="crd-figure-img" src="/artefacts/project_mandala/1.0/fig3_mandala_long_run_trajectories.png" alt="fig:trajectories" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Long-run demographic growth across Mainland and Maritime South-East Asia excluding West New Guinea from 10000BC to 2025AD. Panel A compares pre-modern MANDALA totals against McEvedy and Jones (1978); Panel B decomposes twentieth- and twenty-first-century expansion across sovereign states.</figcaption>
</figure>

MANDALA tracks the structural upward trajectory of earlier syntheses while raising pre-modern estimates by 18% to 35% relative to McEvedy and Jones across three critically revised epochs. First, during the Bronze and Iron Ages (2000BC-1AD), modern excavations in the Red River Delta (Dong Son), the Khorat Plateau (Ban Chiang and Ban Non Wat), coastal central Vietnam (Sa Huynh) and the Irrawaddy Dry Zone (Early Pyu walled centres at Beikthano and Halin) confirm substantially denser wet-rice and metallurgical communities than mid-twentieth-century scholars assumed [@Higham2014]. Second, during the classical charter-state climax (950-1300AD), airborne LiDAR mapping of Greater Angkor's 1.000 km² hydraulic cityscape, alongside revised assessments of Pagan, Dai Viet under the Ly and Tran dynasties and Kediri-Singhasari Java, lifts the 1000AD regional total to 19,2M versus 13,5M in McEvedy and Jones [@Lieberman2003; @Higham2014]. Third, during the seventeenth-century Age of Commerce (1600AD), MANDALA's 29,5M total incorporates newly reconstructed upland and outer-island baselines alongside Java's volcanic heartland, Dai Viet's southward frontier and Toungoo Burma, bridging Reid's conservative 22M coastal-centred figure with higher nineteenth-century census back-projections [@Reid1988; @Boomgaard2007].

# Results

## Prehistoric Dispersals, Sundaland Submergence and Early Agriculture (10000BC-500BC)

At the terminal Pleistocene (10000BC), post-glacial sea-level rise was actively flooding the Sunda Shelf, transforming a vast continental plain into the modern Malay Peninsula, Sumatra, Java, Borneo and the South China Sea [@Bellwood2017]. Across the 4,12M km² domain, mobile Hoabinhian foragers on the mainland and Toalean-Tabon-Niah cave populations in the islands totalled approximately 420k inhabitants (0,1 persons/km²). Rising Holocene sea levels stabilised near modern coastlines after 6000BC, concentrating estuarine shell-midden communities along the Straits of Malacca, northern Vietnam and eastern Sumatra as regional numbers reached 950k in 6000BC and 1,75M by 4000BC.

Between 3000BC and 1500BC, two transformative agricultural expansions reshaped the demographic map [@Bellwood2017; @Higham2014]. On the mainland, Austroasiatic-speaking rice cultivators spread southward down the Mekong, Chao Phraya, Red and Salween valleys, establishing sedentary moated villages such as Ban Non Wat and Khok Phanom Di. Across the archipelago, Austronesian-speaking seafarers expanding from Taiwan through northern Luzon (Cagayan Valley) into the Visayas, Sulawesi, Borneo, Java, Sumatra and Timor introduced domestic pigs, dogs, millet, taro and red-slipped pottery. By 2000BC, MANDALA's population reached 4,2M (1,02 persons/km²). Subsequent adoption of bronze metallurgy (Ban Chiang, Dong Son) and early iron tools lifted regional totals to 8,5M by 500BC (2,06 persons/km²), with early demographic clustering already visible in the Red River Delta (1,05M), the Irrawaddy basin (850k), the Mekong-Tonle Sap corridor (1,1M) and volcanic Java-Sumatra (2,6M).

## Classical Charter States and Maritime Empires (500BC-1500AD)

Between 500BC and 1500AD, South-East Asia experienced its classical demographic and urban efflorescence, raising regional population from 8,5M in 500BC to 10,6M at 1AD, 19,2M in 1000AD and 26,5M by 1500AD [@Lieberman2003; @Higham2014]. On the mainland, four major agrarian trajectories converged:

- **Pyu, Mon and Pagan Burma**: Walled Pyu cities at Beikthano, Halin and Sri Ksetra pioneered brick fortification and irrigation in the Irrawaddy Dry Zone before the Pagan Empire (849-1287AD) consolidated Upper Burma's Kyaukse rice granary and the Mon delta ports of Thaton and Bago. Burmese population expanded from 850k in 500BC to 2,6M at Pagan's thirteenth-century peak and 4,4M by the fall of Toungoo in 1752AD.
- **Funan, Chenla, Champa and the Khmer Empire**: Maritime Funan centred on Oc Eo and Angkor Borei linked Indian Ocean and South China Sea shipping before inland Chenla and the Angkorian Khmer Empire (802-1431AD) engineered monumental baray reservoirs around Yasodharapura (Angkor). At its twelfth-century climax, the Khmer-Champa sphere exceeded 2,8M inhabitants, with Greater Angkor supporting an extended agro-urban complex exceeding 400k-750k residents before fourteenth-century hydrological stress and Siamese warfare shifted Cambodian population southward toward Phnom Penh and Longvek, leaving 1,15M by 1862AD.
- **Early Vietnam and Dai Viet**: A millennium of Han through Tang imperial administration (111BC-938AD) entrenched wet-rice hydraulic embankments and Chinese fiscal registration in the Red River Delta. Following independence under Ngo Quyen and the Ly, Tran and Le dynasties, Dai Viet's population surged from 1,05M in 500BC to 4,2M in 1400AD and 10,4M by 1862AD as *Nam Tien* southward colonisation absorbed Champa and reclaimed the Mekong Delta.
- **Early Tai Principalities, Sukhothai, Ayutthaya and Lan Xang**: Tai-speaking migrants coalesced into irrigated upland *mueang* across Lan Na (Chiang Mai), Sukhothai and Lan Xang (Luang Prabang and Vientiane) before Ayutthaya (founded 1351AD) harnessed the lower Chao Phraya floodplain as a rice-exporting riverine metropolis reaching 150k-250k inhabitants prior to its 1767 sack, lifting Thai-Lao population from 950k in 500BC to 5,1M by 1769AD.

Across Maritime South-East Asia, dual thalassocratic and agrarian cores drove parallel expansion [@Ricklefs2008; @Boomgaard2007]. Srivijaya (seventh to eleventh centuries) controlled Malacca Strait trade from Palembang and Jambi across sparsely populated Sumatran river basins, whereas Sailendra and Mataram in Central Java, followed by Kediri, Singhasari and Majapahit (1293-c. 1500AD) in East Java's Brantas valley, sustained extraordinarily dense wet-rice (*sawah*) cultivation around Borobudur, Prambanan and the capital at Trowulan. Maritime Hindu-Buddhist territories rose from 2,6M in 500BC to 10,4M by 1500AD, with Java alone already accounting for roughly half of the archipelagic total.

## The Age of Commerce, Pre-Colonial Sultanates and Colonial Consolidation (1500AD-1949AD)

Between 1500 and 1850AD, maritime Islamisation, Chinese commercial diaspora growth and European chartered-company intervention reshaped the archipelago and mainland [@Reid1988; @Ricklefs2008; @Owen2005]. Cosmopolitan port-sultanates at Malacca (captured by Portugal in 1511), Aceh, Banten, Demak, Makassar (Gowa-Tallo), Brunei, Ternate, Tidore, Sulu and Maguindanao thrived alongside agrarian Islamic Mataram in Central Java, raising the pre-colonial sultanate and Philippine sphere from 7,5M in 1200AD to 15,8M by 1786AD.

Nineteenth-century colonial peace, infrastructural integration, smallpox vaccination and export-crop frontiers triggered the first sustained modern demographic acceleration across South-East Asia:

- **Dutch East Indies (Excl. West New Guinea)**: Under the VOC (1602-1799) and Netherlands East Indies state (1800-1949), Java's Cultivation System (*Cultuurstelsel*) and outer-island rubber, tin and tobacco estates drove archipelago population (excluding Papua) from 9,4M in 1602 to 23,5M in 1850, 38,5M in 1900, 60,4M in 1930 (*Volkstelling*) and 76,8M at the 1949 transfer of sovereignty [@Ricklefs2008].
- **Spanish and American Philippines**: Spanish *reducción* resettlement consolidated lowland barangays around Manila, Cebu, Iloilo and Vigan, lifting Philippine population from 1,15M in 1565 to 3,8M in 1850, 7,64M in the 1903 American census, 16M in 1939 and 18,43M at independence in 1946 [@Owen2005].
- **British Burma, Malaya, Singapore and Borneo**: Frontier reclamation of the Irrawaddy Delta into the world's largest rice-exporting zone lifted Burma from 4,4M in 1752 to 17,8M by 1948. Concurrently, tin mining, rubber plantations and entrepot trade at Singapore (founded 1819), Penang (1786), Kuala Lumpur (1857) and Kuching drew massive Chinese and Indian immigration, multiplying British Malaya, Singapore, North Borneo, Sarawak and Brunei more than twenty-fold from 480k in 1786 to 10,68M by 1963.
- **French Indo-China and Rattanakosin Siam**: Canal reclamation across the Mekong and Chao Phraya deltas transformed Cochinchina and central Siam into commercial rice granaries. French Indo-China rose from 12,1M in 1862 to 32,4M by 1954, while independent Rattanakosin Siam expanded from 4,15M in 1769 to 17,1M by 1945.
- **Portuguese Timor**: Isolated in eastern Wallacea, Portuguese Timor experienced slower agrarian growth from 160k in 1515 to 660k in 1975 prior to decolonisation crisis.

## Post-Independence Mortality Decline, Wartime Shocks and Modern Megacities (1945AD-2026AD)

Following 1945, public health campaigns, malaria eradication, antibiotics and Green Revolution double-cropped rice varieties halved infant mortality across South-East Asia before fertility declined after 1975 [@Owen2005]. Total MANDALA population quadrupled from 175,9M in 1950 to 698,5M in 2025-2026AD (Table 4). Yet this macro expansion concealed profound regional divergences.

<figure class="crd-table-figure" id="tab:modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sovereign Territory</th><th class="crd-th">1950</th><th class="crd-th">1980</th><th class="crd-th">2000</th><th class="crd-th">2025</th><th class="crd-th">Area (km²)</th><th class="crd-th">2025 Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Indonesia (Excl. W. New Guinea)</strong></td><td class="crd-td">78,2M</td><td class="crd-td">146,3M</td><td class="crd-td">204,1M</td><td class="crd-td">278,5M</td><td class="crd-td">1.515.318</td><td class="crd-td">183,8/km²</td></tr>
<tr><td class="crd-td"><strong>Philippines</strong></td><td class="crd-td">19,9M</td><td class="crd-td">48,1M</td><td class="crd-td">76,5M</td><td class="crd-td">114,8M</td><td class="crd-td">300.894</td><td class="crd-td">381,5/km²</td></tr>
<tr><td class="crd-td"><strong>Vietnam</strong></td><td class="crd-td">25M</td><td class="crd-td">53,7M</td><td class="crd-td">77,6M</td><td class="crd-td">101,1M</td><td class="crd-td">318.161</td><td class="crd-td">317,8/km²</td></tr>
<tr><td class="crd-td"><strong>Thailand</strong></td><td class="crd-td">19,6M</td><td class="crd-td">44,8M</td><td class="crd-td">60,9M</td><td class="crd-td">71,6M</td><td class="crd-td">547.158</td><td class="crd-td">130,9/km²</td></tr>
<tr><td class="crd-td"><strong>Myanmar</strong></td><td class="crd-td">18,3M</td><td class="crd-td">33,4M</td><td class="crd-td">46,1M</td><td class="crd-td">54,5M</td><td class="crd-td">700.767</td><td class="crd-td">77,8/km²</td></tr>
<tr><td class="crd-td"><strong>Malaysia</strong></td><td class="crd-td">6,1M</td><td class="crd-td">13,8M</td><td class="crd-td">23,3M</td><td class="crd-td">34,2M</td><td class="crd-td">330.345</td><td class="crd-td">103,5/km²</td></tr>
<tr><td class="crd-td"><strong>Cambodia</strong></td><td class="crd-td">4,3M</td><td class="crd-td">6,6M</td><td class="crd-td">12,1M</td><td class="crd-td">17,4M</td><td class="crd-td">181.035</td><td class="crd-td">96,1/km²</td></tr>
<tr><td class="crd-td"><strong>Laos</strong></td><td class="crd-td">1,7M</td><td class="crd-td">3,2M</td><td class="crd-td">5,3M</td><td class="crd-td">7,8M</td><td class="crd-td">236.800</td><td class="crd-td">32,9/km²</td></tr>
<tr><td class="crd-td"><strong>Singapore</strong></td><td class="crd-td">1M</td><td class="crd-td">2,4M</td><td class="crd-td">4M</td><td class="crd-td">6,1M</td><td class="crd-td">734</td><td class="crd-td">8.310,6/km²</td></tr>
<tr><td class="crd-td"><strong>East Timor (Timor-Leste)</strong></td><td class="crd-td">430k</td><td class="crd-td">560k</td><td class="crd-td">870k</td><td class="crd-td">1,41M</td><td class="crd-td">16.917</td><td class="crd-td">83,3/km²</td></tr>
<tr><td class="crd-td"><strong>Brunei</strong></td><td class="crd-td">48k</td><td class="crd-td">193k</td><td class="crd-td">333k</td><td class="crd-td">460k</td><td class="crd-td">5.765</td><td class="crd-td">79,8/km²</td></tr>
<tr><td class="crd-td"><strong>MANDALA Total (11 States)</strong></td><td class="crd-td">174,6M</td><td class="crd-td">353,1M</td><td class="crd-td">511,1M</td><td class="crd-td">687,9M</td><td class="crd-td">4.116.183</td><td class="crd-td">167,1/km²</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Post-independence sovereign population trajectories, land areas and contemporary densities across all eleven MANDALA states (strictly excluding Indonesian West New Guinea), 1950 to 2025AD.</figcaption>
</figure>

During the Indochina and Vietnam Wars (1945-1975), aerial bombardment, strategic hamlet relocations and combat inflicted over 3M fatalities across Vietnam, Laos and Cambodia while triggering massive refugee flight into Saigon, Phnom Penh and Vientiane. Immediately thereafter, Democratic Kampuchea (1975-1979) forcibly evacuated Phnom Penh and provincial towns, reducing Cambodian population sharply before post-1979 recovery raised the three Indochinese states to 126,25M by 2025. East Timor suffered a comparable demographic shock between 1975 and 1980 (contracting from 660k toward 560k) before rebounding to 1,41M by 2025.

Meanwhile, Thailand and Singapore completed rapid demographic transitions to sub-replacement fertility, whereas the Philippines (114,8M, 381,5 persons/km²) and Indonesia less Papua (278,5M, with Java exceeding 1.100 persons/km²) maintained rapid absolute additions. Contemporary urbanisation follows a classic Zipf rank-size scaling across all 24.477 deduplicated modern settlements ($\alpha = 1,01$, $R^2 = 0,97$ above 20k inhabitants; Figure 4), anchored by Ho Chi Minh City (14,56M), Jakarta (11,14M municipal core within the broader Jabodetabek conurbation), Hanoi (8,72M), Yangon (7M), Singapore (6,14M), Bangkok, Quezon City (3,08M), Can Tho (3,12M), Da Nang (2,82M), Bekasi (2,78M) and Hai Phong (2,73M).

## Regional Ecological Regimes: Mainland Alluvial Corridors versus Insular Volcanic Arcs

The long-run demographic divergence between Mainland and Maritime South-East Asia reflects persistent agro-ecological asymmetries documented across all 22 chapters [@Boomgaard2007; @Lieberman2003]. On the mainland, early state formation emerged along drier interior rain-shadow valleys where seasonal flooding could be regulated with modest earthworks: the Kyaukse and Minbu plains of Upper Burma, the Khorat and upper Chao Phraya basins of Thailand, and the gently sloping northern margin of the Tonle Sap in Cambodia. Only the Red River Delta achieved intensive dyked double-cropping during the first millennium AD, aided by centuries of Chinese hydraulic engineering. By contrast, the vast brackish tidal deltas of the lower Irrawaddy, lower Chao Phraya and lower Mekong remained lightly populated reed swamps until nineteenth-century British, Siamese and French canal programmes transformed them into export rice bowls.

Across the archipelago, soil fertility rather than river engineering determined demographic ceilings [@Ricklefs2008; @Bellwood2017]. Active Quaternary volcanoes across Central and East Java, Bali, Lombok and southern Luzon continuously replenished alluvial basins with basic volcanic ash (*andosols*), allowing terraced *sawah* wet-rice agriculture to support rural densities exceeding 400 to 900 inhabitants/km² even prior to modern fertilisers. Outside those volcanic arcs, tropical rainforest soils across Borneo (Kalimantan, Sarawak, Sabah and Brunei), eastern Sumatra, the Malay Peninsula and central Sulawesi weathered rapidly under heavy equatorial rainfall, confining pre-colonial settlements to narrow river-mouth entrepots such as Palembang, Jambi, Brunei, Banjarmasin and Makassar until tin mining, rubber estates, oil palm plantations and timber extraction reshaped outer-island frontiers in the nineteenth and twentieth centuries.

## Urban Primacy, Archipelagic Corridors and Historical Toponymy

Across South-East Asia, maritime connectivity and colonial port investment generated some of the most pronounced urban primacy structures in the developing world [@Owen2005]. Unlike pre-modern inland capitals (Pagan, Angkor, Sukhothai, Ayutthaya, Trowulan and Surakarta), modern primate metropolises grew at deep-water estuaries and straits where steamship lanes intersected rail and road hinterlands. Table 5 summarises the historical toponymic lineage and contemporary demographic scale of twelve leading South-East Asian urban corridors reconstructed in MANDALA.

<figure class="crd-table-figure" id="tab:toponymy">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Modern Canonical Name</th><th class="crd-th">Sovereign State</th><th class="crd-th">Pre-Colonial Toponym</th><th class="crd-th">Colonial / Early Modern Name</th><th class="crd-th">Contemporary Scale</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ho Chi Minh City</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">Prey Nokor / Gia Dinh</td><td class="crd-td">Saigon</td><td class="crd-td">14,56M</td></tr>
<tr><td class="crd-td"><strong>Jakarta</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Sunda Kelapa / Jayakarta</td><td class="crd-td">Batavia</td><td class="crd-td">11,14M</td></tr>
<tr><td class="crd-td"><strong>Hanoi</strong></td><td class="crd-td">Vietnam</td><td class="crd-td">Dai La / Thang Long</td><td class="crd-td">Hanoi (Tonkin)</td><td class="crd-td">8,72M</td></tr>
<tr><td class="crd-td"><strong>Yangon</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">Dagon / Okkalapa</td><td class="crd-td">Rangoon</td><td class="crd-td">7M</td></tr>
<tr><td class="crd-td"><strong>Singapore</strong></td><td class="crd-td">Singapore</td><td class="crd-td">Temasek / Singapura</td><td class="crd-td">Singapore (Straits)</td><td class="crd-td">6,14M</td></tr>
<tr><td class="crd-td"><strong>Bangkok</strong></td><td class="crd-td">Thailand</td><td class="crd-td">Bang Makok / Thonburi</td><td class="crd-td">Krung Thep / Bangkok</td><td class="crd-td">8,28M (metro)</td></tr>
<tr><td class="crd-td"><strong>Manila-Quezon City</strong></td><td class="crd-td">Philippines</td><td class="crd-td">Maynila / Tondo</td><td class="crd-td">Manila (Intramuros)</td><td class="crd-td">4,99M (core)</td></tr>
<tr><td class="crd-td"><strong>Surabaya</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Ujung Galuh / Curabhaya</td><td class="crd-td">Soerabaja</td><td class="crd-td">2,87M</td></tr>
<tr><td class="crd-td"><strong>Kuala Lumpur</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">Klang Confluence</td><td class="crd-td">Kuala Lumpur (FMS)</td><td class="crd-td">2,08M</td></tr>
<tr><td class="crd-td"><strong>Phnom Penh</strong></td><td class="crd-td">Cambodia</td><td class="crd-td">Chaktomuk</td><td class="crd-td">Phnom-Penh</td><td class="crd-td">1,7M</td></tr>
<tr><td class="crd-td"><strong>Makassar</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Gowa-Tallo / Mangkasara</td><td class="crd-td">Macassar / Ujung Pandang</td><td class="crd-td">1,62M</td></tr>
<tr><td class="crd-td"><strong>Bandar Seri Begawan</strong></td><td class="crd-td">Brunei</td><td class="crd-td">Kampong Ayer / Poni</td><td class="crd-td">Brunei Town</td><td class="crd-td">100k (urban)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Historical toponymic evolution and contemporary demographic scale across twelve major Mainland and Maritime South-East Asian urban centres.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:urban-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_mandala/1.0/fig4_mandala_urban_hierarchy.png" alt="fig:urban-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Contemporary South-East Asian urban rank-size distribution across 24.477 deduplicated MANDALA settlements (Panel A, Zipf exponent 1,01, R² = 0,97) and the twelve largest enumerated agglomerations (Panel B).</figcaption>
</figure>

# Limitations

Four structural uncertainties govern demographic reconstruction across Mainland and Maritime South-East Asia and should be weighed when applying MANDALA rasters:

1. **Tropical Taphonomy and Survey Bias**: Acidic lateritic soils, dense equatorial rainforests and aggressive alluvial sedimentation along the Irrawaddy, Chao Phraya, Mekong and Sumatran river deltas rapidly bury or dissolve organic timber settlements. Even with 19.052 multi-repository observations, archaeological site density remains systematically higher in open agricultural lowlands (Java, northern Vietnam, central Thailand) than in interior Kalimantan, northern Laos or the Annamite highlands.
2. **Pre-Colonial Fiscal Under-Enumeration**: Indigenous *sit-tans* (Burma), *cacah* household rolls (Java), Vietnamese village *dinh* lists and Siamese corvee registers systematically under-recorded women, children, monastic communities, debt-bondsmen and upland non-state peoples, requiring calibrated household-size multipliers (typically 4,5 to 6,5 persons per registered household) whose uncertainty widens before 1700AD.
3. **Colonial Administrative Heterogeneity**: Nineteenth- and early-twentieth-century censuses differed sharply in de facto versus de jure definitions, ethnic categorisations and outer-island coverage, particularly in Dutch Kalimantan and eastern Indonesia prior to 1930, highland Burma prior to 1931 and remote Mindanao prior to 1939.
4. **Conflict Mortality and Contemporary Vital Gaps**: Wartime casualties and forced internal displacements in Indochina (1945-1979), East Timor (1975-1999) and post-2021 Myanmar introduce wider demographic confidence bounds than in states with continuous civil registration such as Singapore, Malaysia and Thailand.

# Conclusion

MANDALA delivers an integrated, bottom-up spatial demographic history of Mainland and Maritime South-East Asia (strictly excluding Indonesian West New Guinea) from 10000BC to 2026AD. By unifying 22 regional monographs, 19.052 multi-repository archaeological observations across 744 Asia-Australasia HydroBASINS catchments, 64.593 full-row settlement-chapter records and 29.625 curated historical toponyms, the reconstruction resolves the long-run tension between mainland alluvial charter states, maritime volcanic agricultural cores and modern colonial-to-postcolonial deltaic megacities. Across twelve millennia, regional population expanded more than sixteen-hundred-fold from 420k terminal Pleistocene foragers to 687,9M-698,5M inhabitants across eleven sovereign states, establishing a transparent, reproducible benchmark for historical demography, land-use modelling and spatio-temporal cartography across South-East Asia.

# Sources
