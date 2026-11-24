---
title: "Post-Colonial Sudan, Ethiopia and the Horn"
subtitle: "Sudan, South Sudan, Ethiopia, Eritrea, Somalia and Djibouti Since 1956"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: postcolonial_horn_sudan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Seven jurisdictions, 71 first-level administrative divisions and 1.221 assessed settlements across Sudan, Ethiopia and the Horn between 1956AD and 2025AD."
hero_label: "fig:hero-horn-sudan"

header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between Sudanese independence in 1956AD and 2025AD, the nations of the Horn of Africa and the Nile valley experienced one of the sharpest demographic expansions of the modern world despite repeated famine, secession and civil war. Across a territorial domain of 4.398.845 km² spanning Ethiopia, Sudan, South Sudan, Somalia, Somaliland, Eritrea and Djibouti, NICETHI reconstructs an aggregate regional population that climbed from 23,08M inhabitants in 1956AD to 32,86M in 1972AD, 53,69M in 1983AD, 74,9M in 1993AD, 125,36M in 2009AD and 201,84M by 2025AD, reaching a mean end-epoch density of 45,88 persons/km². Expansion proceeded unevenly across highland rain-fed farming basins, irrigated Nile corridors and arid Somali pastoral steppes. Ethiopia absorbed the majority of absolute growth, rising nearly tenfold from 11,69M to 111,98M despite the 1972-1974 and 1983-1985 famines, Derg resettlement and the 2020-2022 Tigray war, while post-1993 Eritrea slowed and contracted after 2014AD under prolonged conscription and youth emigration. In Sudan and South Sudan, rapid metropolitan concentration in the Khartoum tri-city (9,62M agglomeration residents by 2025AD) and post-independence Juba (1,22M) collided with large-scale conflict displacement in Darfur, Kordofan, Bentiu and Khartoum itself after April 2023. In Somalia and Somaliland, state collapse after 1991AD and recurrent drought redirected pastoral households into Mogadishu, Hargeisa, Bosaso, Kismayo and Baidoa, while Djibouti concentrated most of its citizens inside a single Red Sea port. These regional series integrate 1.221 assessed settlements across 5.748 chronological observations, 12 sub-administrative census benchmark tables and mass-conserving disaggregation over 71 first-level administrative divisions.



# Background

## Post-Colonial State Formation, Famines and Highland-Lowland Contrasts

The demographic geography of north-eastern Africa since 1956AD divides sharply along elevation, rainfall and political borders. At the centre stands the Ethiopian massif, whose fertile volcanic plateaus above 1.500 m support dense plough cultivation of teff, barley and wheat in the north alongside intensive enset horticulture across Sidama, Wolayta and Gurage in the south [@CSA2010EthiopiaCensus; @Desta2019RuralUrban]. Encircling those uplands are the semi-arid Somali, Afar and Borana lowlands, the Nile clay plains of central Sudan, the Sudd floodplains of South Sudan and the Red Sea littoral of Eritrea and Djibouti [@ARCCH2020EthiopiaInventory; @SuarezTrujill2023HlaAlleles]. In 1956AD, when Sudan gained independence as the first sovereign post-colonial state in the study zone, rural livelihoods still predominated everywhere: fewer than one in ten residents across the seven territories lived in towns of 10k or more [@CBS2009SudanCensus; @OECD2024Africapolis].

Seven decades of political upheaval repeatedly reshuffled those rural and urban distributions. In Ethiopia, the 1972-1974 Wollo famine exposed the fragility of imperial land tenure, precipitating the 1974 revolution and the Derg military regime. A decade later, the 1983-1985 famine across Tigray, Wollo and northern Shewa killed hundreds of thousands and drove forced state resettlement of highland peasants into lowland Gambela, Benishangul-Gumuz and western Oromia [@Mberu2006InternalMigration; @Tegegne2016DeterminantsRural]. Following the overthrow of the Derg in May 1991, Ethiopia instituted ethnic federalism under the 1995 constitution, replacing imperial provinces with ethnically demarcated regional states whose urban capitals (Bahir Dar, Mekelle, Hawassa, Adama, Jijiga and Dire Dawa) drew rural migrants and public investment [@Mehari2017ChallengesAnd; @Abay2020CanUrbanization]. Between 2020AD and 2023AD, further constitutional splits carved Sidama (2020AD), South West Ethiopia Peoples' (2021AD), South Ethiopia (2023AD) and Central Ethiopia (2023AD) out of the former Southern Nations, Nationalities and Peoples' Region, even as the 2020-2022 war in Tigray and Amhara disrupted urban food supplies and displaced millions [@Abadi2018TheImpact; @Alemu2026SpatialDistribution].

Northern neighbour Eritrea followed a distinct trajectory. Federated with Ethiopia in 1952AD and annexed in 1962AD, Eritrea fought a 30-year independence war until 1991AD and formalised statehood in May 1993 [@Woldemicael2008RecentFertility]. Although early post-independence reconstruction stimulated return migration and fertility decline in Asmara, Massawa and Keren, the 1998-2000 Eritrean-Ethiopian border war and indefinite national military service triggered sustained out-migration of young adults toward Sudan, Ethiopia, Europe and the Gulf [@Woldemicael2008RecentFertility; @Bank2015EasternAfrica].

In Sudan, post-colonial population redistribution hinged on two forces: expansion of mechanised rain-fed and irrigated agriculture across Gezira, Sennar and Gedaref, and successive armed conflicts across the peripheries [@CBS2009SudanCensus; @Omer2014TheEffects]. The First Sudanese Civil War (1955-1972AD) and Second Sudanese Civil War (1983-2005AD) depopulated large stretches of Upper Nile, Bahr el Ghazal and Equatoria, driving southern refugees into Greater Khartoum's peri-urban belt alongside drought migrants from Kordofan and Darfur [@Omer2014TheEffects; @Bank2015EasternAfrica]. After 2003AD, rebellion and counter-insurgency in Darfur displaced over 2M residents into sprawling camps around Nyala, El Fasher and Geneina and across the border into eastern Chad [@Bank2015EasternAfrica]. Following South Sudan's secession in July 2011, renewed civil war in December 2013 forced hundreds of thousands into United Nations Protection of Civilians sites such as Bentiu and Malakal and into Uganda, Kenya and Ethiopia [@Tesfay2024LotQuality; @Bank2015EasternAfrica]. Most recently, the war that erupted in Khartoum in April 2023 shattered the tri-city metropolis, driving millions toward Gezira, River Nile, Red Sea (Port Sudan), Gedaref and neighbouring states.

Across the eastern Horn, Somalia united former Italian and British Somaliland in 1960AD, weathered the 1974-1975 Dabadheer drought and the 1977-1978 Ogaden war, and fractured after the collapse of Siad Barre's government in January 1991 [@Bank2022SomaliaUrban; @Hussein2024TheImpact]. While northern Somaliland established de facto autonomous institutions centred on Hargeisa, Berbera and Burao, southern and central Somalia experienced three decades of civil conflict, the 2011 famine and recurrent drought, converting Mogadishu, Baidoa, Kismayo and Bosaso into magnets for internally displaced pastoralists [@Bank2022SomaliaUrban; @Hussein2024TheImpact]. Tiny Djibouti, independent since June 1977, evolved simultaneously into a city-state port serving landlocked Ethiopian transit trade and foreign naval bases [@OECD2024Africapolis].

## Demographic Historiography, Censuses and Urban Surveys

Quantitative demography across the Horn relies on uneven national census coverage supplemented by demographic health surveys and remote-sensing urban registers. Sudan possesses the longest continuous post-colonial enumeration record, conducting national censuses in 1955-1956, 1973AD, 1983AD, 1993AD and April 2008 [@CBS2009SudanCensus]. However, the 1983AD and 1993AD counts omitted or estimated conflict zones in the south, and the 2008AD enumeration sparked political disputes in Darfur, South Kordofan and Southern Sudan ahead of the 2011 referendum [@CBS2009SudanCensus; @Omer2014TheEffects]. No national census has taken place in either Sudan or South Sudan since 2008AD, forcing post-2008 trajectories to rely on sub-national projections, humanitarian camp surveys [@Tesfay2024LotQuality] and satellite built-up mappings [@OECD2024Africapolis].

Ethiopia executed its first national census only in 1984AD under the Derg, repeating nationwide counts in 1994AD and 2007AD [@CSA2010EthiopiaCensus]. Both the 1984AD and 1994AD censuses required delayed enumeration or adjustments in nomadic Somali and Afar lowlands, while the planned 2017AD fourth census was repeatedly postponed owing to regional boundary disputes, pandemic disruption and the 2020-2022 northern conflict [@CSA2010EthiopiaCensus; @Alemu2026SpatialDistribution]. Consequently, recent Ethiopian urban demography draws on Central Statistical Agency intercensal municipal projections (such as the 2022AD series), Ethiopian Demographic and Health Surveys [@Yadeta2020SpatialPattern; @Asresie2022AssociationMaternal], micro-level fertility and migration studies [@Gurmu2014AgeFirst; @Desta2013FertilityAnd] and morphological agglomerations compiled by Africapolis [@OECD2024Africapolis; @Ayenachew2024NavigatingUrbanization].

Elsewhere in the region, Eritrea conducted no post-independence national census after its 1984AD enumeration as an Ethiopian province, relying instead on the 1995AD and 2002AD Demographic and Health Surveys and 2010AD population-health surveys [@Woldemicael2008RecentFertility]. Somalia conducted censuses in 1975AD and 1986-1987, neither fully published at fine spatial granularity, before the 2014AD Population Estimation Survey (PESS) by UNFPA provided a baseline across all 18 pre-war regions [@Bank2022SomaliaUrban; @Hussein2024TheImpact]. Djibouti completed national enumerations in 1983AD, 2009AD and 2024AD through INSTAD [@OECD2024Africapolis]. NICETHI harmonises these disparate national counts, historical gazetteers and urban agglomeration series into one continuous spatial accounting frame from 1956AD to 2025AD.

# Methodology

## Territorial Partition and Jurisdictional Accounting Domain

The study area covers 4.398.845 km² across 52.483 five-arcminute cells partitioned into 71 first-level administrative divisions across seven jurisdictions (Table \ref{tab:jurisdictions}). Within NICETHI, this chapter represents Regime 3 (1956AD to 2026AD), continuing directly from the colonial-era East African and Nile series. Boundaries derive from HDX COD-AB first-level administrative polygons for Ethiopia (incorporating the post-2020 Sidama, South West Ethiopia Peoples', South Ethiopia and Central Ethiopia regional divisions alongside the contested Tigray-Amhara boundary zone) and from geoBoundaries Admin-1 polygons for Sudan (19 units including Abyei PCA), South Sudan (10 states), Eritrea (6 zobas), Djibouti (3 grouped districts) and the 18 pre-war regions of Somalia partitioned between the Federal Republic of Somalia (13 units) and de facto Somaliland (5 units: Awdal, Woqooyi Galbeed, Togdheer, Sool and Sanaag) [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:jurisdictions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Admin-1 Units</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">Ledger Sites</th><th class="crd-th">Interior Sites</th><th class="crd-th">Share (%)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ethiopia</strong></td><td class="crd-td">15</td><td class="crd-td">1.129.025</td><td class="crd-td">13.314</td><td class="crd-td">591</td><td class="crd-td">600</td><td class="crd-td">25,7</td></tr>
<tr><td class="crd-td"><strong>Sudan</strong></td><td class="crd-td">19</td><td class="crd-td">1.858.238</td><td class="crd-td">22.552</td><td class="crd-td">364</td><td class="crd-td">374</td><td class="crd-td">42,2</td></tr>
<tr><td class="crd-td"><strong>South Sudan</strong></td><td class="crd-td">10</td><td class="crd-td">632.662</td><td class="crd-td">7.432</td><td class="crd-td">75</td><td class="crd-td">84</td><td class="crd-td">14,4</td></tr>
<tr><td class="crd-td"><strong>Somalia</strong></td><td class="crd-td">13</td><td class="crd-td">467.286</td><td class="crd-td">5.469</td><td class="crd-td">59</td><td class="crd-td">58</td><td class="crd-td">10,6</td></tr>
<tr><td class="crd-td"><strong>Somaliland</strong></td><td class="crd-td">5</td><td class="crd-td">169.922</td><td class="crd-td">2.008</td><td class="crd-td">12</td><td class="crd-td">13</td><td class="crd-td">3,9</td></tr>
<tr><td class="crd-td"><strong>Eritrea</strong></td><td class="crd-td">6</td><td class="crd-td">119.688</td><td class="crd-td">1.446</td><td class="crd-td">34</td><td class="crd-td">33</td><td class="crd-td">2,7</td></tr>
<tr><td class="crd-td"><strong>Djibouti</strong></td><td class="crd-td">3</td><td class="crd-td">22.024</td><td class="crd-td">262</td><td class="crd-td">26</td><td class="crd-td">26</td><td class="crd-td">0,5</td></tr>
<tr><td class="crd-td"><strong>Total Study Domain</strong></td><td class="crd-td">71</td><td class="crd-td">4.398.845</td><td class="crd-td">52.483</td><td class="crd-td">1.161</td><td class="crd-td">1.188</td><td class="crd-td">100</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Territorial partition of the Horn and Sudan study area across seven jurisdictions, showing Admin-1 counts, surface area, pixels and assessed settlements.</figcaption>
</figure>

Population totals are evaluated across 14 benchmark years from 1956AD to 2025AD, with six checkpoints tabulated in the main text: 1956AD (Sudanese independence), 1972AD (Addis Ababa Agreement and eve of the Wollo famine), 1983AD (eve of the 1983-1985 Ethiopian famine and Second Sudanese Civil War), 1993AD (Eritrean independence and post-Derg transition), 2009AD (post-2007 Ethiopian and 2008 Sudanese census synthesis) and 2025AD (end-epoch reconstruction incorporating 2020-2025 conflict displacement). Note that while 1.161 ledger settlements fall within the seven core jurisdictions, 60 additional cross-border settlements in Uganda (24), Chad (14), Kenya (11), Democratic Republic of the Congo (9) and Central African Republic (2) fall inside the perimeter buffer and refugee camp zones, yielding 1.221 total assessed settlements.

## Settlement Screening, Census Benchmarks and Spatial Disaggregation

Candidate urban and camp localities were compiled across four screening waves from CSA Ethiopia reports (1984-2022) [@CSA2010EthiopiaCensus], CBS Sudan censuses (1955-2008) [@CBS2009SudanCensus], INSTAD Djibouti enumerations (2009-2024), Eritrean NSO/UNSD tables [@Woldemicael2008RecentFertility], Somali UNFPA/municipal records [@Bank2022SomaliaUrban], OECD/SWAC Africapolis morphological series [@OECD2024Africapolis] and historical Ethiopian and Sudanese town chronicles [@ARCCH2020EthiopiaInventory; @Bank2015EasternAfrica]. From 1.315 candidate records, 94 duplicate alias records or out-of-epoch entries were excluded, retaining 1.221 assessed settlements across 5.748 chronological observations (Figure \ref{fig:hero-horn-sudan}).

To prevent double counting between municipal city-proper records and satellite-delineated urban corridors, each entry carries an explicit spatial scope: 1.211 city-proper settlements and 10 metropolitan agglomerations (Khartoum 2025 and 2008, Addis Ababa, Mogadishu, Hargeisa, Juba, Asmara, Djibouti, Mandera and Qarya 2). All 71 Admin-1 sub-regions contain interior assessed settlements (zero empty polygons), with a unique-peak ratio of 96,81% across the ledger.

Regional rural and urban totals are constrained downward by 12 sub-administrative census benchmark tables spanning Ethiopia (1982, 1993 and 2022), Sudan (1956, 1993 and 2018), South Sudan (2008 and 2017), Somalia (1961, 2005 and 2019) and Somaliland (2005), reconciled against 24 historical 1960 lineage units and contemporary geoBoundaries and HDX Admin-1 geometries [@Runfola2020GeoBoundaries]. Mass-conserving pycnophylactic redistribution allocates Admin-1 population totals across 5-arcminute grid cells weighted by HYDE and KK10 agricultural-pastoral suitability priors, fluvial Nile-Shebelle-Juba attraction, highland elevation gradients and assessed urban point footprints, avoiding arbitrary constant growth multipliers [@Yadeta2020SpatialPattern; @Asresie2022AssociationMaternal].

# Testing and Validation

## Sub-Administrative Census Benchmark Alignment

Cross-checking reconstructed regional totals against historical sub-administrative census tables tests whether mass-conserving disaggregation honours primary enumerations across changing provincial boundaries (Table \ref{tab:benchmarks}). In Sudan, the 1956AD national count across nine historical provinces (10,26M including southern provinces) aligns with the summed northern Sudan (7,49M) and South Sudan (2,78M) Admin-1 totals (10,27M combined), confirming partition consistency between Khartoum and Juba prior to secession [@CBS2009SudanCensus]. By 1993AD, raw unadjusted provincial tabulations across 24 northern and nominal southern units summed to 43,79M because war-zone estimates overlapped with displaced southern cohorts counted in northern cities, whereas the reconciled NICETHI regional sum separates 22,75M in Sudan from 5,21M in South Sudan (27,97M combined).

<figure class="crd-table-figure" id="tab:benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Polity</th><th class="crd-th">Year</th><th class="crd-th">Sub-Units</th><th class="crd-th">Enumerated Total</th><th class="crd-th">Primary Archive</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ethiopia</strong></td><td class="crd-td">1982AD</td><td class="crd-td">30</td><td class="crd-td">50,97M</td><td class="crd-td">Statoids official census archive</td></tr>
<tr><td class="crd-td"><strong>Ethiopia</strong></td><td class="crd-td">1993AD</td><td class="crd-td">29</td><td class="crd-td">51,83M</td><td class="crd-td">Statoids official census archive</td></tr>
<tr><td class="crd-td"><strong>Ethiopia</strong></td><td class="crd-td">2022AD</td><td class="crd-td">723</td><td class="crd-td">311,1M</td><td class="crd-td">CityPopulation official census mirror</td></tr>
<tr><td class="crd-td"><strong>Sudan</strong></td><td class="crd-td">1956AD</td><td class="crd-td">9</td><td class="crd-td">10,26M</td><td class="crd-td">Statoids official census archive</td></tr>
<tr><td class="crd-td"><strong>Sudan</strong></td><td class="crd-td">1993AD</td><td class="crd-td">24</td><td class="crd-td">43,79M</td><td class="crd-td">Statoids official census archive</td></tr>
<tr><td class="crd-td"><strong>Sudan</strong></td><td class="crd-td">2018AD</td><td class="crd-td">18</td><td class="crd-td">41,98M</td><td class="crd-td">CityPopulation official census mirror</td></tr>
<tr><td class="crd-td"><strong>South Sudan</strong></td><td class="crd-td">2008AD</td><td class="crd-td">96</td><td class="crd-td">21,43M</td><td class="crd-td">CityPopulation official census mirror</td></tr>
<tr><td class="crd-td"><strong>South Sudan</strong></td><td class="crd-td">2017AD</td><td class="crd-td">90</td><td class="crd-td">23,68M</td><td class="crd-td">CityPopulation official census mirror</td></tr>
<tr><td class="crd-td"><strong>Somalia</strong></td><td class="crd-td">1961AD</td><td class="crd-td">8</td><td class="crd-td">1,86M</td><td class="crd-td">Statoids official census archive</td></tr>
<tr><td class="crd-td"><strong>Somalia</strong></td><td class="crd-td">2005AD</td><td class="crd-td">93</td><td class="crd-td">22,51M</td><td class="crd-td">CityPopulation official census mirror</td></tr>
<tr><td class="crd-td"><strong>Somalia</strong></td><td class="crd-td">2019AD</td><td class="crd-td">93</td><td class="crd-td">46,88M</td><td class="crd-td">CityPopulation official census mirror</td></tr>
<tr><td class="crd-td"><strong>Somaliland</strong></td><td class="crd-td">2005AD</td><td class="crd-td">5</td><td class="crd-td">1,83M</td><td class="crd-td">CityPopulation official census mirror</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Twelve sub-administrative census and projection benchmark tables used to constrain post-colonial Admin-1 disaggregation.</figcaption>
</figure>

For Ethiopia, the 1982AD (30 provinces, 50,97M including Eritrea) and 1993AD (29 units, 51,83M excluding Eritrea) provincial tables reflect pre-1994 administrative projections before the 1994AD and 2007AD CSA censuses [@CSA2010EthiopiaCensus]. By contrast, the 2022AD woreda-level projection register (723 units, raw aggregate 311,1M) contains overlapping zonal, urban-district and special-woreda sub-totals in raw tabular scraping; pycnophylactic screening isolates non-overlapping Admin-1 mass to hold Ethiopia's 2020AD-2025AD trajectory strictly between 99,27M and 111,98M. Similarly, Somalia's 1961AD 8-province baseline (1,86M) and 2005AD/2019AD district mirrors anchor regional proportionality across Banadir, Lower Shebelle, Bay and Bari while preventing inflated urban-district overlaps [@Bank2022SomaliaUrban; @Hussein2024TheImpact].

## Rank-Size Calibration and Urban Concentration

Across all 1.221 assessed settlements, ordinary least-squares rank-size regression on the upper 180 urban peaks yields a Zipf exponent of $q = 1,02$ ($R^2 = 0,996$), while full-sample regression across all 1.221 sites yields $q = 1,02$ ($R^2 = 0,95$). When city-proper and overlapping agglomeration points are spatially deduplicated to 1.199 distinct peaks in Figure \ref{fig:rank-size}, the upper-tier slope sits at $q = 0,95$ ($R^2 = 1$). Unlike heavily polycentric pre-industrial landscapes, a post-colonial Zipf exponent near unity ($q \approx 1$) reflects strong national capital primacy paired with an extensive secondary tier of regional state capitals, Red Sea ports and agrarian market towns [@OECD2024Africapolis; @Abay2020CanUrbanization].

<figure class="crd-figure-block" id="fig:rank-size">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-horn-sudan/fig_03_rank_size.png" alt="fig:rank-size" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Settlement rank-size distribution across 1.199 spatially deduplicated peaks (q = 0,95, R² = 1) and the ten densest Admin-1 divisions in 2025AD.</figcaption>
</figure>

Panel B of Figure \ref{fig:rank-size} contrasts the ten densest Admin-1 divisions in 2025AD. Compact metropolitan and city-region territories sit at the top: Banadir in Somalia (5.659 persons/km²) and Addis Ababa (5.247 persons/km²), followed by an order-of-magnitude step down to densely farmed southern Ethiopian highlands and capital zones: Sidama (647 persons/km²), Harari (525 persons/km²), Khartoum State (497 persons/km²), Djibouti City and Arta (427 persons/km²), Central Ethiopia (368 persons/km²), Dire Dawa (247 persons/km²), Gezira (239 persons/km²) and Tigray (184 persons/km²) [@Asresie2022AssociationMaternal; @Yadeta2020SpatialPattern].

# Results

## Regional Trajectory Across Seven Decades (1956AD to 2025AD)

Between 1956AD and 2025AD, total population across the seven Horn and Sudan jurisdictions expanded nearly ninefold from 23,08M to 201,84M (Table \ref{tab:trajectory} and Figure \ref{fig:trends}). Growth accelerated sharply after 1972AD as mortality declined ahead of sustained fertility decline [@Gurmu2014AgeFirst; @Alemu2026SpatialDistribution]. Aggregate regional totals crossed 50M around 1983AD (53,69M), surpassed 100M in the late 1990s (102,49M at 1998AD), reached 125,36M by 2009AD and passed 201,84M in 2025AD. Across the same 69-year span, attested active urban settlements in the gazetteer rose from 54 in 1956AD to 154 in 1977AD, 456 in 1998AD and a peak of 1.180 in 2020AD before easing slightly to 1.095 in 2025AD as civil wars interrupted recent enumerations in Tigray and Khartoum (Figure \ref{fig:trends}, Panel B).

<figure class="crd-figure-block" id="fig:trends">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-horn-sudan/fig_02_trends.png" alt="fig:trends" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Regional and attested urban population trajectories, active settlement counts and five leading urban agglomerations from 1956AD to 2025AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">1956AD</th><th class="crd-th">1972AD</th><th class="crd-th">1983AD</th><th class="crd-th">1993AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ethiopia</strong></td><td class="crd-td">11,69M</td><td class="crd-td">14,39M</td><td class="crd-td">29,66M</td><td class="crd-td">40,42M</td><td class="crd-td">71,57M</td><td class="crd-td">111,98M</td></tr>
<tr><td class="crd-td"><strong>Sudan</strong></td><td class="crd-td">7,49M</td><td class="crd-td">11,04M</td><td class="crd-td">14,01M</td><td class="crd-td">22,75M</td><td class="crd-td">32,62M</td><td class="crd-td">51,95M</td></tr>
<tr><td class="crd-td"><strong>South Sudan</strong></td><td class="crd-td">2,78M</td><td class="crd-td">2,81M</td><td class="crd-td">4,28M</td><td class="crd-td">5,21M</td><td class="crd-td">8,59M</td><td class="crd-td">15,95M</td></tr>
<tr><td class="crd-td"><strong>Somalia</strong></td><td class="crd-td">571,6k</td><td class="crd-td">2,67M</td><td class="crd-td">3,56M</td><td class="crd-td">4,26M</td><td class="crd-td">6,54M</td><td class="crd-td">12,71M</td></tr>
<tr><td class="crd-td"><strong>Somaliland</strong></td><td class="crd-td">184,1k</td><td class="crd-td">1,54M</td><td class="crd-td">1,22M</td><td class="crd-td">1,16M</td><td class="crd-td">2,44M</td><td class="crd-td">6,07M</td></tr>
<tr><td class="crd-td"><strong>Eritrea</strong></td><td class="crd-td">338,2k</td><td class="crd-td">378,9k</td><td class="crd-td">897,2k</td><td class="crd-td">1M</td><td class="crd-td">2,8M</td><td class="crd-td">2,11M</td></tr>
<tr><td class="crd-td"><strong>Djibouti</strong></td><td class="crd-td">21,7k</td><td class="crd-td">31,5k</td><td class="crd-td">79,6k</td><td class="crd-td">82,6k</td><td class="crd-td">798,2k</td><td class="crd-td">1,06M</td></tr>
<tr><td class="crd-td"><strong>Total Study Domain</strong></td><td class="crd-td">23,08M</td><td class="crd-td">32,86M</td><td class="crd-td">53,69M</td><td class="crd-td">74,9M</td><td class="crd-td">125,36M</td><td class="crd-td">201,84M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Jurisdictional and total regional population across six benchmark years from 1956AD to 2025AD.</figcaption>
</figure>

## Ethiopia and Eritrea: Highland Growth, Famine and Federal Fragmentation

Ethiopia accounts for more than half of the region's total population throughout the post-colonial period, rising from 11,69M in 1956AD (50,7% of the study area) to 29,66M on the eve of the 1983-1985 famine, 40,42M in 1993AD, 71,57M in 2009AD and 111,98M (99,18 persons/km²) in 2025AD. Despite severe localised mortality during the 1972-1974 and 1983-1985 famines, high rural fertility in Oromia, Amhara and the southern highlands sustained rapid natural increase [@Desta2013FertilityAnd; @Desta2019RuralUrban; @Gurmu2014AgeFirst]. State-directed resettlement under the Derg shifted hundreds of thousands of farmers from Tigray and Amhara into western lowlands, lifting Benishangul-Gumuz from 149,5k in 1972AD to 468,6k by 1993AD and 1,33M in 2025AD, while Gambela grew from 22,1k to 561,8k [@Mberu2006InternalMigration; @Tegegne2016DeterminantsRural].

Under post-1991 ethnic federalism, urban growth radiated outward from Addis Ababa to regional capitals and transport corridors [@Abay2020CanUrbanization; @Mehari2017ChallengesAnd]. The Addis Ababa metropolitan agglomeration climbed from 541,7k in 1960AD to 1,8M in 1990AD, 2,99M in 2010AD and 4,89M by 2025AD (city proper reaching 3,86M in 2022AD), encroaching steadily into surrounding Oromia farming municipalities such as Burayu and Sebeta [@Ayenachew2024NavigatingUrbanization; @Shahir2026ElectricityTariff]. Across Oromia (45,56M in 2025AD) and Amhara (24,21M), industrialising centres led by Adama (609,4k), Bahir Dar (564,5k), Gondar, Dessie, Jimma and Shashemene expanded rapidly alongside the autonomous eastern rail hub of Dire Dawa [@Mehari2017ChallengesAnd; @CSA2010EthiopiaCensus]. In the southern highlands, high rural densities triggered administrative fragmentation into Sidama (4,14M at 647 persons/km²), South Ethiopia (7M), Central Ethiopia (5,61M) and South West Ethiopia (3,55M), where contiguous enset-belt urbanisation around Wolayta Sodo and Hawassa registers multi-million morphological corridors in Africapolis alongside municipal cores of 204,1k and 422,2k in 2022AD [@OECD2024Africapolis]. Farther north, Tigray reached 6,08M in 2025AD despite severe wartime displacement, disrupted remittances and food insecurity between 2020AD and 2022AD [@Abadi2018TheImpact; @Alemu2026SpatialDistribution].

Eritrea followed an opposite post-1993 curve. Rising from 338,2k in 1956AD to 1M at independence in 1993AD and peaking around 3,06M in 2014AD, Eritrea's resident population subsequently contracted to 2,11M (17,66 persons/km²) in 2025AD as sustained youth emigration and falling fertility hollowed out cohorts in Maekel (Asmara, 896k city estimate in 2018AD and 542,7k agglomeration in 2025AD), Debub, Anseba (Keren, 88,5k) and Northern Red Sea (Massawa) [@Woldemicael2008RecentFertility; @Bank2015EasternAfrica].

## Sudan and South Sudan: Tri-City Primacy, Secession and Conflict Displacement

Sudan expanded almost sevenfold from 7,49M in 1956AD to 14,01M in 1983AD, 22,75M in 1993AD, 32,62M following the 2008AD fifth census and 51,95M (27,96 persons/km²) by 2025AD [@CBS2009SudanCensus]. Growth concentrated heavily along the Nile confluence and the central agricultural belt. The Khartoum-Omdurman-Khartoum Bahri tri-city grew from 342,7k in 1960AD to 2,17M in 1990AD, 4,27M in the 2008AD census (comprising 1,85M in Omdurman, 1,41M in Khartoum and 1,01M in Khartoum Bahri) and 9,62M across the Greater Khartoum agglomeration by 2025AD, making Khartoum State (10,43M) the densest unit in Sudan [@CBS2009SudanCensus; @OECD2024Africapolis]. Adjacent irrigated Gezira reached 6,53M (239 persons/km²), anchored by Wad Madani.

Elsewhere in Sudan, conflict repeatedly reshaped provincial demography [@Omer2014TheEffects; @SuarezTrujill2023HlaAlleles]. In Darfur, armed conflict after 2003AD uprooted rural farming communities into peri-urban camp complexes across South Darfur (4,54M, led by Nyala at 685,3k), North Darfur (2,45M, El Fasher) and East, West and Central Darfur, while pushing refugees into eastern Chad camps such as Bredjing (56,7k) and Farchana (52,7k) [@Bank2015EasternAfrica]. After fighting broke out between the Sudanese Armed Forces and the Rapid Support Forces in April 2023, massive internal displacement surged northeastward out of Khartoum into Gedaref (2,88M, Al-Qadarif 582,3k), Kassala (3,2M, 574,2k), River Nile (1,86M) and Port Sudan on the Red Sea coast.

South Sudan experienced prolonged demographic depression during the First Civil War (1955-1972AD), remaining nearly flat between 2,78M in 1956AD and 2,81M in 1972AD before recovering to 5,21M in 1993AD, 8,59M following the 2008AD census and 15,95M (25,21 persons/km²) in 2025AD [@CBS2009SudanCensus]. Independence in July 2011 sparked rapid capital concentration in Juba (1,22M agglomeration in 2025AD, up from 43k in 1970AD and 230,2k city proper in 2008AD), alongside regional towns at Rumbek (644,2k), Yambio (364,3k), Wau (213,6k) and Aweil (172,9k). Yet the December 2013 civil war devastated Upper Nile (1,88M), Jonglei (2,49M) and Unity, crowding displaced households into Bentiu IDP camp [@Tesfay2024LotQuality] and cross-border Ugandan settlements such as Yumbe (333,3k) and Koboko (118,9k) [@Bank2015EasternAfrica].

## Somalia, Somaliland and Djibouti: Pastoral Mobility, IDP Urbanisation and Port Primacy

Across Somalia and Somaliland, semi-arid pastoral lowlands underwent an unprecedented urban shift after 1972AD [@Bank2022SomaliaUrban; @Hussein2024TheImpact]. In the 13 regions of the Federal Republic of Somalia, population rose from 571,6k in 1956AD to 2,67M in 1972AD, 4,26M following the 1991 state collapse, 6,54M in 2009AD and 12,71M (27,2 persons/km²) in 2025AD, calibrated against the 1975AD and 1986AD censuses and the 2014AD UNFPA PESS. Prolonged conflict and recurrent droughts (2011AD, 2017AD and 2022AD) uprooted pastoral and riverine agro-pastoral households into urban IDP settlements: Mogadishu's agglomeration grew from 111,8k in 1960AD to 1,65M city proper in 2014AD and 2,05M by 2025AD, packing Banadir to 5.659 persons/km², while Marka (499k), Kismayo (358k), Baidoa (347,4k), Gaalkacyo (183,3k), Beledweyne (176,8k), Garoowe (138k) and Bosaso absorbed hundreds of thousands of displaced residents [@Bank2022SomaliaUrban; @Hussein2024TheImpact].

In the five northern regions of de facto Somaliland, relative civic stability after 1991AD fostered steady commercial urbanisation centred on the Hargeisa-Berbera trade corridor [@Bank2022SomaliaUrban]. Population recovered from a war-depressed 1,16M in 1993AD (after the 1988AD bombing of Hargeisa) to 2,44M in 2009AD and 6,07M (35,71 persons/km²) in 2025AD, led by Hargeisa (1,36M agglomeration; 741k city proper in 2014AD), Berbera (374k), Burao (235k) and Borama (163,6k). Finally, Djibouti grew almost fiftyfold from 21,7k in 1956AD to 82,6k in 1993AD and 1,06M (48,35 persons/km²) in 2025AD, exhibiting extreme port-state primacy as Djibouti City reached 767,3k in the 2024AD INSTAD census (614,8k continuous agglomeration) while Ali-Sabieh (55,5k), Dikhil (40,3k), Obock (30k) and Tadjourah (26,6k) remained modest regional outposts [@OECD2024Africapolis].

<figure class="crd-table-figure" id="tab:top-centres">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Scope</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Peak Date</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Khartoum (Agglomeration)</strong></td><td class="crd-td">Sudan</td><td class="crd-td">Metro</td><td class="crd-td">1950-2025AD</td><td class="crd-td">9,62M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Addis Ababa (Agglomeration)</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">Metro</td><td class="crd-td">1950-2025AD</td><td class="crd-td">4,89M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm (Agglomeration)</strong></td><td class="crd-td">Sudan</td><td class="crd-td">Metro</td><td class="crd-td">2008AD</td><td class="crd-td">4,27M</td><td class="crd-td">2008AD</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Adis Abeba</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">City-Proper</td><td class="crd-td">1952-2022AD</td><td class="crd-td">3,86M</td><td class="crd-td">2022AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Sodo</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">City-Proper</td><td class="crd-td">1970-2025AD</td><td class="crd-td">3,7M</td><td class="crd-td">2025AD</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Awasa</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">City-Proper</td><td class="crd-td">1952-2025AD</td><td class="crd-td">3,18M</td><td class="crd-td">2025AD</td><td class="crd-td">13</td></tr>
<tr><td class="crd-td"><strong>Mogadishu (Agglomeration)</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Metro</td><td class="crd-td">1950-2025AD</td><td class="crd-td">2,05M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Umm Durmān</strong></td><td class="crd-td">Sudan</td><td class="crd-td">City-Proper</td><td class="crd-td">1955-2008AD</td><td class="crd-td">1,85M</td><td class="crd-td">2008AD</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">Somalia</td><td class="crd-td">City-Proper</td><td class="crd-td">1953-2014AD</td><td class="crd-td">1,65M</td><td class="crd-td">2014AD</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm</strong></td><td class="crd-td">Sudan</td><td class="crd-td">City-Proper</td><td class="crd-td">1955-2008AD</td><td class="crd-td">1,41M</td><td class="crd-td">2008AD</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>Hargeisa (Agglomeration)</strong></td><td class="crd-td">Somaliland</td><td class="crd-td">Metro</td><td class="crd-td">1950-2025AD</td><td class="crd-td">1,36M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Juba (Agglomeration)</strong></td><td class="crd-td">South Sudan</td><td class="crd-td">Metro</td><td class="crd-td">1950-2025AD</td><td class="crd-td">1,22M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm Baḥrī</strong></td><td class="crd-td">Sudan</td><td class="crd-td">City-Proper</td><td class="crd-td">1955-2008AD</td><td class="crd-td">1,01M</td><td class="crd-td">2008AD</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">City-Proper</td><td class="crd-td">1950-2025AD</td><td class="crd-td">1,01M</td><td class="crd-td">2025AD</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Āsmera</strong></td><td class="crd-td">Eritrea</td><td class="crd-td">City-Proper</td><td class="crd-td">1952-2018AD</td><td class="crd-td">896k</td><td class="crd-td">2018AD</td><td class="crd-td">4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Fifteen largest individually assessed urban centres and metropolitan agglomerations in Sudan, Ethiopia and the Horn (1950AD to 2025AD).</figcaption>
</figure>

# Limitations

Four structural constraints bound these demographic series. First, official census coverage across the Horn suffers from multi-decade hiatuses: Eritrea has conducted no national census since 1984AD, Somalia none since 1986AD (relying on the 2014AD UNFPA PESS), Ethiopia none since 2007AD and Sudan and South Sudan none since 2008AD [@CSA2010EthiopiaCensus; @CBS2009SudanCensus; @Woldemicael2008RecentFertility]. Intercensal and post-2008 figures therefore carry higher uncertainty (roughly 10% to 25% at the Admin-1 scale, and wider in pastoral lowlands of Somali Region, Afar, Jonglei and Somalia) than mid-twentieth-century census years [@Bank2022SomaliaUrban; @Alemu2026SpatialDistribution].

Second, morphological urban footprints from Africapolis diverge sharply from municipal city-proper boundaries in dense rural-urban agricultural corridors [@OECD2024Africapolis; @Ayenachew2024NavigatingUrbanization]. In southern Ethiopia's enset belt, contiguous built-up homestead polygons merge towns and dense peri-urban farms around Wolayta Sodo (204,1k municipal estimate in 2022AD vs 3,7M morphological corridor in 2025AD) and Hawassa (422,2k municipal vs 3,18M corridor), as well as around Harar (*Harare*, 1,01M), creating step transitions between municipal census years and satellite agglomeration years visible in Figure \ref{fig:trends} (Panel C).

Third, rapid wartime displacement after November 2020 in northern Ethiopia and April 2023 in Sudan outpaces five-year benchmark intervals [@Abadi2018TheImpact; @Tesfay2024LotQuality]. While the 2025AD series incorporates documented movements out of Khartoum into Gezira, Gedaref, River Nile and Red Sea alongside Tigray and Bentiu disruptions, active conflict renders contemporary sub-national totals provisional until new enumerations occur.

Fourth, 60 of the 1.221 ledger settlements lie in peripheral cross-border zones of Uganda (24), Chad (14), Kenya (11), Democratic Republic of the Congo (9) and Central African Republic (2), reflecting refugee camp clusters (such as Bredjing, Farchana and Yumbe) and shared Somali-Oromo-Nilotic border towns (such as Mandera and Moyale) [@Bank2015EasternAfrica]. These frontier settlements anchor boundary continuity without inflating the seven core national Admin-1 totals.

# Conclusion

Between 1956AD and 2025AD, post-colonial Sudan, Ethiopia and the Horn expanded nearly ninefold from 23,08M to 201,84M inhabitants across 4.398.845 km². Rather than a smooth national transition, demographic growth unfolded through stark sub-regional contrasts: sustained highland peasant multiplication and regional-capital growth in Ethiopia despite devastating famines and recent civil war; post-2014 contraction in Eritrea under military conscription and emigration; tri-city metropolitan primacy in Khartoum colliding with Darfur and 2023AD civil war displacement; delayed post-war recovery and post-2011 urbanisation in South Sudan; drought-and-conflict IDP concentration across Somali cities; and near-total city-state primacy in Djibouti. Integrating 1.221 assessed settlements, 12 sub-administrative benchmark tables and 71 first-level administrative divisions, NICETHI provides a continuous quantitative synthesis of modern Horn and Nile population geography.

# Appendix

## Sub-Regional Population Series Across 71 First-Level Divisions

Table \ref{tab:appendix-pop} reports the full population series across all 71 Admin-1 divisions in Sudan, Ethiopia, South Sudan, Somalia, Somaliland, Eritrea and Djibouti at six post-colonial benchmarks from 1956AD to 2025AD. Table \ref{tab:appendix-density} documents surface area, 2025AD population density (persons per km²) and interior assessed settlement counts per division.

<figure class="crd-table-figure" id="tab:appendix-pop">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Admin-1 Division</th><th class="crd-th">1956AD</th><th class="crd-th">1972AD</th><th class="crd-th">1983AD</th><th class="crd-th">1993AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern (SDN)</strong></td><td class="crd-td">247,7k</td><td class="crd-td">254,8k</td><td class="crd-td">433,4k</td><td class="crd-td">1,29M</td><td class="crd-td">681,8k</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>North Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">250,7k</td><td class="crd-td">331,2k</td><td class="crd-td">279,5k</td><td class="crd-td">518,5k</td><td class="crd-td">2,11M</td><td class="crd-td">2,45M</td></tr>
<tr><td class="crd-td"><strong>Oromia (ETH)</strong></td><td class="crd-td">4,19M</td><td class="crd-td">5,17M</td><td class="crd-td">11,11M</td><td class="crd-td">15,63M</td><td class="crd-td">30,26M</td><td class="crd-td">45,56M</td></tr>
<tr><td class="crd-td"><strong>Somali (ETH)</strong></td><td class="crd-td">665,8k</td><td class="crd-td">805,6k</td><td class="crd-td">1,68M</td><td class="crd-td">2,2M</td><td class="crd-td">4,78M</td><td class="crd-td">7,09M</td></tr>
<tr><td class="crd-td"><strong>Red Sea (SDN)</strong></td><td class="crd-td">119,4k</td><td class="crd-td">116k</td><td class="crd-td">695,9k</td><td class="crd-td">919,4k</td><td class="crd-td">1,44M</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>North Kordofan (SDN) [Regime III Kordofan Conflict]</strong></td><td class="crd-td">648k</td><td class="crd-td">800,2k</td><td class="crd-td">996,5k</td><td class="crd-td">1,33M</td><td class="crd-td">2,92M</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Amhara (ETH)</strong></td><td class="crd-td">3,39M</td><td class="crd-td">4,18M</td><td class="crd-td">8,15M</td><td class="crd-td">10,35M</td><td class="crd-td">18,02M</td><td class="crd-td">24,21M</td></tr>
<tr><td class="crd-td"><strong>River Nile (SDN)</strong></td><td class="crd-td">625,3k</td><td class="crd-td">660,5k</td><td class="crd-td">614,8k</td><td class="crd-td">781,6k</td><td class="crd-td">1,12M</td><td class="crd-td">1,86M</td></tr>
<tr><td class="crd-td"><strong>Jonglei (SSD) [Regime III Conflict/Displacement]</strong></td><td class="crd-td">397,2k</td><td class="crd-td">326,5k</td><td class="crd-td">316,2k</td><td class="crd-td">375,8k</td><td class="crd-td">1,41M</td><td class="crd-td">2,49M</td></tr>
<tr><td class="crd-td"><strong>West Kordofan (SDN) [Regime III Kordofan Conflict]</strong></td><td class="crd-td">657k</td><td class="crd-td">776,9k</td><td class="crd-td">668,3k</td><td class="crd-td">637,8k</td><td class="crd-td">1,45M</td><td class="crd-td">2,05M</td></tr>
<tr><td class="crd-td"><strong>Afar (ETH)</strong></td><td class="crd-td">262,8k</td><td class="crd-td">323k</td><td class="crd-td">623,6k</td><td class="crd-td">806,8k</td><td class="crd-td">1,52M</td><td class="crd-td">2,26M</td></tr>
<tr><td class="crd-td"><strong>Western Bahr el Ghazal (SSD)</strong></td><td class="crd-td">46,4k</td><td class="crd-td">45,8k</td><td class="crd-td">105,5k</td><td class="crd-td">162,8k</td><td class="crd-td">346,7k</td><td class="crd-td">641,9k</td></tr>
<tr><td class="crd-td"><strong>South Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">349,1k</td><td class="crd-td">502,8k</td><td class="crd-td">1,2M</td><td class="crd-td">1,47M</td><td class="crd-td">2,85M</td><td class="crd-td">4,54M</td></tr>
<tr><td class="crd-td"><strong>South Kordofan (SDN) [Regime III Kordofan Conflict]</strong></td><td class="crd-td">457k</td><td class="crd-td">499,5k</td><td class="crd-td">437,3k</td><td class="crd-td">365,8k</td><td class="crd-td">1,41M</td><td class="crd-td">1,7M</td></tr>
<tr><td class="crd-td"><strong>Western Equatoria (SSD)</strong></td><td class="crd-td">289,2k</td><td class="crd-td">238,5k</td><td class="crd-td">1,05M</td><td class="crd-td">1,05M</td><td class="crd-td">637,2k</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Upper Nile (SSD)</strong></td><td class="crd-td">288,5k</td><td class="crd-td">247,4k</td><td class="crd-td">501,7k</td><td class="crd-td">808,7k</td><td class="crd-td">1M</td><td class="crd-td">1,88M</td></tr>
<tr><td class="crd-td"><strong>Eastern Equatoria (SSD)</strong></td><td class="crd-td">115,3k</td><td class="crd-td">50,8k</td><td class="crd-td">53,7k</td><td class="crd-td">79,8k</td><td class="crd-td">946,5k</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>Bari (SOM)</strong></td><td class="crd-td">18,2k</td><td class="crd-td">205k</td><td class="crd-td">219,9k</td><td class="crd-td">230,2k</td><td class="crd-td">475,4k</td><td class="crd-td">1,17M</td></tr>
<tr><td class="crd-td"><strong>Gedaref (SDN)</strong></td><td class="crd-td">467,7k</td><td class="crd-td">839,2k</td><td class="crd-td">819,8k</td><td class="crd-td">642k</td><td class="crd-td">1,34M</td><td class="crd-td">2,88M</td></tr>
<tr><td class="crd-td"><strong>Mudug (SOM)</strong></td><td class="crd-td">51,8k</td><td class="crd-td">222,8k</td><td class="crd-td">316,3k</td><td class="crd-td">334,7k</td><td class="crd-td">481,4k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Sanaag (SOL)</strong></td><td class="crd-td">23k</td><td class="crd-td">209,4k</td><td class="crd-td">218,5k</td><td class="crd-td">171,2k</td><td class="crd-td">368,7k</td><td class="crd-td">620,2k</td></tr>
<tr><td class="crd-td"><strong>East Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">186,6k</td><td class="crd-td">275,5k</td><td class="crd-td">573,6k</td><td class="crd-td">684,2k</td><td class="crd-td">1,24M</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>Benishangul-Gumuz (ETH)</strong></td><td class="crd-td">131,5k</td><td class="crd-td">149,5k</td><td class="crd-td">345,1k</td><td class="crd-td">468,6k</td><td class="crd-td">830,2k</td><td class="crd-td">1,33M</td></tr>
<tr><td class="crd-td"><strong>Galgaduud (SOM)</strong></td><td class="crd-td">71,8k</td><td class="crd-td">290k</td><td class="crd-td">244,2k</td><td class="crd-td">209,2k</td><td class="crd-td">420,6k</td><td class="crd-td">722k</td></tr>
<tr><td class="crd-td"><strong>Kassala (SDN)</strong></td><td class="crd-td">352,3k</td><td class="crd-td">498,5k</td><td class="crd-td">689k</td><td class="crd-td">588,7k</td><td class="crd-td">1,85M</td><td class="crd-td">3,2M</td></tr>
<tr><td class="crd-td"><strong>South Ethiopia (ETH)</strong></td><td class="crd-td">670,3k</td><td class="crd-td">786,8k</td><td class="crd-td">1,66M</td><td class="crd-td">2,29M</td><td class="crd-td">3,04M</td><td class="crd-td">7M</td></tr>
<tr><td class="crd-td"><strong>Lower Juba (SOM)</strong></td><td class="crd-td">19,2k</td><td class="crd-td">262,4k</td><td class="crd-td">275,9k</td><td class="crd-td">288,8k</td><td class="crd-td">428,5k</td><td class="crd-td">794,7k</td></tr>
<tr><td class="crd-td"><strong>Gedo (SOM)</strong></td><td class="crd-td">46,7k</td><td class="crd-td">194,8k</td><td class="crd-td">252,1k</td><td class="crd-td">318,8k</td><td class="crd-td">398,8k</td><td class="crd-td">659,1k</td></tr>
<tr><td class="crd-td"><strong>Bay (SOM)</strong></td><td class="crd-td">78,4k</td><td class="crd-td">371,5k</td><td class="crd-td">485k</td><td class="crd-td">618,1k</td><td class="crd-td">691,7k</td><td class="crd-td">1,3M</td></tr>
<tr><td class="crd-td"><strong>Lakes (SSD)</strong></td><td class="crd-td">152,2k</td><td class="crd-td">152,2k</td><td class="crd-td">258,9k</td><td class="crd-td">262,2k</td><td class="crd-td">728,5k</td><td class="crd-td">1,43M</td></tr>
<tr><td class="crd-td"><strong>Central Equatoria (SSD)</strong></td><td class="crd-td">497,6k</td><td class="crd-td">449,5k</td><td class="crd-td">304,5k</td><td class="crd-td">278,3k</td><td class="crd-td">1,15M</td><td class="crd-td">2,13M</td></tr>
<tr><td class="crd-td"><strong>Sennar (SDN)</strong></td><td class="crd-td">303,4k</td><td class="crd-td">469,8k</td><td class="crd-td">735,6k</td><td class="crd-td">3,84M</td><td class="crd-td">1,29M</td><td class="crd-td">2,5M</td></tr>
<tr><td class="crd-td"><strong>South West Ethiopia (ETH)</strong></td><td class="crd-td">369,4k</td><td class="crd-td">442,1k</td><td class="crd-td">928,1k</td><td class="crd-td">1,31M</td><td class="crd-td">1,5M</td><td class="crd-td">3,55M</td></tr>
<tr><td class="crd-td"><strong>White Nile (SDN)</strong></td><td class="crd-td">345,4k</td><td class="crd-td">485,3k</td><td class="crd-td">933,1k</td><td class="crd-td">1,19M</td><td class="crd-td">1,77M</td><td class="crd-td">3,22M</td></tr>
<tr><td class="crd-td"><strong>Blue Nile (SDN)</strong></td><td class="crd-td">132,6k</td><td class="crd-td">174,3k</td><td class="crd-td">322,3k</td><td class="crd-td">1,59M</td><td class="crd-td">811,6k</td><td class="crd-td">1,35M</td></tr>
<tr><td class="crd-td"><strong>Sool (SOL)</strong></td><td class="crd-td">15,2k</td><td class="crd-td">63,1k</td><td class="crd-td">68,8k</td><td class="crd-td">95,3k</td><td class="crd-td">212,4k</td><td class="crd-td">777k</td></tr>
<tr><td class="crd-td"><strong>Unity (SSD) [Regime III Conflict/Displacement]</strong></td><td class="crd-td">202,8k</td><td class="crd-td">194k</td><td class="crd-td">300,6k</td><td class="crd-td">449,3k</td><td class="crd-td">612,5k</td><td class="crd-td">1,19M</td></tr>
<tr><td class="crd-td"><strong>Warrap (SSD)</strong></td><td class="crd-td">388,9k</td><td class="crd-td">523,9k</td><td class="crd-td">679k</td><td class="crd-td">918,1k</td><td class="crd-td">1,01M</td><td class="crd-td">1,87M</td></tr>
<tr><td class="crd-td"><strong>Tigray (ETH) [Regime III Tigray Conflict Zone]</strong></td><td class="crd-td">566,9k</td><td class="crd-td">709,7k</td><td class="crd-td">1,42M</td><td class="crd-td">1,86M</td><td class="crd-td">3,62M</td><td class="crd-td">6,08M</td></tr>
<tr><td class="crd-td"><strong>Hiiraan (SOM)</strong></td><td class="crd-td">33,3k</td><td class="crd-td">200,2k</td><td class="crd-td">221,9k</td><td class="crd-td">230,8k</td><td class="crd-td">404k</td><td class="crd-td">626,7k</td></tr>
<tr><td class="crd-td"><strong>Gash-Barka Region (ERI)</strong></td><td class="crd-td">72,3k</td><td class="crd-td">86,9k</td><td class="crd-td">184,2k</td><td class="crd-td">208k</td><td class="crd-td">751,2k</td><td class="crd-td">570,6k</td></tr>
<tr><td class="crd-td"><strong>Northen Red Sea Region (ERI)</strong></td><td class="crd-td">90,6k</td><td class="crd-td">104,8k</td><td class="crd-td">228,4k</td><td class="crd-td">224,2k</td><td class="crd-td">260,2k</td><td class="crd-td">323,9k</td></tr>
<tr><td class="crd-td"><strong>Togdheer (SOL)</strong></td><td class="crd-td">60,7k</td><td class="crd-td">468,9k</td><td class="crd-td">354k</td><td class="crd-td">255k</td><td class="crd-td">521,5k</td><td class="crd-td">1,21M</td></tr>
<tr><td class="crd-td"><strong>Central Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">242,8k</td><td class="crd-td">398,4k</td><td class="crd-td">200,8k</td><td class="crd-td">247,1k</td><td class="crd-td">472,4k</td><td class="crd-td">930,7k</td></tr>
<tr><td class="crd-td"><strong>Gambela (ETH)</strong></td><td class="crd-td">24,6k</td><td class="crd-td">22,1k</td><td class="crd-td">57,8k</td><td class="crd-td">90,7k</td><td class="crd-td">324,6k</td><td class="crd-td">561,8k</td></tr>
<tr><td class="crd-td"><strong>Northern Bahr el Ghazal (SSD)</strong></td><td class="crd-td">403,6k</td><td class="crd-td">577,8k</td><td class="crd-td">708,1k</td><td class="crd-td">832,2k</td><td class="crd-td">749,5k</td><td class="crd-td">1,39M</td></tr>
<tr><td class="crd-td"><strong>Woqooyi Galbeed (SOL)</strong></td><td class="crd-td">51,7k</td><td class="crd-td">493,5k</td><td class="crd-td">342,5k</td><td class="crd-td">443,9k</td><td class="crd-td">903,4k</td><td class="crd-td">2,19M</td></tr>
<tr><td class="crd-td"><strong>Gezira (SDN)</strong></td><td class="crd-td">1,29M</td><td class="crd-td">2,38M</td><td class="crd-td">2,26M</td><td class="crd-td">2,72M</td><td class="crd-td">3,58M</td><td class="crd-td">6,53M</td></tr>
<tr><td class="crd-td"><strong>Nugaal (SOM)</strong></td><td class="crd-td">10,9k</td><td class="crd-td">45,2k</td><td class="crd-td">44,9k</td><td class="crd-td">118,7k</td><td class="crd-td">225,8k</td><td class="crd-td">592,8k</td></tr>
<tr><td class="crd-td"><strong>Bakool (SOM)</strong></td><td class="crd-td">33,7k</td><td class="crd-td">114,6k</td><td class="crd-td">164k</td><td class="crd-td">227k</td><td class="crd-td">334,6k</td><td class="crd-td">403,7k</td></tr>
<tr><td class="crd-td"><strong>Lower Shebelle (SOM)</strong></td><td class="crd-td">90,5k</td><td class="crd-td">177,1k</td><td class="crd-td">471,8k</td><td class="crd-td">660,9k</td><td class="crd-td">989k</td><td class="crd-td">2,93M</td></tr>
<tr><td class="crd-td"><strong>West Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">299,5k</td><td class="crd-td">517,1k</td><td class="crd-td">313,7k</td><td class="crd-td">393,9k</td><td class="crd-td">840k</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Southern Red Sea Region (ERI)</strong></td><td class="crd-td">4,5k</td><td class="crd-td">5,2k</td><td class="crd-td">9,9k</td><td class="crd-td">9,8k</td><td class="crd-td">12,7k</td><td class="crd-td">41,9k</td></tr>
<tr><td class="crd-td"><strong>Khartoum (SDN)</strong></td><td class="crd-td">504,9k</td><td class="crd-td">1,05M</td><td class="crd-td">1,8M</td><td class="crd-td">3,51M</td><td class="crd-td">5,42M</td><td class="crd-td">10,43M</td></tr>
<tr><td class="crd-td"><strong>Anseba Region (ERI)</strong></td><td class="crd-td">46,6k</td><td class="crd-td">41,2k</td><td class="crd-td">118,2k</td><td class="crd-td">113,5k</td><td class="crd-td">543,9k</td><td class="crd-td">316,5k</td></tr>
<tr><td class="crd-td"><strong>Contested (ETH)</strong></td><td class="crd-td">148,2k</td><td class="crd-td">189,6k</td><td class="crd-td">380,8k</td><td class="crd-td">507,3k</td><td class="crd-td">868,2k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Middle Juba (SOM)</strong></td><td class="crd-td">19,6k</td><td class="crd-td">127,7k</td><td class="crd-td">156,1k</td><td class="crd-td">187,3k</td><td class="crd-td">287,7k</td><td class="crd-td">533,1k</td></tr>
<tr><td class="crd-td"><strong>Middle Shebelle (SOM)</strong></td><td class="crd-td">80,8k</td><td class="crd-td">152,6k</td><td class="crd-td">327,8k</td><td class="crd-td">374,6k</td><td class="crd-td">556,2k</td><td class="crd-td">922,6k</td></tr>
<tr><td class="crd-td"><strong>Awdal (SOL)</strong></td><td class="crd-td">33,5k</td><td class="crd-td">304,3k</td><td class="crd-td">237,1k</td><td class="crd-td">193,8k</td><td class="crd-td">434,8k</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Central Ethiopia (ETH)</strong></td><td class="crd-td">755,6k</td><td class="crd-td">927k</td><td class="crd-td">1,9M</td><td class="crd-td">2,6M</td><td class="crd-td">3,18M</td><td class="crd-td">5,61M</td></tr>
<tr><td class="crd-td"><strong>Tadjourah and Obock (DJI)</strong></td><td class="crd-td">7,1k</td><td class="crd-td">9,1k</td><td class="crd-td">26,2k</td><td class="crd-td">30,4k</td><td class="crd-td">122,8k</td><td class="crd-td">104,1k</td></tr>
<tr><td class="crd-td"><strong>Abyei PCA (SDN) [Regime III Disputed Abyei PCA]</strong></td><td class="crd-td">12,9k</td><td class="crd-td">14,5k</td><td class="crd-td">29,4k</td><td class="crd-td">26,2k</td><td class="crd-td">28,4k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Debub Region (ERI)</strong></td><td class="crd-td">88,8k</td><td class="crd-td">100,7k</td><td class="crd-td">237,7k</td><td class="crd-td">295,2k</td><td class="crd-td">992,2k</td><td class="crd-td">679,7k</td></tr>
<tr><td class="crd-td"><strong>Ali Sabieh and Dikhil (DJI)</strong></td><td class="crd-td">12,5k</td><td class="crd-td">19,8k</td><td class="crd-td">48,3k</td><td class="crd-td">48,1k</td><td class="crd-td">173,9k</td><td class="crd-td">135,1k</td></tr>
<tr><td class="crd-td"><strong>Sidama (ETH)</strong></td><td class="crd-td">413,7k</td><td class="crd-td">550,4k</td><td class="crd-td">1,06M</td><td class="crd-td">1,76M</td><td class="crd-td">2,16M</td><td class="crd-td">4,14M</td></tr>
<tr><td class="crd-td"><strong>Djibouti City and Arta (DJI)</strong></td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">5,1k</td><td class="crd-td">4,1k</td><td class="crd-td">501,6k</td><td class="crd-td">825,7k</td></tr>
<tr><td class="crd-td"><strong>Maekel Region (ERI)</strong></td><td class="crd-td">35,4k</td><td class="crd-td">40k</td><td class="crd-td">118,9k</td><td class="crd-td">153k</td><td class="crd-td">243,8k</td><td class="crd-td">180,5k</td></tr>
<tr><td class="crd-td"><strong>Dire Dawa (ETH)</strong></td><td class="crd-td">29,7k</td><td class="crd-td">41,9k</td><td class="crd-td">107,1k</td><td class="crd-td">150,9k</td><td class="crd-td">170,3k</td><td class="crd-td">271,6k</td></tr>
<tr><td class="crd-td"><strong>Addis Ababa (ETH)</strong></td><td class="crd-td">56,9k</td><td class="crd-td">71,4k</td><td class="crd-td">192,4k</td><td class="crd-td">363,7k</td><td class="crd-td">1,22M</td><td class="crd-td">3,12M</td></tr>
<tr><td class="crd-td"><strong>Harari (ETH)</strong></td><td class="crd-td">13,9k</td><td class="crd-td">19,9k</td><td class="crd-td">34,2k</td><td class="crd-td">44,4k</td><td class="crd-td">71,8k</td><td class="crd-td">133,5k</td></tr>
<tr><td class="crd-td"><strong>Banadir (SOM)</strong></td><td class="crd-td">16,8k</td><td class="crd-td">308,6k</td><td class="crd-td">377,8k</td><td class="crd-td">465,4k</td><td class="crd-td">841,7k</td><td class="crd-td">971,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Population trajectories across all 71 Admin-1 divisions in Sudan, Ethiopia and the Horn from 1956AD to 2025AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:appendix-density">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Admin-1 Division</th><th class="crd-th">Area (km²)</th><th class="crd-th">Pixels</th><th class="crd-th">1956AD Dens.</th><th class="crd-th">2025AD Dens.</th><th class="crd-th">Sites</th><th class="crd-th">Obs</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern (SDN)</strong></td><td class="crd-td">366.710</td><td class="crd-td">4.534</td><td class="crd-td">0,68</td><td class="crd-td">3,13</td><td class="crd-td">19</td><td class="crd-td">79</td></tr>
<tr><td class="crd-td"><strong>North Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">319.026</td><td class="crd-td">3.872</td><td class="crd-td">0,79</td><td class="crd-td">7,68</td><td class="crd-td">30</td><td class="crd-td">132</td></tr>
<tr><td class="crd-td"><strong>Oromia (ETH)</strong></td><td class="crd-td">324.618</td><td class="crd-td">3.815</td><td class="crd-td">12,91</td><td class="crd-td">140,34</td><td class="crd-td">241</td><td class="crd-td">1.147</td></tr>
<tr><td class="crd-td"><strong>Somali (ETH)</strong></td><td class="crd-td">311.650</td><td class="crd-td">3.658</td><td class="crd-td">2,14</td><td class="crd-td">22,74</td><td class="crd-td">32</td><td class="crd-td">151</td></tr>
<tr><td class="crd-td"><strong>Red Sea (SDN)</strong></td><td class="crd-td">197.470</td><td class="crd-td">2.442</td><td class="crd-td">0,6</td><td class="crd-td">7,82</td><td class="crd-td">8</td><td class="crd-td">63</td></tr>
<tr><td class="crd-td"><strong>North Kordofan (SDN) [Regime III Kordofan Conflict]</strong></td><td class="crd-td">185.810</td><td class="crd-td">2.239</td><td class="crd-td">3,49</td><td class="crd-td">12,64</td><td class="crd-td">11</td><td class="crd-td">66</td></tr>
<tr><td class="crd-td"><strong>Amhara (ETH)</strong></td><td class="crd-td">154.421</td><td class="crd-td">1.836</td><td class="crd-td">21,95</td><td class="crd-td">156,8</td><td class="crd-td">169</td><td class="crd-td">843</td></tr>
<tr><td class="crd-td"><strong>River Nile (SDN)</strong></td><td class="crd-td">130.683</td><td class="crd-td">1.604</td><td class="crd-td">4,79</td><td class="crd-td">14,26</td><td class="crd-td">27</td><td class="crd-td">131</td></tr>
<tr><td class="crd-td"><strong>Jonglei (SSD) [Regime III Conflict/Displacement]</strong></td><td class="crd-td">122.172</td><td class="crd-td">1.435</td><td class="crd-td">3,25</td><td class="crd-td">20,4</td><td class="crd-td">5</td><td class="crd-td">22</td></tr>
<tr><td class="crd-td"><strong>West Kordofan (SDN) [Regime III Kordofan Conflict]</strong></td><td class="crd-td">105.675</td><td class="crd-td">1.258</td><td class="crd-td">6,22</td><td class="crd-td">19,45</td><td class="crd-td">15</td><td class="crd-td">92</td></tr>
<tr><td class="crd-td"><strong>Afar (ETH)</strong></td><td class="crd-td">93.693</td><td class="crd-td">1.116</td><td class="crd-td">2,8</td><td class="crd-td">24,09</td><td class="crd-td">8</td><td class="crd-td">51</td></tr>
<tr><td class="crd-td"><strong>Western Bahr el Ghazal (SSD)</strong></td><td class="crd-td">91.428</td><td class="crd-td">1.076</td><td class="crd-td">0,51</td><td class="crd-td">7,02</td><td class="crd-td">4</td><td class="crd-td">24</td></tr>
<tr><td class="crd-td"><strong>South Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">86.040</td><td class="crd-td">1.021</td><td class="crd-td">4,06</td><td class="crd-td">52,81</td><td class="crd-td">20</td><td class="crd-td">85</td></tr>
<tr><td class="crd-td"><strong>South Kordofan (SDN) [Regime III Kordofan Conflict]</strong></td><td class="crd-td">78.634</td><td class="crd-td">934</td><td class="crd-td">5,81</td><td class="crd-td">21,58</td><td class="crd-td">14</td><td class="crd-td">76</td></tr>
<tr><td class="crd-td"><strong>Western Equatoria (SSD)</strong></td><td class="crd-td">78.791</td><td class="crd-td">922</td><td class="crd-td">3,67</td><td class="crd-td">12,85</td><td class="crd-td">10</td><td class="crd-td">49</td></tr>
<tr><td class="crd-td"><strong>Upper Nile (SSD)</strong></td><td class="crd-td">77.130</td><td class="crd-td">912</td><td class="crd-td">3,74</td><td class="crd-td">24,34</td><td class="crd-td">9</td><td class="crd-td">43</td></tr>
<tr><td class="crd-td"><strong>Eastern Equatoria (SSD)</strong></td><td class="crd-td">72.628</td><td class="crd-td">849</td><td class="crd-td">1,59</td><td class="crd-td">26,45</td><td class="crd-td">7</td><td class="crd-td">31</td></tr>
<tr><td class="crd-td"><strong>Bari (SOM)</strong></td><td class="crd-td">68.523</td><td class="crd-td">811</td><td class="crd-td">0,26</td><td class="crd-td">17,15</td><td class="crd-td">2</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Gedaref (SDN)</strong></td><td class="crd-td">59.607</td><td class="crd-td">716</td><td class="crd-td">7,85</td><td class="crd-td">48,34</td><td class="crd-td">34</td><td class="crd-td">129</td></tr>
<tr><td class="crd-td"><strong>Mudug (SOM)</strong></td><td class="crd-td">59.044</td><td class="crd-td">692</td><td class="crd-td">0,88</td><td class="crd-td">18,25</td><td class="crd-td">5</td><td class="crd-td">17</td></tr>
<tr><td class="crd-td"><strong>Sanaag (SOL)</strong></td><td class="crd-td">53.981</td><td class="crd-td">639</td><td class="crd-td">0,43</td><td class="crd-td">11,49</td><td class="crd-td">2</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>East Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">50.903</td><td class="crd-td">604</td><td class="crd-td">3,67</td><td class="crd-td">37,62</td><td class="crd-td">11</td><td class="crd-td">61</td></tr>
<tr><td class="crd-td"><strong>Benishangul-Gumuz (ETH)</strong></td><td class="crd-td">50.229</td><td class="crd-td">595</td><td class="crd-td">2,62</td><td class="crd-td">26,48</td><td class="crd-td">8</td><td class="crd-td">27</td></tr>
<tr><td class="crd-td"><strong>Galgaduud (SOM)</strong></td><td class="crd-td">50.709</td><td class="crd-td">593</td><td class="crd-td">1,42</td><td class="crd-td">14,24</td><td class="crd-td">5</td><td class="crd-td">17</td></tr>
<tr><td class="crd-td"><strong>Kassala (SDN)</strong></td><td class="crd-td">49.064</td><td class="crd-td">594</td><td class="crd-td">7,18</td><td class="crd-td">65,22</td><td class="crd-td">30</td><td class="crd-td">136</td></tr>
<tr><td class="crd-td"><strong>South Ethiopia (ETH)</strong></td><td class="crd-td">48.348</td><td class="crd-td">566</td><td class="crd-td">13,86</td><td class="crd-td">144,83</td><td class="crd-td">37</td><td class="crd-td">155</td></tr>
<tr><td class="crd-td"><strong>Lower Juba (SOM)</strong></td><td class="crd-td">47.994</td><td class="crd-td">559</td><td class="crd-td">0,4</td><td class="crd-td">16,56</td><td class="crd-td">4</td><td class="crd-td">26</td></tr>
<tr><td class="crd-td"><strong>Gedo (SOM)</strong></td><td class="crd-td">45.103</td><td class="crd-td">526</td><td class="crd-td">1,04</td><td class="crd-td">14,61</td><td class="crd-td">7</td><td class="crd-td">30</td></tr>
<tr><td class="crd-td"><strong>Bay (SOM)</strong></td><td class="crd-td">44.599</td><td class="crd-td">520</td><td class="crd-td">1,76</td><td class="crd-td">29,18</td><td class="crd-td">7</td><td class="crd-td">33</td></tr>
<tr><td class="crd-td"><strong>Lakes (SSD)</strong></td><td class="crd-td">43.495</td><td class="crd-td">510</td><td class="crd-td">3,5</td><td class="crd-td">32,82</td><td class="crd-td">8</td><td class="crd-td">38</td></tr>
<tr><td class="crd-td"><strong>Central Equatoria (SSD)</strong></td><td class="crd-td">43.209</td><td class="crd-td">505</td><td class="crd-td">11,52</td><td class="crd-td">49,39</td><td class="crd-td">15</td><td class="crd-td">68</td></tr>
<tr><td class="crd-td"><strong>Sennar (SDN)</strong></td><td class="crd-td">39.335</td><td class="crd-td">470</td><td class="crd-td">7,71</td><td class="crd-td">63,64</td><td class="crd-td">19</td><td class="crd-td">111</td></tr>
<tr><td class="crd-td"><strong>South West Ethiopia (ETH)</strong></td><td class="crd-td">38.966</td><td class="crd-td">457</td><td class="crd-td">9,48</td><td class="crd-td">91,07</td><td class="crd-td">15</td><td class="crd-td">70</td></tr>
<tr><td class="crd-td"><strong>White Nile (SDN)</strong></td><td class="crd-td">38.592</td><td class="crd-td">462</td><td class="crd-td">8,95</td><td class="crd-td">83,46</td><td class="crd-td">28</td><td class="crd-td">130</td></tr>
<tr><td class="crd-td"><strong>Blue Nile (SDN)</strong></td><td class="crd-td">38.393</td><td class="crd-td">456</td><td class="crd-td">3,45</td><td class="crd-td">35,29</td><td class="crd-td">14</td><td class="crd-td">64</td></tr>
<tr><td class="crd-td"><strong>Sool (SOL)</strong></td><td class="crd-td">37.742</td><td class="crd-td">445</td><td class="crd-td">0,4</td><td class="crd-td">20,59</td><td class="crd-td">3</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Unity (SSD) [Regime III Conflict/Displacement]</strong></td><td class="crd-td">37.403</td><td class="crd-td">441</td><td class="crd-td">5,42</td><td class="crd-td">31,72</td><td class="crd-td">8</td><td class="crd-td">21</td></tr>
<tr><td class="crd-td"><strong>Warrap (SSD)</strong></td><td class="crd-td">35.612</td><td class="crd-td">419</td><td class="crd-td">10,92</td><td class="crd-td">52,52</td><td class="crd-td">7</td><td class="crd-td">29</td></tr>
<tr><td class="crd-td"><strong>Tigray (ETH) [Regime III Tigray Conflict Zone]</strong></td><td class="crd-td">33.095</td><td class="crd-td">397</td><td class="crd-td">17,13</td><td class="crd-td">183,57</td><td class="crd-td">25</td><td class="crd-td">160</td></tr>
<tr><td class="crd-td"><strong>Hiiraan (SOM)</strong></td><td class="crd-td">35.278</td><td class="crd-td">412</td><td class="crd-td">0,94</td><td class="crd-td">17,76</td><td class="crd-td">4</td><td class="crd-td">17</td></tr>
<tr><td class="crd-td"><strong>Gash-Barka Region (ERI)</strong></td><td class="crd-td">33.641</td><td class="crd-td">406</td><td class="crd-td">2,15</td><td class="crd-td">16,96</td><td class="crd-td">13</td><td class="crd-td">57</td></tr>
<tr><td class="crd-td"><strong>Northen Red Sea Region (ERI)</strong></td><td class="crd-td">32.736</td><td class="crd-td">397</td><td class="crd-td">2,77</td><td class="crd-td">9,89</td><td class="crd-td">4</td><td class="crd-td">30</td></tr>
<tr><td class="crd-td"><strong>Togdheer (SOL)</strong></td><td class="crd-td">34.334</td><td class="crd-td">405</td><td class="crd-td">1,77</td><td class="crd-td">35,21</td><td class="crd-td">1</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Central Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">31.278</td><td class="crd-td">373</td><td class="crd-td">7,76</td><td class="crd-td">29,75</td><td class="crd-td">9</td><td class="crd-td">42</td></tr>
<tr><td class="crd-td"><strong>Gambela (ETH)</strong></td><td class="crd-td">31.908</td><td class="crd-td">375</td><td class="crd-td">0,77</td><td class="crd-td">17,61</td><td class="crd-td">5</td><td class="crd-td">19</td></tr>
<tr><td class="crd-td"><strong>Northern Bahr el Ghazal (SSD)</strong></td><td class="crd-td">30.795</td><td class="crd-td">363</td><td class="crd-td">13,1</td><td class="crd-td">45,04</td><td class="crd-td">11</td><td class="crd-td">49</td></tr>
<tr><td class="crd-td"><strong>Woqooyi Galbeed (SOL)</strong></td><td class="crd-td">27.913</td><td class="crd-td">330</td><td class="crd-td">1,85</td><td class="crd-td">78,49</td><td class="crd-td">6</td><td class="crd-td">38</td></tr>
<tr><td class="crd-td"><strong>Gezira (SDN)</strong></td><td class="crd-td">27.338</td><td class="crd-td">329</td><td class="crd-td">47,15</td><td class="crd-td">238,97</td><td class="crd-td">38</td><td class="crd-td">174</td></tr>
<tr><td class="crd-td"><strong>Nugaal (SOM)</strong></td><td class="crd-td">27.627</td><td class="crd-td">325</td><td class="crd-td">0,4</td><td class="crd-td">21,46</td><td class="crd-td">2</td><td class="crd-td">10</td></tr>
<tr><td class="crd-td"><strong>Bakool (SOM)</strong></td><td class="crd-td">25.604</td><td class="crd-td">299</td><td class="crd-td">1,32</td><td class="crd-td">15,77</td><td class="crd-td">2</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Lower Shebelle (SOM)</strong></td><td class="crd-td">25.572</td><td class="crd-td">298</td><td class="crd-td">3,54</td><td class="crd-td">114,61</td><td class="crd-td">11</td><td class="crd-td">55</td></tr>
<tr><td class="crd-td"><strong>West Darfur (SDN) [Regime III Darfur Conflict/Displacement]</strong></td><td class="crd-td">21.954</td><td class="crd-td">263</td><td class="crd-td">13,64</td><td class="crd-td">57,8</td><td class="crd-td">13</td><td class="crd-td">64</td></tr>
<tr><td class="crd-td"><strong>Southern Red Sea Region (ERI)</strong></td><td class="crd-td">21.361</td><td class="crd-td">256</td><td class="crd-td">0,21</td><td class="crd-td">1,96</td><td class="crd-td">1</td><td class="crd-td">12</td></tr>
<tr><td class="crd-td"><strong>Khartoum (SDN)</strong></td><td class="crd-td">20.980</td><td class="crd-td">254</td><td class="crd-td">24,07</td><td class="crd-td">497,13</td><td class="crd-td">32</td><td class="crd-td">110</td></tr>
<tr><td class="crd-td"><strong>Anseba Region (ERI)</strong></td><td class="crd-td">21.080</td><td class="crd-td">256</td><td class="crd-td">2,21</td><td class="crd-td">15,02</td><td class="crd-td">2</td><td class="crd-td">18</td></tr>
<tr><td class="crd-td"><strong>Contested (ETH)</strong></td><td class="crd-td">18.525</td><td class="crd-td">222</td><td class="crd-td">8</td><td class="crd-td">58,23</td><td class="crd-td">10</td><td class="crd-td">60</td></tr>
<tr><td class="crd-td"><strong>Middle Juba (SOM)</strong></td><td class="crd-td">18.542</td><td class="crd-td">216</td><td class="crd-td">1,06</td><td class="crd-td">28,75</td><td class="crd-td">5</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>Middle Shebelle (SOM)</strong></td><td class="crd-td">18.520</td><td class="crd-td">216</td><td class="crd-td">4,36</td><td class="crd-td">49,81</td><td class="crd-td">3</td><td class="crd-td">18</td></tr>
<tr><td class="crd-td"><strong>Awdal (SOL)</strong></td><td class="crd-td">15.952</td><td class="crd-td">189</td><td class="crd-td">2,1</td><td class="crd-td">79,72</td><td class="crd-td">1</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Central Ethiopia (ETH)</strong></td><td class="crd-td">15.227</td><td class="crd-td">179</td><td class="crd-td">49,62</td><td class="crd-td">368,21</td><td class="crd-td">35</td><td class="crd-td">144</td></tr>
<tr><td class="crd-td"><strong>Tadjourah and Obock (DJI)</strong></td><td class="crd-td">11.249</td><td class="crd-td">134</td><td class="crd-td">0,63</td><td class="crd-td">9,26</td><td class="crd-td">7</td><td class="crd-td">19</td></tr>
<tr><td class="crd-td"><strong>Abyei PCA (SDN) [Regime III Disputed Abyei PCA]</strong></td><td class="crd-td">10.746</td><td class="crd-td">127</td><td class="crd-td">1,2</td><td class="crd-td">5,97</td><td class="crd-td">2</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Debub Region (ERI)</strong></td><td class="crd-td">9.712</td><td class="crd-td">117</td><td class="crd-td">9,14</td><td class="crd-td">69,99</td><td class="crd-td">9</td><td class="crd-td">54</td></tr>
<tr><td class="crd-td"><strong>Ali Sabieh and Dikhil (DJI)</strong></td><td class="crd-td">8.840</td><td class="crd-td">105</td><td class="crd-td">1,42</td><td class="crd-td">15,28</td><td class="crd-td">11</td><td class="crd-td">25</td></tr>
<tr><td class="crd-td"><strong>Sidama (ETH)</strong></td><td class="crd-td">6.396</td><td class="crd-td">75</td><td class="crd-td">64,67</td><td class="crd-td">647,07</td><td class="crd-td">10</td><td class="crd-td">48</td></tr>
<tr><td class="crd-td"><strong>Djibouti City and Arta (DJI)</strong></td><td class="crd-td">1.936</td><td class="crd-td">23</td><td class="crd-td">1,1</td><td class="crd-td">426,63</td><td class="crd-td">8</td><td class="crd-td">24</td></tr>
<tr><td class="crd-td"><strong>Maekel Region (ERI)</strong></td><td class="crd-td">1.159</td><td class="crd-td">14</td><td class="crd-td">30,51</td><td class="crd-td">155,72</td><td class="crd-td">4</td><td class="crd-td">21</td></tr>
<tr><td class="crd-td"><strong>Dire Dawa (ETH)</strong></td><td class="crd-td">1.101</td><td class="crd-td">13</td><td class="crd-td">26,94</td><td class="crd-td">246,75</td><td class="crd-td">1</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>Addis Ababa (ETH)</strong></td><td class="crd-td">594</td><td class="crd-td">7</td><td class="crd-td">95,84</td><td class="crd-td">5.246,95</td><td class="crd-td">2</td><td class="crd-td">20</td></tr>
<tr><td class="crd-td"><strong>Harari (ETH)</strong></td><td class="crd-td">254</td><td class="crd-td">3</td><td class="crd-td">54,82</td><td class="crd-td">525,15</td><td class="crd-td">2</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Banadir (SOM)</strong></td><td class="crd-td">172</td><td class="crd-td">2</td><td class="crd-td">97,84</td><td class="crd-td">5.659,49</td><td class="crd-td">1</td><td class="crd-td">10</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Surface area, pixel count, start- and end-epoch density (persons per km²) and interior assessed settlements across all 71 Admin-1 divisions.</figcaption>
</figure>

## Historical 1960 Lineage Units

Table \ref{tab:hgis-units} lists the 24 historical 1960 provincial lineage units across Sudan, Ethiopia and Somalia used to bridge colonial-era territorial masks into contemporary Admin-1 boundaries [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:hgis-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Unit Code</th><th class="crd-th">Country</th><th class="crd-th">Historical Lineage Unit</th><th class="crd-th">Area (km²)</th><th class="crd-th">Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>SDN_EG_01</strong></td><td class="crd-td">Sudan</td><td class="crd-td">Darfur</td><td class="crd-td">511.175</td><td class="crd-td">Lineage_SDN_1950_1973_nine- _provinces</td></tr>
<tr><td class="crd-td"><strong>SDN_EG_05</strong></td><td class="crd-td">Sudan</td><td class="crd-td">Northern</td><td class="crd-td">499.168</td><td class="crd-td">Lineage_SDN_1950_1973_nine- _provinces</td></tr>
<tr><td class="crd-td"><strong>SDN_EG_04</strong></td><td class="crd-td">Sudan</td><td class="crd-td">Kordofan</td><td class="crd-td">372.344</td><td class="crd-td">Lineage_SDN_1950_1973_nine- _provinces</td></tr>
<tr><td class="crd-td"><strong>SDN_EG_02</strong></td><td class="crd-td">Sudan</td><td class="crd-td">Kassala</td><td class="crd-td">308.242</td><td class="crd-td">Lineage_SDN_1950_1973_nine- _provinces</td></tr>
<tr><td class="crd-td"><strong>ETH_L_006</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">Oromia</td><td class="crd-td">324.604</td><td class="crd-td">Lineage_ETH_1960</td></tr>
<tr><td class="crd-td"><strong>ETH_L_008</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">Somali</td><td class="crd-td">311.737</td><td class="crd-td">Lineage_ETH_1960</td></tr>
<tr><td class="crd-td"><strong>ETH_L_002</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">Amhara</td><td class="crd-td">153.899</td><td class="crd-td">Lineage_ETH_1960</td></tr>
<tr><td class="crd-td"><strong>SDN_EG_00</strong></td><td class="crd-td">Sudan</td><td class="crd-td">Blue Nile</td><td class="crd-td">143.551</td><td class="crd-td">Lineage_SDN_1950_1973_nine- _provinces</td></tr>
<tr><td class="crd-td"><strong>ETH_L_007</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">SNNPR</td><td class="crd-td">108.570</td><td class="crd-td">Lineage_ETH_1960</td></tr>
<tr><td class="crd-td"><strong>ETH_L_001</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">Afar</td><td class="crd-td">94.098</td><td class="crd-td">Lineage_ETH_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_002</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Bari</td><td class="crd-td">68.268</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_012</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Nugaal</td><td class="crd-td">65.675</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_011</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Mudug</td><td class="crd-td">59.471</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_013</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Sanaag</td><td class="crd-td">54.158</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>ETH_L_009</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">Tigray</td><td class="crd-td">52.836</td><td class="crd-td">Lineage_ETH_1960</td></tr>
<tr><td class="crd-td"><strong>ETH_L_003</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">Beneshangul Gumu</td><td class="crd-td">50.914</td><td class="crd-td">Lineage_ETH_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_004</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Galgaduud</td><td class="crd-td">50.967</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_007</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Lower Juba</td><td class="crd-td">47.902</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_005</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Gedo</td><td class="crd-td">45.236</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_015</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Woqooyi Galbeed</td><td class="crd-td">43.641</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_003</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Bay</td><td class="crd-td">44.720</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_006</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Hiiraan</td><td class="crd-td">35.432</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>SOM_L_014</strong></td><td class="crd-td">Somalia</td><td class="crd-td">Togdheer</td><td class="crd-td">34.430</td><td class="crd-td">Lineage_SOM_1960</td></tr>
<tr><td class="crd-td"><strong>ETH_L_004</strong></td><td class="crd-td">Ethiopia</td><td class="crd-td">Gambela</td><td class="crd-td">31.488</td><td class="crd-td">Lineage_ETH_1960</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Historical 1960 administrative lineage units used for cross-epoch boundary reconciliation in Sudan, Ethiopia and Somalia.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

All regional totals in Tables \ref{tab:trajectory} and \ref{tab:appendix-pop} represent full resident populations (urban plus rural) aggregated from 5-arcminute disaggregation surfaces constrained by Admin-1 and sub-administrative census tables. Where municipal city-proper records and OECD/SWAC Africapolis metropolitan agglomerations share coordinates (for example Addis Ababa, Khartoum, Mogadishu, Hargeisa, Juba, Asmara and Djibouti), Table \ref{tab:top-centres} labels their spatial scopes separately while Figure \ref{fig:rank-size} deduplicates overlapping peaks to 1.199 unique points. Of the 1.221 total settlements in the chapter ledger, 1.161 belong to the seven core study jurisdictions and 60 sit across immediate border refugee and frontier corridors in Uganda, Chad, Kenya, Democratic Republic of the Congo and Central African Republic.
